<template class="procesos">
    <div class="container">
        <el-row class="page-title">
            <el-col :sm="24" :lg="24">
                <h1>Procesos</h1>
                <p>
                    Son los procesos que ofrece tu institución a sus interesados para solicitar trámites.
                </p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :sm="24" :lg="24">
                <el-table
                style="margin-top: 20px; width: 100%"
                :data="displayData"
                ref="tab"
                :header-cell-style="getRowClass"
                @cell-click="getNumeroFila"
                @current-change="handleCurrentChange"
                @selection-change="handleSelectionChange"
                empty-text
                >
                <div slot="empty">
                    <p>No se encontraron resultados</p>
                </div>
                <el-table-column prop="proceso" label="Proceso" min-width="160px">
                </el-table-column>
                <el-table-column
                    prop="departamento"
                    label="Departamento"
                    min-width="130px"
                    :filters="departamentos"
                    :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column prop="tipoSolicitante" label="Tipo Solicitante" min-width="120px">
                </el-table-column>
                <el-table-column
                    prop="tipoSolicitante"
                    label="Tipo Solicitante"
                    min-width="120px"
                    :filters="[
                    { text: 'Alumnos/Padres', value: 'Alumnos / Padres' },
                    { text: 'Empleados/Proveedores', value: 'Empleados / Proveedores' },
                    ]"
                    :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column prop="pasos" label="Pasos" min-width="100px">
                </el-table-column>
                <el-table-column align="center" min-width="150px">
                    <template slot-scope="scope">
                    <el-tooltip
                        class="item"
                        effect="dark"
                        content="Editar"
                        placement="top-start"
                    >
                        <el-button
                        type="primary"
                        icon="el-icon-edit"
                        circle
                        @click.stop="handleEdit(scope.$index)"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip
                        class="item"
                        effect="dark"
                        content="Eliminar"
                        placement="top-start"
                    >
                        <el-button
                        type="danger"
                        icon="el-icon-delete"
                        circle
                        @click.stop="handleDelete(scope.$index)"
                        ></el-button>
                    </el-tooltip>
                    </template>
                </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row type="flex" align="center">
            <el-col :sm="12" style="text-align: right">
                <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handlePaginationChange"
                :page-size="pageSize"
                :total="total"
                >
                </el-pagination>
            </el-col>
        </el-row>
    </div>
  
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";

export default {
    name: "Home",
    data() {
        return {
        form: {
            accion: "",
        },
        search: "",
        currentRow: null,
        nroFila: 0,
        departamentos: [],
        page: 1,
        pageSize: 15,
        total: 0,
        filtered: [],
        selected: false,
        selectionFiltr: [],
        };
    },
    created() {
        this.$emit(`update:layout`, HomeLayout);
        this.$store.state.departamentos.forEach((depto) => {
        this.departamentos.push({ text: depto.nombre, value: depto.nombre });
        });
    },
    computed: {
        getUsuario() {
        return this.$store.state.userProfile.usuario.nombre;
        },
        getTableData() {
        return this.$store.state.procesos;
        },
        displayData() {
        this.filtered = this.$store.state.procesos.filter(
            (data) =>
            !this.search ||
            data.interesado.toLowerCase().includes(this.search.toLowerCase())
        );
        this.total = this.filtered.length;
        return this.filtered.slice(
            this.pageSize * this.page - this.pageSize,
            this.pageSize * this.page
        );
        },
    },
    methods: {
        handleDelete(index) {
        this.currentRow = index;
        this.$store.commit("deleteProceso", this.currentRow);
        },
        handleEdit(index) {
        this.currentRow = index;
        },
        handleSelectionChange(val) {
        //this.multipleSelection = val;
        let toRemove = new Set(val);
        if (toRemove.size > 0) this.selected = true;
        else this.selected = false;
        this.selectionFiltr = this.getTableData.filter((el) => !toRemove.has(el));
        },
        handleCommand(command) {
        if (command === "eliminar") {
            this.$store.commit("deleteProceso", this.currentRow);
        }
        },
        handleCurrentChange(val) {
        let { id, proceso, departamento, tipoSolicitante, pasos } = val;
        let valores = {
            id, 
            proceso, 
            departamento, 
            tipoSolicitante, 
            pasos
        };
        this.$store.commit("setProcesoActual", valores);
        this.$router.push(`/detalle/id=${this.nroFila}`);
        },
        getNumeroFila(row, column, cell, event) {
        this.nroFila = this.getTableData.indexOf(row);
        },
        filterTag(value, row) {
        return row.tipoSolicitante === value;
        },
        filterHandler(value, row, column) {
        const property = column["property"];
        return row[property] === value;
        },
        eliminarProceso() {
        this.$store.commit("setFilteredTable", this.selectionFiltr);
        },
        handlePaginationChange(val) {
        this.page = val;
        },
        getRowClass({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
            return "background-color: #B3BEE5;";
        } else {
            return "";
        }
        },
    },
    components: {},
}
</script>

<style>

</style>