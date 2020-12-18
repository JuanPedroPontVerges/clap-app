<template>
  <div class="tramites">
    <div class="container">
      <el-row class="page-title">
        <el-col :sm="24" :lg="24">
          <h1>Trámites</h1>
          <p>
            Aquí verás las solicitudes generadas por alumnos familiares,
            empleados o proveedores de tu institución.
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="12">
          <el-input
            placeholder="Nombre tramite"
            suffix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
          <el-col :sm="12">
            <el-select v-model="chooseTramite" placeholder="Iniciar tramite">
              <el-option
                @click.native="iniciarTramite('Descripcion_Inicio_Tramite1')"
                label="Pago Proovedor"
                value="Pago Proovedor"
              >
              </el-option>
              <el-option
                @click.native="iniciarTramite('Descripcion_Inicio_Tramite1')"
                label="Alta Proovedor"
                value="Alta Proovedor"
              >
              </el-option>
            </el-select>
          </el-col>
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
            :cell-class-name="cellTramite"
            :default-sort="{ prop: 'fecha', order: 'descending' }"
          >
            <div slot="empty">
              <p>No se encontraron resultados</p>
            </div>
            <el-table-column type="selection"> </el-table-column>
            <el-table-column prop="tramite" label="Trámite" min-width="70px">
            </el-table-column>
            <el-table-column
              prop="departamento"
              label="Departamento"
              min-width="130px"
              :filters="departamentos"
              :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column prop="fecha" label="Fecha" min-width="80px">
            </el-table-column>
            <el-table-column
              prop="pasosCompletados"
              label="Pasos"
              min-width="60px"
            >
            </el-table-column>
            <el-table-column
              prop="estado"
              label="Estado"
              min-width="80"
              :filters="[
                { text: 'Activo', value: 'Activo' },
                { text: 'Cancelado', value: 'Cancelado' },
                { text: 'Finalizado', value: 'Finalizado' },
              ]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="
                    scope.row.estado === 'Cancelado' ? 'danger' : 'success'
                  "
                  disable-transitions
                  >{{ scope.row.estado }}</el-tag
                > </template
              >>
            </el-table-column>
            <el-table-column align="center" min-width="100px">
              <template slot-scope="scope">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Editar"
                  placement="top-start"
                >
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
        <el-col :sm="12">
          <el-button
            type="danger"
            @click="eliminarTramite"
            :disabled="selected ? false : true"
            >Eliminar</el-button
          >
        </el-col>
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
import HomeEmpleadosLayout from "../layouts/HomeEmpleadosLayout";

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
      chooseTramite: "",
    };
  },
  created() {
    this.$emit(`update:layout`, HomeEmpleadosLayout);
    this.$store.state.departamentos.forEach((depto) => {
      this.departamentos.push({ text: depto.nombre, value: depto.nombre });
    });
  },
  computed: {
    getUsuario() {
      return this.$store.state.userProfile.usuario.nombre;
    },
    getTableData() {
      return this.$store.state.tramites;
    },
    displayData() {
      this.filtered = this.$store.state.tramites.filter(
        (data) =>
          !this.search ||
          data.tramite.toLowerCase().includes(this.search.toLowerCase())
      );
      this.total = this.filtered.length;
      return this.filtered.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
    getTypeOfUser() {
      return this.$store.state.userType;
    },
  },
  methods: {
    handleDelete(index) {
      this.currentRow = index;
      this.$store.commit("deleteTramite", this.currentRow);
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
        this.$store.commit("deleteTramite", this.currentRow);
      }
    },
    handleCurrentChange(val) {
      let { id, accion, fecha, interesado, pasosCompletados, tramite } = val;
      let valores = {
        id,
        accion,
        fecha,
        interesado,
        pasosCompletados,
        tramite,
      };
      this.$store.commit("setTramiteActual", valores);
      setTimeout(() => {
        this.$router.push(`/descripcion_tramite/id=${this.nroFila}`);
        this.$store.commit("setNumeroDeTramite", this.nroFila + 1);
      }, 10);
    },
    getNumeroFila(row, column, cell, event) {
      this.nroFila = this.getTableData.indexOf(row);
    },
    filterTag(value, row) {
      return row.estado === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    eliminarTramite() {
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
    cellTramite({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        return "cell-tramite";
      } else {
        return "";
      }
    },
    iniciarTramite(tramite) {
      this.$store.commit("setInicioTramite", tramite);
      this.$router.push("/inicio_tramite");
    },
  },
  components: {},
};
</script>
