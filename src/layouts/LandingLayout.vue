<template>
  <el-container>
    <el-header class="landing-header">
      <el-row type="flex" justify="center">
        <el-col :lg="10">
          <img src="../assets/logo.png" alt="">
        </el-col>
        <el-col :lg="12" class="landing-header-login">
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