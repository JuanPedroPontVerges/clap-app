<template>
  <div style="padding: 0 30px">
    <el-row>
      <el-col :sm="24" :lg="24">
        <h2 style="color: rgb(0, 24, 93)">Tramites</h2>
        <p>
          Son las solicitudes generadas por alumnos, familiares, empelados o
          proveedores.
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
        >
          <el-table-column prop="tramite" label="Proceso" width="140px">
          </el-table-column>
          <el-table-column prop="interesado" label="Solicitante">
          </el-table-column>
          <el-table-column prop="tipo" label="Tipo"> </el-table-column>
          <el-table-column prop="departamento" label="Departamento">
          </el-table-column>
          <el-table-column prop="pasosCompletados" label="Progreso">
          </el-table-column>
          <el-table-column prop="fecha" label="Fecha"> </el-table-column>
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
    };
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
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
    handleCommand(command) {
      console.log(`click en ${command}`);
      if (command === "eliminar") {
        this.$store.commit("deleteTramite", this.currentRow);
      }
    },
    eliminarTramite(index) {
      console.log(index);
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
      console.log(row);
      console.log(column);
      console.log(cell);
    },
    filterTag(value, row) {
      return row.estado === value;
    },
    filterHandler(value, row, column) {
      console.log(column);
      const property = column["property"];
      return row[property] === value;
    },
  },
  components: {},
};
</script>

<style>
.el-table__row {
  cursor: pointer !important;
}

.text-center {
  text-align: center;
}
</style>
