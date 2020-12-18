<template>
  <div>
    <div class="login-form">
      <el-form ref="loginForm" :model="loginForm" @submit.prevent>
        <el-row>
          <el-col :sm="24">
            <el-form-item label="Email">
              <el-input v-model="loginForm.email" type="email"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="24">
            <el-form-item label="Contraseña">
              <el-input
                v-model="loginForm.contrasena"
                :type="icono ? 'password' : 'text'"
              >
                <el-button
                  slot="append"
                  @click="showPassword"
                  :icon="icono ? 'el-icon-lock' : 'el-icon-unlock'"
                >
                </el-button>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div>
        <el-button
          v-if="this.$route.query.user == 'Empleados/Proveedores'"
          type="primary"
          @click="loginEmpleados()"
          style="width: 40%"
          class="btn-blue"
          >Ingresar</el-button
        >
        <el-button
          v-else
          type="primary"
          @click="loguearse()"
          style="width: 40%"
          class="btn-blue"
          >Ingresar</el-button
        >
      </div>
      <p v-if="errMsg">
        {{ errMsg }}
      </p>
    </div>
    <div class="extras" v-if="this.$route.query.user == 'Alumno/Profesores'">
      ¿No tienes cuenta?
      <a @click="toggleRegister()">
        <span>Crear Cuenta</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      icono: true,
      contrasena: "",
      loginForm: {
        email: "",
        contrasena: "",
      },
      registerForm: {
        nombre: "",
        contrasena: "",
        apellido: "",
        email: "",
        telefono: "",
      },
    };
  },
  methods: {
    toggleRegister() {
      this.$store.commit("setCurrentComponent", "AppRegister");
    },
    loginEmpleados() {
      this.$store.dispatch("loginEmpleados", {
        email: this.loginForm.email,
        password: this.loginForm.contrasena,
      });
    },
    loguearse() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.contrasena,
      });
    },
    showPassword() {
      this.icono = !this.icono;
    },
  },
  computed: {
    errMsg() {
      return this.$store.state.errorMsg;
    },
  },
};
</script>


<style>
</style>