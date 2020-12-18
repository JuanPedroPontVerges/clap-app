<template>
  <div class="configuracion-departamentos">
    <el-row class="settings-title">
      <el-col :sm="24">
        <h2>Departamentos</h2>
      </el-col>
      <el-col :sm="24">
        <div style="margin: 0 0 10px">
          <p>
            Indica los departamentos que van a manejar los trámites.
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row
      class="settings-body"
      :gutter="20"
    >
      <el-col :sm="24">
        <el-form :inline="true" ref="form">
          <el-form-item>
            <el-input
              v-model="form.nombre"
              placeholder="Nombre departamento"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click.prevent="addDepartamento"
            >Agregar</el-button
          >
        </el-form>
      </el-col>
      <el-col :sm="24">
        <el-table :data="getDepartamentos" style="width: 100%">
          <el-table-column prop="nombre" label="Departamento" min-width="180">
          </el-table-column>
          <el-table-column prop="personas" label="Personas" width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="accion"
            width="120"
          >
            <!--  -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: "",
        personas: 1,
        accion: "",
      },
      selectedRow: 0,
    };
  },
  methods: {
    addDepartamento() {
      if (!this.form.nombre) {
        return;
      }
      this.$store.commit("setDepartamento", this.form);
      this.form = {
        nombre: "",
        personas: 0,
        accion: "",
      };
      this.$message({
        message: "Cambios guardados",
        type: "success",
        duration: 4000,
      });
    },
    handleDelete(index, rows) {
      this.selectedRow = index;
      this.$store.commit("deleteDepartamento", this.selectedRow);
    },
  },
  computed: {
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
  },
  created() {
    this.$store.commit("getDepartamentos");
  },
};
</script>

<style>
</style>