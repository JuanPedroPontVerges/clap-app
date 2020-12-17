<template>
  <div class="login">
    <el-container>
        <el-row :gutter="10" class="container-login">
          <el-col :xs="24" :sm="18" class="form">
            <div class="button-volver" @click="volver">
              <i class="el-icon-back">Volver</i>
            </div>
            <el-row v-if="getCurrentComponent === 'AppLogin'" class="header">
              <el-col :xs="24">
                <h1>Iniciar sesiòn</h1>
                <p>Acceso {{ this.$route.query.user }}</p>
              </el-col>
            </el-row>
            <el-row v-else>
              <el-col :xs="24">
                <h1>Registrar Usuario</h1>
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
            <el-col :xs="24" class="center login-aside-col">
              <el-row
                type="flex"
                align="middle"
                justify="center"
              >
                <img class="aside-header-img" src="../assets/aside-header-img.jpg" alt="" />
              </el-row>
              <el-row
                type="flex"
                align="middle"
                justify="center"
              >
                <img class="logo-pulpo" src="../assets/logo_full.png" alt="" />
              </el-row>
            </el-col>
            <el-row>
              <el-col :lg="24" class="center">
                <h2 style="color: white">
                  Gestión administrativa de institutos educativos
                </h2>
              </el-col>
            </el-row>
            <el-row class="center">
              <el-col :lg="24">
                <p>
                  Solicita trámites, recibe notificaciones y recordatorios
                  automáticos, comparte archivos y ¡mucho más!
                </p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
    </el-container>
  </div>
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
