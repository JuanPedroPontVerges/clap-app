<template>
  <el-container>
    <el-header style="background:#E1D5E7;">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :sm="4">
          <h1 v-if="getInstitucion">{{getInstitucion}}</h1>
        </el-col>
        <el-col :sm="4">
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
  },
  computed: {
    getInstitucion() {
      return this.$store.state.userProfile.institucion.nombre || "cargando";
    }
  }
};
</script>

<style>
</style>