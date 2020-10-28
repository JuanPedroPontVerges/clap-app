<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" @submit.prevent>
      <el-form-item label="Email">
        <el-input v-model="loginForm.email" type="email"> </el-input>
      </el-form-item>
      <el-form-item label="Contraseña">
        <el-input v-model="loginForm.contrasena" type="password"> </el-input>
      </el-form-item>
    </el-form>
    <div class="extras">
      No te registraste?, registrate
      <router-link @click.native="setRegister()" to="/register">aca</router-link> para poder inciar
      sesión
    </div>
    <div slot="footer" class="dialog-footer" style="margin-top:20px">
      <el-button type="primary" @click="loguearse()">Iniciar Sesión</el-button>
    </div>
    <p v-if="errMsg">
      {{ errMsg }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        contrasena: ""
      }
    };
  },
  methods: {
    setRegister() {
      this.$store.commit("setCurrentComponent", "AppRegister");
    },
    setShowLogInOrRegister() {
      this.$store.commit("setShowLogInOrRegister");
      this.$store.commit("setCurrentComponent", "AppLogin");
    },
    loguearse() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.contrasena
      });
    }
  },
  computed: {
    errMsg() {
      return this.$store.state.errorMsg;
    }
  }
};
</script>


<style scoped>
span {
  cursor: pointer;
  color: red;
  text-decoration: underline;
}
</style>