<template>
  <div>
    <el-row>
      <el-col :sm="24">
        <h1>Preferencias</h1>
      </el-col>
      <el-col :sm="24">
        <div style="margin: 0 0 10px">
          <i
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            officiis impedit cum!
          </i>
        </div>
      </el-col>
    </el-row>
    <el-row
      style="border: 1px solid black; padding: 20px; background-color: white"
      :gutter="20"
    >
      <el-form ref="form" :model="getForm" label-position="top">
        <el-form-item label="Habilitar Empleados" label-width="50px">
          <el-radio-group v-model="getForm.hablitaEmpleados" size="medium">
            <el-radio border label="Si"></el-radio>
            <el-radio border label="No"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Zona horaria">
          <el-select v-model="getForm.zonaHoraria">
            <el-option value="1">1</el-option>
            <el-option value="2">2</el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-checkbox-group v-model="getForm.diasDeTrabajo">
            <div>
              <el-checkbox label="Lunes"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Martes"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Miercoles"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Jueves"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Viernes"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Sabado"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="Domingo"></el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="margin: 20px">
          <el-button type="primary" @click="guardarForm">Guardar</el-button>
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