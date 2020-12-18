<template>
  <el-form :model="formSetting">
    <el-form-item label="Archivos maximos">
      <el-input-number
        type="textarea"
        v-model="formSetting.archivosMaximos"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Tipos permitidos">
      <el-select v-model="formSetting.archivosPermitidos">
        <el-option
          label="Todos los archivos"
          value="Todos los archivos"
        ></el-option>
        <el-option
          label="Archivos de Texto"
          value="Archivos de Texto"
        ></el-option>
        <el-option label="Imagenes" value="Imagenes"></el-option>
        <el-option label="PDF" value="PDF"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Description">
      <el-input type="textarea" v-model="formSetting.description"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formSetting: {
        archivosMaximos: "",
        description: "",
        archivosPermitidos: "",
      },
    };
  },
};
</script>

<style>
</style>