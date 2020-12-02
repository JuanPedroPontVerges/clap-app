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
                data.tramite.toLowerCase().includes(search.toLowerCase())
            )
          "
          ref="singleTable"
          highlight-current-row
          @cell-click="getNumeroFila"
          @current-change="handleCurrentChange"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="tramite" label="Tramite" width="140px">
          </el-table-column>
          <el-table-column prop="departamento" label="Departamento">
          </el-table-column>
          <el-table-column prop="interesado" label="Solicitante">
          </el-table-column>
          <el-table-column prop="tipo" label="Tipo"> </el-table-column>
          <el-table-column prop="fecha" label="Fecha"> </el-table-column>
          <el-table-column prop="pasosCompletados" label="Pasos">
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
    };
    multipleSelection = [];
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    eliminarTramite() {
      //eliminar tramite
    },
  },
  components: {},
};
</script>

<style>
html,
body,
div,
span {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.el-table__row {
  cursor: pointer !important;
}

.text-center {
  text-align: center;
}
</style>
