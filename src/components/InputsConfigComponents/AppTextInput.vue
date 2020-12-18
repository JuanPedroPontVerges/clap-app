<template>
  <el-form :model="formSettings">
    <h3>Aca podras configurar tus campos</h3>
    <el-form-item label="Caracteres minimos">
      <el-input-number
        size="small"
        v-model="formSettings.min"
        :min="1"
        :max="10"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Caracteres máximos">
      <el-input-number
        size="small"
        v-model="formSettings.max"
        :min="25"
        :max="250"
      ></el-input-number>
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
        formSetting: {
            max: '',
            min: '',
            description: ''
        }
    };
  },
};
</script>

<style>
</style>