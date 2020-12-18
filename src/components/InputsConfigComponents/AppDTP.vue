<template>
  <el-form :model="formSetting">
    <el-form-item label="Fecha minima">
      <el-date-picker
        v-model="formSetting.fechaMin"
        type="date"
        placeholder="Elija un dia"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Fecha máxima">
      <el-date-picker
        v-model="formSetting.fechaMax"
        type="date"
        placeholder="Elija un dia"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Description">
      <el-input type="textarea" v-model="formSetting.descripcion"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formSetting: {
        fechaMin: " ",
        fechaMax: "",
        descripcion: "",
      },
    };
  },
};
</script>

<style>
</style>