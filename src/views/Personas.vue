<template>
  <div class="container">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :sm="12">
        <h1>Personas</h1>
      </el-col>
      <el-col :sm="4">
        <el-button type="primary" @click="toggleDialog">Agregar</el-button>
      </el-col>
      <el-dialog
        title="Agregar Persona"
        :visible.sync="dialogVisible"
        width="350px"
      >
        <el-form :model="form" label-position="top">
          <el-row :gutter="20">
            <el-col :sm="12">
              <el-form-item label="Nombre" label-width="50">
                <el-input v-model="form.nombre" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="Email" label-width="50">
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
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
            <el-col :sm="12">
              <el-form-item label="Tipo">
                <el-select
                  v-model="form.tipo"
                  placeholder="Elija un Colaborador"
                >
                  <el-option
                    label="Coolaborador"
                    value="Coolaborador"
                  ></el-option>
                  <el-option label="Empleado" value="Empleado"></el-option>
                  <el-option label="Proovedor" value="Proovedor"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item v-if="form.tipo == 'Coolaborador'">
            <el-checkbox v-model="form.empleadoTramites"
              >Permitir crear tramites como empleado</el-checkbox
            >
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="toggleDialog">Cancelar</el-button>
          <el-button type="primary" @click="agregarPersona()"
            >Agregar</el-button
          >
        </span>
      </el-dialog>


      <el-dialog
        title="Editar Persona"
        :visible.sync="dialogEditVisible"
        width="350px"
      >
        <el-form :model="formEdit" label-position="top">
          <el-row :gutter="20">
            <el-col :sm="12">
              <el-form-item label="Nombre" label-width="50">
                <el-input v-model="formEdit.nombre" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="Email" label-width="50">
                <el-input v-model="formEdit.email" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :sm="12">
              <el-form-item label="Departamento">
                <el-select
                  v-model="formEdit.departamento"
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
            <el-col :sm="12">
              <el-form-item label="Tipo">
                <el-select
                  v-model="formEdit.tipo"
                  placeholder="Elija un Colaborador"
                >
                  <el-option
                    label="Coolaborador"
                    value="Coolaborador"
                  ></el-option>
                  <el-option label="Empleado" value="Empleado"></el-option>
                  <el-option label="Proovedor" value="Proovedor"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item v-if="formEdit.tipo == 'Coolaborador'">
            <el-checkbox v-model="formEdit.empleadoTramites"
              >Permitir crear tramites como empleado</el-checkbox
            >
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="toggleDialog">Cancelar</el-button>
          <el-button type="primary" @click="guardarPersona()"
            >Guardar</el-button
          >
        </span>
      </el-dialog>


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
          <el-table-column prop="nombre" label="Nombre" min-width="140px">
          </el-table-column>
          <el-table-column prop="email" label="Email" min-width="220px">
          </el-table-column>
          <el-table-column
            prop="departamento"
            label="Departamento"
            min-width="200px"
          >
          </el-table-column>
          <el-table-column prop="tipo" label="Tipo" min-width="140px">
          </el-table-column>
          <el-table-column align="right" min-width="200px">
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
import HomeLayout from "../layouts/HomeLayout";

export default {
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        departamento: "",
        tipo: "",
        empleadoTramites: false,
      },
      formEdit: {
        nombre: "",
        email: "",
        departamento: "",
        tipo: "",
        empleadoTramites: false,
      },
      search: "",
      page: 1,
      pageSize: 15,
      total: 0,
      filtered: [],
      selected: false,
      selectionFiltr: [],
      dialogVisible: false,
      dialogEditVisible: false,
      currentRow: 0,
    };
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  components: {
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
      this.$store.commit("getPersonaPersonas", this.currentRow);
      this.formEdit = this.getSelectedPersona
      this.dialogEditVisible = true
    },
    guardarPersona() {
      this.$store.commit('setGuardarPersona', this.formEdit)
      this.dialogEditVisible = false
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
    agregarPersona() {
      if (!this.form.nombre || !this.form.email || !this.form.tipo) {
        this.$message({
          message: "Error al agregar, complete los campos",
          type: "error",
          duration: 4000,
        });
        return;
      } else {
        this.$store.commit("setAgregarPersona", this.form);
        this.form = {};
        this.toggleDialog();
        this.$message({
          message: "Agregado correctamente",
          type: "success",
          duration: 4000,
        });
      }
    },
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;
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
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
    getSelectedPersona() {
      return this.$store.state.selectedPersona;
    },
  },
};
</script>

<style>
</style>