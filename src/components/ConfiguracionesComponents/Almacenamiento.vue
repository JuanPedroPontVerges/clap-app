<template>
  <div class="configuracion-almacenamiento">
    <el-row class="settings-title">
      <el-col :sm="24">
        <h2>Almacenamiento</h2>
      </el-col>
      <el-col :sm="24">
        <div style="margin:0 0 10px;">
          <p>
            Visualiza el consumo de almacenamiento que tiene tu institución. 
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row class="settings-body" :gutter="20">
      <el-col :sm="24">
        <div style="text-align:center;">
          <el-progress type="circle" :percentage="1" :width="250" :stroke-width="10" ></el-progress>
        </div>
      </el-col>
      <el-col :sm="24">
        <el-row>
          <el-col :xs="10" :sm="10">
            <div style="text-align:center; float:right">
              <h1>25 MB</h1>
              <p style="margin-top:0px">UTILIZADOS</p>
            </div>
          </el-col>
          <el-col :xs="4" :sm="4">
            <div class="linea" style="padding-top:30px"></div>
          </el-col>
          <el-col :xs="10" :sm="10">
            <div style="text-align:center; float:left">
              <h1>10 GB</h1>
              <p style="margin-top:0px">TOTAL</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="settings-body">
      <el-col :sm="24">
        <h3>Planes</h3>
        <p style="margin-top:-10px;margin-bottom:30px;">Elige el plan que se ajuste a tu necesidad para poder alojar más datos.</p>
      </el-col>
      <el-col :sm="6">
        <AppCard texto="10" tamano="GB" incluido="true"></AppCard>
      </el-col>
      <el-col :sm="6">
        <AppCard texto="50" tamano="GB" precio="$500"></AppCard>
      </el-col>
      <el-col :sm="6">
        <AppCard texto="100" tamano="GB" precio="$1000"></AppCard>
      </el-col>
      <el-col :sm="6">
        <AppCard texto="1" tamano="TB" precio="$2500"></AppCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppCard from "../AppCard";

export default {
  data() {
    return {};
  },
  components: {
    AppCard
  }
};
</script>

<style>
.linea {
  height: 70px;
  background: black;
  width: 0px;
  border: 1px solid black;
  margin: 10px auto;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>