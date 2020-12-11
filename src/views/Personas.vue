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
          :header-cell-style="getRowClass"
          highlight-current-row
          empty-text
          @selection-change="handleSelectionChange"
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
            @click="eliminarPersona"
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
import AppAgregarPersona from "../components/AppAgregarPersona";
import HomeLayout from "../layouts/HomeLayout";

export default {
  data() {
    return {
      search: "",
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
    handleDelete(index) {
      this.currentRow = index;
      this.$store.commit("deletePersona", this.currentRow);
    },
    handleEdit(index) {
      this.currentRow = index;
    },
    filterTag(value, row) {
      return row.estado === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    eliminarPersona() {
      this.$store.commit("setFilteredPersonaTable", this.selectionFiltr);
    },
    handlePaginationChange(val) {
      this.page = val;
    },
    handleSelectionChange(val) {
      //this.multipleSelection = val;
      let toRemove = new Set(val);
      if (toRemove.size > 0) this.selected = true;
      else this.selected = false;
      this.selectionFiltr = this.getTableData.filter((el) => !toRemove.has(el));
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #B3BEE5;";
      } else {
        return "";
      }
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
    getTableData() {
      return this.$store.state.personas;
    },
  },
};
</script>

<style>
</style>