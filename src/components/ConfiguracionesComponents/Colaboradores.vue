<template>
  <div class="configuracion-colaboradores">
    <el-row class="settings-title">
      <el-col :sm="24">
        <h2>Colaboradores</h2>
      </el-col>
      <el-col :sm="24">
        <div>
          <p>
            Visualiza cuantos colaboradores tiene tu institución dentro de Pulpo. 
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row class="settings-body" :gutter="20">
      <el-col :sm="24">
        <h3>Total colaboradores</h3>
        <p style="font-size: 40px;margin:0px;">1</p>
      </el-col>
      <el-col :sm="24"> </el-col>
    </el-row>
    <el-row :gutter="20" class="settings-body">
      <el-col :sm="24">
        <h3>Planes</h3>
        <p style="margin-top:-10px;margin-bottom:30px;">Elige el plan que se ajuste a tu necesidad para poder sumar más miembros de tu equipo.</p>
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