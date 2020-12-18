<template>
  <el-form :model="formSettings">
    <h2>Configuración para Checkbox</h2>
    <el-form-item label="Valores">
      <el-input type="textarea" v-model="formSettings.valores"></el-input>
    </el-form-item>
    <el-form-item label="Descripción">
      <el-input type="textarea" :rows="2" v-model="formSettings.description">
      </el-input>
    </el-form-item>
    <el-form-item label="Campo obligatorio">
      <el-radio v-model="formSettings.radio" label="1">Si</el-radio>
      <el-radio v-model="formSettings.radio" label="2">No</el-radio>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formSettings: {
        valores: "",
        description: "",
        radio: "",
      },
    };
  },
};
</script>

<style>
</style>