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
      <el-col :sm="24">
        <el-button @click="resetDateFilter">Borrar filtro de fecha</el-button>
        <el-button @click="clearFilter">Borrar todos los filtros</el-button>
        <el-table
          ref="filterTable"
          :data="
            getPersonas.filter(
              (data) =>
                !search ||
                data.nombre.toLowerCase().includes(search.toLowerCase())
            )
          "
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="nombre" label="Nombre" width="180" sortable>
          </el-table-column>
          <el-table-column prop="email" label="Email" width="180">
          </el-table-column>
          <el-table-column prop="departamento" label="Departamento">
          </el-table-column>
          <el-table-column prop="tipo" label="Tipo" width="100">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Buscar"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-more"
                @click="handleDelete(scope.$index, scope.row)"
                ></el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppAgregarPersona from "../components/AppAgregarPersona";

export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Home",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Office",
        },
        {
          date: "2016-05-04",
          name: "Bel",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Home",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Office",
        },
      ],
      search: "",
    };
  },
  components: {
    AppAgregarPersona,
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    toggleDialog() {
      this.$store.commit("setAgregarPersonaDialogo");
    },
  },
  computed: {
    getPersonas() {
      return this.$store.state.personas;
    },
  },
};
</script>

<style>
</style>