<template>
  <el-row type="flex" justify="center">
    <el-col :lg="12">
      <p style="text-align:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi
        itaque, perspiciatis sunt, excepturi magnam ipsam eum tenetur aperiam,
        quae veritatis delectus.
      </p>
    </el-col>
  </el-row>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";

export default {
  name: "Home",
  created() {
    this.$emit(`update:layout`, HomeLayout);
  }
};
</script>
