<template>
  <el-container>
    <el-header style="background:#E1D5E7;">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :lg="4">
          <h1>CLAP</h1>
        </el-col>
        <el-col :lg="4">
          <el-button @click="signout()">cerrar sesion</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-link to="/forms"> adsd </router-link>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
</style>