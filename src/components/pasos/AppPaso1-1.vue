<!-- PASOS DEL 1 TRAMITE !!!!!! -->
<template>
  <div>
    <el-row style="border: 1px solid black; padding: 20px">
      <el-col :sm="12">
        <el-form label-position="top">
          <el-form-item label="Nombre">
            <el-input
              v-model="getPaso.nombreCompleto"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Id Empleado">
            <el-input
              v-model="getPaso.idEmpelado"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Periodo">
            <el-input
              v-model="getPaso.fecha"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    getPaso() {
      return this.$store.state.tramites[0].pasos[0];
    },
  },
};
</script>

<style>
</style>