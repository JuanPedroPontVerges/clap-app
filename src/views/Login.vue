<template>
  <el-container>
    <el-main>
      <el-row :gutter="10" style="height: 100vh">
        <el-col :xs="24" :sm="18" style="padding: 0 50px">
          <div class="button-volver" @click="volver">
            <i class="el-icon-back">Volver</i>
          </div>
          <el-col :xs="24">
            <img src="../assets/logo-lametro.png" alt="">
          </el-col>
          <el-row v-if="getCurrentComponent === 'AppLogin'">
            <el-col :xs="24">
              <h3>Iniciar sesiòn</h3>
              <p>Acceso {{ this.$route.query.user }}</p>
            </el-col>
          </el-row>
          <el-row v-else>
            <el-col :xs="24">
              <h3>Registrar Usuario</h3>
              <p>Acceso {{ this.$route.query.user }}</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24">
              <component :is="getCurrentComponent"></component>
            </el-col>
          </el-row>
        </el-col>
        <!-- separacion de contenidos -->
        <el-col :xs="24" :sm="6" class="login-aside-color">
          <el-col :xs="24" class="center">
            <el-row
              type="flex"
              align="middle"
              justify="center"
              style="margin: 20px 0"
            >
              <img src="../assets/logo.png" alt="" />
              <h1 style="color: white">Pulpo</h1>
            </el-row>
          </el-col>
          <el-row>
            <el-col :lg="24" class="center">
              <h4 style="color: white">
                Gestión administrativa de institutos educativos
              </h4>
            </el-col>
          </el-row>
          <el-row class="center">
            <el-col :lg="24">
              <p>
                Solocita tramites, recibe notidicaciones y rcordatorios
                automativos, comparte archivos y ¡mucho más!
              </p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>


<script>
import LoginOrSignupLayout from "../layouts/LoginOrSignupLayout";
import LogInOrRegister from "../components/LogInOrRegister";
import AppLogin from "../components/AppLogin";
import AppRegister from "../components/AppRegister";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toogleRegister() {
      this.$store.commit("setShowLogInOrRegister");
    },
    volver() {
      this.$router.push('/landing')
    },
  },
  computed: {
    getCurrentComponent() {
      return this.$store.state.component;
    },
  },
  created() {
    this.$emit(`update:layout`, LoginOrSignupLayout);
  },
  beforeRouteEnter(to, from, next) {
    if (from.fullPath !== "/landing") next("/landing");
    else next();
  },
  components: {
    LogInOrRegister,
    AppLogin,
    AppRegister,
  },
};
</script>

<style>
.center {
  text-align: center;
}
.button-volver {
  cursor: pointer;
}
</style>
