<template>
  <div>
    <el-row type="flex" align="middle" v-for="(i, index) in 3" :key="index">
      <el-col :sm="2"> <p style="border: 1px solid black">{{index + 1}}</p> </el-col>
      <el-col :sm="20">
        <p>Titulo</p>
        <p>Ejecutado por</p>
      </el-col>
      <el-col :sm="2">
        <el-checkbox v-model="checked[index]"></el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: [],
    };
  },
};
</script>

<style>
</style>