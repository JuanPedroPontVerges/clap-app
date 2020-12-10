<template>
  <div>
    <el-row>
      <el-col :sm="24">
        <h1>Almacenamiento</h1>
      </el-col>
      <el-col :sm="24">
        <div style="margin:0 0 10px;">
          <i
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            officiis impedit cum!
          </i>
        </div>
      </el-col>
    </el-row>
    <el-row style="border:1px solid black; padding:20px; background-color:white;" :gutter="20">
      <el-col :sm="24">
        <div style="text-align:center;">
          <el-progress type="circle" :percentage="80" :width="250" :stroke-width="10" ></el-progress>
        </div>
      </el-col>
      <el-col :sm="24">
        <el-row>
          <el-col :xs="10" :sm="10">
            <div style="text-align:center; float:right">
              <h4>3 GB</h4>
              <p>UTILIZADOS</p>
            </div>
          </el-col>
          <el-col :xs="4" :sm="4">
            <div class="linea"></div>
          </el-col>
          <el-col :xs="10" :sm="10">
            <div style="text-align:center; float:left">
              <h4>10 GB</h4>
              <p>TOTAL</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="border:1px solid black;">
      <el-col :sm="24">
        <h3>Planes</h3>
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
      <el-col :sm="24">
        <div style="margin:20px;">
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