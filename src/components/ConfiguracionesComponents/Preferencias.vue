<template>
  <div class="configuracion-preferencias">
    <el-row class="settings-title">
      <el-col :sm="24">
        <h2>Preferencias</h2>
      </el-col>
      <el-col :sm="24">
        <div>
          <p>
            Indica configuraciones básicas para tu panel de gestión.
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row
      class="settings-body"
      :gutter="20"
    >
      <el-form ref="form" :model="getForm" label-position="top">
        <el-form-item label="Habilitar Empleados como interesados" label-width="50px">
          <el-radio-group v-model="getForm.hablitaEmpleados" size="medium">
            <el-radio border label="Si"></el-radio>
            <el-radio border label="No"></el-radio>
          </el-radio-group>
        </el-form-item>
    
        <el-form-item label="Días Laborales" class="dias-laborales">
          <el-checkbox-group v-model="getForm.diasDeTrabajo">
            <div>
              <el-checkbox label="Lunes" checked="true"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Martes" checked="true"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Miercoles" checked="true"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Jueves" checked="true"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Viernes" checked="true"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Sabado"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Domingo"></el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-blue" @click="guardarForm">Guardar</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diasDeTrabajo: [],
    };
  },
  computed: {
    getForm() {
      return this.$store.state.configuraciones.preferencias;
    },
  },
  methods: {
    guardarForm() {
      this.$store.commit("setConfigPreferencias", this.getForm);
      this.$message({
        message: "Cambios guardados",
        type: "success",
        duration: 4000,
      });
    },
  },
  created() {
    console.log(this.$store.state.configuraciones.preferencias);
  },
};
</script>

<style>
</style>