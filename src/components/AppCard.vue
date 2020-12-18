<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h1 style="text-align:center;margin:0px;">{{ texto }} {{ tamano }}</h1>
    </div>
    <div v-if="incluido">
      <p style="text-align:center;">Actual</p>
    </div>
    <div v-else style="text-align:center;">
      <p style="font-size: 25px;font-weight:bold;">{{ precio }} <span style="font-size:14px;">/mes</span></p>
      <el-button title="Comprar" class="btn-blue" style="padding: 15px 40px;" type="primary">Comprar</el-button>
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