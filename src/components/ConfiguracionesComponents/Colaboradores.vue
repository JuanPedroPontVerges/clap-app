<template>
  <div>
    <el-row>
      <el-col :sm="24">
        <h1>Colaboradores</h1>
      </el-col>
      <el-col :sm="24">
        <div style="margin: 0 0 10px">
          <i
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            officiis impedit cum!
          </i>
        </div>
      </el-col>
    </el-row>
    <el-row style="border: 1px solid black; padding: 20px" :gutter="20">
      <el-col :sm="24">
        <h2>Total colaboradores</h2>
        <p style="font-size: 30px">3</p>
      </el-col>
      <el-col :sm="24"> </el-col>
    </el-row>
    <el-row :gutter="20" style="border: 1px solid black">
      <el-col :sm="24">
        <h3>Planes</h3>
      </el-col>
      <el-col :sm="8">
        <AppCard texto="Hasta 3 colaboradores" incluido="true"></AppCard>
      </el-col>
      <el-col :sm="8">
        <AppCard texto="Hasta 7 colaboradores" precio="$1500"></AppCard>
      </el-col>
      <el-col :sm="8">
        <AppCard texto="Hasta 10 colaboradores" precio="$3500"></AppCard>
      </el-col>
      <el-col :sm="24">
        <div style="margin: 20px">
          <i
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            officiis impedit cum!
          </i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import AppCard from '../AppCard'

export default {
    components: {
        AppCard
    }
};
</script>

<style>
</style>