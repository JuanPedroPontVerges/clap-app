<template>
  <div>
    <el-row>
      <el-col :lg="24"
        <el-row
          class="report-card"
          :style="background"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col :lg="10">
            <i :class="icono" style="font-size: 100px; color: white"></i>
          </el-col>
          <el-col :lg="14" style="padding: 20px; color: white">
            <span>{{ header_text }}</span>
            <h1 style="color: white">{{ middle_text }}</h1>
            <p>{{ footer_text }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    icono: String,
    bg_color: String,
    header_text: String,
    middle_text: String,
    footer_text: String,
  },
  computed: {
    background() {
      return "background-color: " + this.bg_color;
    },
  },
};
</script>

<style>
.report-card {
  padding: 20px;
  margin: 20px;
}
</style>