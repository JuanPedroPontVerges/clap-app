<template>
  <div>
    <el-row style="text-align:center;">
      <el-col :lg="24">
        <h1>La Metro</h1>
      </el-col>
      <el-col :lg="24">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          minus<br />
          corporis voluptates sunt. Quo, rerum.
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="11" class="centrado">
        <div>
          <h3>Alumnos/Profesores</h3>
          <router-link to="/login?user=Alumno/Profesores">
            <el-button>Ingresar</el-button>
          </router-link>
        </div>
      </el-col>
      <el-col :lg="2" :sm="2">
        <div class="linea hidden-xs-only"></div>
        <div class="linea2 hidden-sm-and-up"></div>
      </el-col>
      <el-col :xs="24" :sm="11" :md="11" class="centrado">
        <div>
          <h3>Empelados/Proveedores</h3>
          <router-link to="/login?user=Empleados/Proveedores">
            <el-button>Ingresar</el-button>
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