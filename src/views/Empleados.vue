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
              <div class="login-form">
                <el-form ref="loginForm" :model="loginForm" @submit.prevent>
                  <el-row>
                    <el-col :sm="24">
                      <el-form-item label="Email">
                        <el-input v-model="loginForm.email" type="email">
                        </el-input>
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
              <div
                class="extras"
                v-if="this.$route.query.user == 'Alumno/Profesores'"
              >
                ¿No tienes cuenta?
                <a @click="toggleRegister()">
                  <span>Crear Cuenta</span>
                </a>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!-- separacion de contenidos -->
        <el-col :xs="24" :sm="6" class="login-aside-color">
          <el-col :xs="24" class="center login-aside-col">
            <el-row type="flex" align="middle" justify="center">
              <img
                class="aside-header-img"
                src="../assets/aside-header-img.jpg"
                alt=""
              />
            </el-row>
            <el-row type="flex" align="middle" justify="center">
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
      loginForm: {
        email: "",
        password: "",
      },
      icono: true,
      errMsg:''
    };
  },
  methods: {
    volver() {
      this.$router.push("/landing");
    },
    loguearse() {
      console.log("logeo");
      this.$store.dispatch("loginEmpleados", {
        email: this.loginForm.email,
        password: this.loginForm.contrasena,
      });
      this.$store.commit('setUserType', 'Proveedor')
    },
    showPassword() {
      this.icono = !this.icono;
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
