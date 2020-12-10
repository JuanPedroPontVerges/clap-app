<template>
  <el-container>
    <el-header style="background-color:#E1D5E7;">
      <el-row type="flex" align="center">
        <el-col :lg="20">
          <h1 style="text-align:center;">CLAP</h1>
        </el-col>
        <el-col :lg="4">
          <el-button>Ingresar como Admin</el-button>
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