<template class="tramites">
  <div class="container">
    <el-row class="page-title">
      <el-col :sm="24" :lg="24">
        <h1>Trámites</h1>
        <p>
          Aquí verás las solicitudes generadas por alumnos familiares, empleados
          <br />
          o proveedores de tu institución.
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="12">
        <el-input
          placeholder="Nombre solicitante"
          suffix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24" :lg="24">
        <el-table
          style="margin-top: 20px; width: 100%"
          :data="displayData"
          ref="tab"
          highlight-current-row
          @cell-click="getNumeroFila"
          @current-change="handleCurrentChange"
          @selection-change="handleSelectionChange"
          empty-text
        >
          <div slot="empty">
            <p>No se encontraron resultados</p>
          </div>
          <el-table-column type="selection"> </el-table-column>
          <el-table-column prop="tramite" label="Trámite" width="200px">
          </el-table-column>
          <el-table-column
            prop="departamento"
            label="Departamento"
            width="130px"
            :filters="departamentos"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column prop="interesado" label="Solicitante" width="120px">
          </el-table-column>
          <el-table-column
            prop="tipo"
            label="Tipo"
            width="120px"
            :filters="[
              { text: 'Proveedor', value: 'Proveedor' },
              { text: 'Interesado', value: 'Interesado' },
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column prop="fecha" label="Fecha" width="120px">
          </el-table-column>
          <el-table-column prop="pasosCompletados" label="Pasos" width="120px">
          </el-table-column>
          <el-table-column
            prop="estado"
            label="Estado"
            width="100"
            :filters="[
              { text: 'Activo', value: 'Activo' },
              { text: 'Cancelado', value: 'Cancelado' },
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.estado === 'Activo' ? 'success' : 'danger'"
                disable-transitions
                >{{ scope.row.estado }}</el-tag
              > </template
            >>
          </el-table-column>
          <el-table-column align="center" width="120px">
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
        <el-divider></el-divider>
        <el-col :sm="12">
          <el-button
            type="danger"
            @click="eliminarTramite"
            :disabled="selected ? false : true"
            >Eliminar</el-button
          >
        </el-col>
        <div style="text-align: right">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handlePaginationChange"
            :page-size="pageSize"
            :total="total"
          >
          </el-pagination>
        </div>
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
      return this.$store.state.tramites;
    },
    displayData() {
      this.filtered = this.$store.state.tramites.filter(
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
      this.$router.push(`/descripcion/id=${this.nroFila}`);
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
  },
  components: {},
};
</script>
