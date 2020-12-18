<template>
  <div>
    <el-row>
      <el-col :sm="24" :lg="24">
        <h2>Tramites</h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
};
</script>

<style>

</style>
