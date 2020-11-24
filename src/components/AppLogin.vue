<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" @submit.prevent>
      <el-row>
        <el-col :sm="12">
          <el-form-item label="Email">
            <el-input v-model="loginForm.email" type="email"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="12">
          <el-form-item label="Contraseña">
            <el-input v-model="loginForm.contrasena" type="password">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin: 16px 0">
      <el-button type="primary" @click="loguearse()">Ingresar</el-button>
    </div>
    <p v-if="errMsg">
      {{ errMsg }}
    </p>
    <div class="extras">
      ¿No tienes cuenta?
      <router-link @click.native="setRegister()" to="/register">
        <span>Crear Cuenta</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        contrasena: "",
      },
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
        password: this.loginForm.contrasena,
      });
    },
  },
  computed: {
    errMsg() {
      return this.$store.state.errorMsg;
    },
  },
};
</script>


<style scoped>
span {
  cursor: pointer;
  color:#0049ff;
  text-decoration: none !important;
  font-weight: 600;
}
 a {
  text-decoration: none !important;
}
</style>