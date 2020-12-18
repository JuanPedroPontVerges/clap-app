<template class="reportes">
  <div class="container">
    <el-row>
      <el-col :lg="6">
        <AppReportCards></AppReportCards>
      </el-col>
      <el-col :lg="6">
        <AppReportCards></AppReportCards>
      </el-col>
      <el-col :lg="6">
        <AppReportCards></AppReportCards>
      </el-col>
      <el-col :lg="6">
        <AppReportCards></AppReportCards>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
import AppReportCards from "../components/AppReportCards";

export default {
  data() {
    return {};
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  components: {
    AppReportCards,
  },
};
</script>

<style>
</style>