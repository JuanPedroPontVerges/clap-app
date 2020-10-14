<template>
  <el-container>
    <el-header style="background-color:#E1D5E7;">
      <el-row>
        <el-col :lg="24">
          <h1 style="text-align:center;">CLAP</h1>
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