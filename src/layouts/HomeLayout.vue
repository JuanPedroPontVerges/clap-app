<template>
  <el-container>
    <el-header style="background:#E1D5E7;">
      <el-row type="flex" justify="center">
        <el-col :lg="1">
          <h1>CLAP</h1>
          <router-link to="/forms"> adsd </router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
</style>