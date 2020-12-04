<template class="tramites">
  <div>
    <el-row class="page-title">
      <el-col :sm="24" :lg="24">
        <h1>Trámites</h1>
        <p>
          Aquí verás las solicitudes generadas por alumnos, familiares,
          empleados o proveedores de tu institución.
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="12">
        <el-button type="danger" @click="eliminarTramite">Eliminar</el-button>
      </el-col>
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
          style="margin-top: 20px"
          :data="
            getTableData.filter(
              (data) =>
                !search ||
                data.interesado.toLowerCase().includes(search.toLowerCase())
            )
          "
          ref="singleTable"
          highlight-current-row
          @cell-click="getNumeroFila"
          @current-change="handleCurrentChange"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column prop="tramite" label="Trámite" width="120px">
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
          <el-table-column align="center">
            <template slot-scope="scope">
              <el-dropdown trigger="click" @command="handleCommand">
                <el-button
                  type="primary"
                  size="mini"
                  @click.stop="handleAccion(scope.$index)"
                >
                  <i class="el-icon-more" style="transform: rotate(90deg)"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="eliminar"
                    >Eliminar</el-dropdown-item
                  >
                  <el-dropdown-item command="editar">Editar</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
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
  },
  methods: {
    handleAccion(index) {
      this.currentRow = index;
      console.log(index);
    },
    handleSelectionChange(val) {
      //this.multipleSelection = val;
      const toRemove = new Set(val);
      const filtered = this.getTableData.filter((el) => !toRemove.has(el));
      this.filtered = filtered;
    },
    handleCommand(command) {
      console.log(`click en ${command}`);
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
      this.$store.commit("setFilteredTable", this.filtered);
    },
  },
  components: {},
};
</script>