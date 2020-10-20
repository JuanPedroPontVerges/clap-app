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
      <span @click="setRegister()">aca</span> para poder inciar sesión
    </div>
    <div slot="footer" class="dialog-footer" style="margin-top:20px">
      <el-button @click="setShowLogInOrRegister">Cancelar</el-button>
      <el-button type="primary" @click="loguearse()">Iniciar Sesión</el-button>
    </div>
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