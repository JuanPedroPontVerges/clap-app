<template>
  <el-container>
    <el-header class="landing-header">
      <el-row type="flex" align="middle">
        <el-col :lg="10">
          <h1>CLAP</h1>
        </el-col>
        <el-col :lg="12">
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