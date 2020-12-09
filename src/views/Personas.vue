<template>
  <div class="container">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :sm="12">
        <h1>Personas</h1>
      </el-col>
      <el-col :sm="4">
        <el-button type="primary" @click="toggleDialog">Agregar</el-button>
      </el-col>
      <AppAgregarPersona></AppAgregarPersona>
    </el-row>
    <el-row>
      <el-col :sm="24">
        <div style="margin: 0 0 10px">
          <i
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            officiis impedit cum!
          </i>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="12">
        <el-button type="danger" @click="eliminarPersona">Eliminar</el-button>
      </el-col>
      <el-col :sm="12">
        <el-input
          placeholder="Buscar..."
          suffix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24">
        <el-table
          style="margin-top: 20px; width: 100%"
          :data="displayData"
          ref="tab"
          highlight-current-row
          empty-text
          stripe
        >
          <div slot="empty">
            <p>No se encontraron resultados</p>
          </div>
          <el-table-column type="selection"> </el-table-column>
          <el-table-column prop="nombre" label="Nombre" width="200px">
          </el-table-column>
          <el-table-column prop="email" label="Email" width="200px">
          </el-table-column>
          <el-table-column
            prop="departamento"
            label="Departamento"
            width="200px"
          >
          </el-table-column>
          <el-table-column prop="tipo" label="Tipo" width="200px">
          </el-table-column>
          <el-table-column align="right">
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
        <el-divider></el-divider>

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
import AppAgregarPersona from "../components/AppAgregarPersona";
import HomeLayout from "../layouts/HomeLayout";

export default {
  data() {
    return {
      search: "",
      filtered: null,
      page: 1,
      pageSize: 15,
      total: 0,
      filtered: [],
    };
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  components: {
    AppAgregarPersona,
    HomeLayout,
  },
  methods: {
    toggleDialog() {
      this.$store.dispatch("changeDialogState");
    },
    handleCommand(command) {
      console.log(`click en ${command}`);
      if (command === "eliminar") {
        this.$store.commit("deletePersona", this.currentRow);
      }
    },
    handleAccion(index) {
      this.currentRow = index;
      console.log(index);
    },
    filterTag(value, row) {
      return row.estado === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    eliminarPersona() {
      this.$store.commit("setFilteredPersonaTable", this.filtered);
    },
    handlePaginationChange(val) {
      this.page = val;
    },
  },
  computed: {
    displayData() {
      this.filtered = this.$store.state.personas.filter(
        (data) =>
          !this.search ||
          data.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
      this.total = this.filtered.length;
      return this.filtered.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
};
</script>

<style>
</style>