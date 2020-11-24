<template>
  <el-container>
    <el-main>
      <el-row :gutter="10" style="height: 100vh">
        <el-col :xs="24" :sm="18" style="padding: 0 50px">
          <div class="button-volver" @click="volver">
            <i class="el-icon-back">Volver</i>
          </div>
          <el-col :xs="24">
            <h1>La Metro</h1>
          </el-col>
          <el-row>
            <el-col :xs="24">
              <h3>Iniciar sesiòn</h3>
              <p>Acceso {{ this.$route.query.user }}</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24">
              <AppLogin></AppLogin>
            </el-col>
          </el-row>
        </el-col>
        <!-- separacion de contenidos -->
        <el-col :xs="24" :sm="6" class="aside">
          <el-col :xs="24" class="center">
            <el-row type="flex" align="middle" justify="center" style="margin:20px 0;">
              <img src="../assets/logo.png" alt="" />
              <h1>Pulpo</h1>
            </el-row>
          </el-col>
          <el-row>
            <el-col :lg="24" class="center">
              <h4>Gestión administrativa de institutos educativos</h4>
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
      alert("a");
    },
  },
  computed: {},
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

.aside {
  background-image: url("../assets/login-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  color: white;
}
</style>
