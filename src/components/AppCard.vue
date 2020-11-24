<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h2 style="text-align:center;">{{ texto }} <br />{{ tamano }}</h2>
    </div>
    <div v-if="incluido">
      <p style="text-align:center;">Incluido</p>
    </div>
    <div v-else style="text-align:center;">
      <p>{{ precio }}</p>
      <el-button title="Comprar" type="primary">Comprar</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["texto", "tamano", "precio", "incluido"]
};
</script>

<style>
</style>