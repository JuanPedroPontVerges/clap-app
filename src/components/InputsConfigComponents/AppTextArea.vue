<template>
  <el-form :model="formSettings">
    <h2>Configuración para TextArea</h2>
    <el-form-item label="Caracteres minimos">
      <el-input-number
        size="small"
        v-model="formSettings.min"
        :min="10"
        :max="40"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Caracteres máximos">
      <el-input-number
        size="small"
        v-model="formSettings.max"
        :min="40"
        :max="250"
      ></el-input-number>
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
        max: "",
        min: "",
        description: "",
      },
    };
  },
};
</script>

<style>
</style>