<template >
  <div class="procesos">
    <div class="container">
      <el-row
        class="page-title"
        type="flex"
        justify="space-between"
        align="middle"
      >
        <el-col :sm="20" >
          <h1>Procesos</h1>
          <p>
            Son los procesos que ofrece tu institución a sus interesados para
            solicitar trámites.
          </p>
        </el-col>
        <el-col :sm="4" type="flex" align="end">
          <el-button type="primary" @click="toggleDialog">Agregar</el-button>
        </el-col>
        <el-dialog
          title="Agregar Proceso"
          :visible.sync="dialogVisible"
          width="350px"
        >
          <el-form :model="form" label-position="top">
            <el-row :gutter="20">
              <el-col :sm="12">
                <el-form-item label="Nombre" label-width="50">
                  <el-input v-model="form.titulo" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="12">
                <el-form-item label="Departamento">
                  <el-select
                    v-model="form.departamento"
                    placeholder="Elija un Departamento"
                  >
                    <el-option
                      v-for="(departamento, index) in getDepartamentos"
                      :key="index"
                      :label="departamento.nombre"
                      :value="departamento.nombre"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :sm="24">
                <el-form-item label="Tipo Interesado">
                  <el-select
                    v-model="form.tipoInteresado"
                    placeholder="Interesado"
                  >
                    <el-option
                      label="Alumno / Familiar"
                      value="Alumno/Familiar"
                    ></el-option>
                    <el-option
                      label="Empleado / Proveedor"
                      value="Empleado/Proveedor"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :sm="24">
                <el-form-item label="Descripción" label-width="50">
                  <el-input
                    type="textarea"
                    v-model="form.descripcion"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="toggleDialog">Cancelar</el-button>
            <el-button type="primary" @click="agregarProceso()"
              >Agregar</el-button
            >
          </span>
        </el-dialog>
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
            <el-table-column prop="titulo" label="Proceso" min-width="80px">
            </el-table-column>
            <el-table-column
              prop="departamento"
              label="Departamento"
              min-width="80px"
              :filters="departamentos"
              :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column
              prop="tipoInteresado"
              label="Tipo Solicitante"
              min-width="80px"
              :filters="[
                { text: 'Alumnos/Padres', value: 'Alumnos / Padres' },
                {
                  text: 'Empleados/Proveedores',
                  value: 'Empleados / Proveedores',
                },
              ]"
              :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column prop="paso" label="Pasos" min-width="60px">
            </el-table-column>
            <el-table-column align="center" min-width="60px">
              <template slot-scope="scope">
                
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
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";

export default {
  name: "Home",
  data() {
    return {
      form: {
        titulo: "",
        descripcion: "",
        departamento: "",
        tipoInteresado: "",
        id: 0,
        pasos: [
          {
            id: 0,
            titulo: "Recepcion Solicitud",
            responsable: "Interesado",
            dscripcion: "Descripción de Receipción Solicitud",
            campos: [
              {
                id: 0,
                nombre: "",
                tipo: "",
              },
            ],
          },
        ],
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
      dialogVisible: false,
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
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
    getGeneratedID() {
      return this.$store.state.generatedID;
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
      this.$store.commit("setProcesoActual", val.id);
      setTimeout(() => {
        this.$router.push(`/nuevo_proceso/id?=${val.id}`);
      }, 10);
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
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    agregarProceso() {
      this.$store.commit("setAgregarProceso", this.form);
      this.$store.commit("setProcesoActual", this.form);
      this.$store.commit("setGeneratedID");
      this.form.id = this.$store.state.generatedID;
      this.$router.push(`/nuevo_proceso/id?=${this.form.id}`);
      this.form = {};
    },
    handleBack() {
      this.$router.back();
    },
  },
  components: {},
};
</script>

<style>
</style>