<template>
  <div class="landing-layout">
    <el-container>
      <el-header class="landing-header">
        <el-row type="flex" justify="end">
          <el-col :span="6" class="logo">
            <img src="../assets/logo.png" alt="">
          </el-col>
          <el-col :span="6" class="landing-header-login">
            <el-button class="btn-violet">Ingreso Administrador</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>