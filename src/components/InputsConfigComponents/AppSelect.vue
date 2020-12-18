<template>
  <el-form :model="formSettings">
    <el-form-item label="Valores">
      <el-input type="textarea" v-model="formSettings.valores"></el-input>
    </el-form-item>
    <el-form-item label="Descripción">
      <el-input type="textarea" :rows="2" v-model="formSettings.description">
      </el-input>
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
      },
    };
  },
};
</script>

<style>
</style>