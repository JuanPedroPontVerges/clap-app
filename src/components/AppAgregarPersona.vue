<template>
  <el-dialog title="Agregar Persona" :visible.sync="getAgregarPersonaDialog">
    <el-form :model="form">
      <el-form-item label="Nombre" label-width="50">
        <el-input v-model="form.nombre" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Email" label-width="50">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Departamento" label-width="50">
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
      <el-form-item label="Tipo">
        <el-select v-model="form.tipo" placeholder="Elija un Colaborador">
          <el-option label="Coolaborador" value="Coolaborador"></el-option>
          <el-option label="Empleado" value="Empleado"></el-option>
          <el-option label="Proovedor" value="Proovedor"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.empleadoTramites"
          >Permitir crear tramites como empleado</el-checkbox
        >
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="toggleDialog">Cancelar</el-button>
      <el-button type="primary" @click="agregarPersona()">Agregar</el-button>
    </span>
  </el-dialog>
</template>

<script>
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
    };
  },
  computed: {
    getAgregarPersonaDialog() {
      return this.$store.state.agregarPersonaDialog;
    },
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
  },
  methods: {
    toggleDialog() {
      this.$store.commit("setAgregarPersonaDialogo");
    },
    agregarPersona() {
      this.$store.commit("setAgregarPersona", this.form);
      this.toggleDialog()
    },
  },
};
</script>

<style>
</style>