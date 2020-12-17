<template>
  <div class="landing">
    <el-row class="header">
      <el-col :lg="24">
        <img src="../assets/logoMetro.png" alt="">
      </el-col>
      <el-col :lg="24">
        <p>
          Bienvenido al panel de gestión de la institución. Desde aqui podrás solicitar y dar seguimiento de tus trámites.
        </p>
      </el-col>
    </el-row>
    <el-row class="contenedor">
      <el-col :xs="24" :sm="11" class="centrado">
        <div>
          <h2>Alumnos/Padres</h2>
          <router-link to="/login?user=Alumno/Profesores">
            <el-button class="btn-blue">Ingresar</el-button>
          </router-link>
        </div>
      </el-col>
      <el-col :lg="2" :sm="2">
        <div class="linea hidden-xs-only"></div>
        <div class="linea2 hidden-sm-and-up"></div>
      </el-col>
      <el-col :xs="24" :sm="11" :md="11" class="centrado">
        <div>
          <h2>Empleados/Proveedores</h2>
          <router-link to="/login?user=Empleados/Proveedores">
            <el-button class="btn-blue">Ingresar</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LandingLayout from "../layouts/LandingLayout";
import LogInOrRegister from "../components/LogInOrRegister";

export default {
  data() {
    return {};
  },
  created() {
    this.$emit(`update:layout`, LandingLayout);
  },
  methods: {
    toogleRegister() {
      this.$store.commit("setShowLogInOrRegister");
    }
  },
  computed: {
    registerDialog() {
      return this.$store.state.loginOrRegister;
    }
  },
  components: {
    LogInOrRegister
  }
};
</script>

<style>
.linea {
  height: 70px;
  background: black;
  width: 0px;
  border: 1px solid black;
  margin: auto;
}
.linea2 {
  height: 0px;
  background: black;
  width: 180px;
  border: 1px solid black;
  margin: 20px auto;
}
.centrado {
  text-align: center;
}
</style>