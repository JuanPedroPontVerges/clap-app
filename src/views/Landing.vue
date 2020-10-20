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
    <el-row type="flex" justify="center">
      <el-col :lg="9" class="centrado">
        <h3>Alumnos/Profesores</h3>
        <el-button @click="toogleRegister()">Ingresar</el-button>
        <LogInOrRegister
          v-if="registerDialog"
          @close="toogleRegister()"
        ></LogInOrRegister>
      </el-col>
      <el-col :lg="1">
        <div class="linea"></div>
      </el-col>
      <el-col :lg="8" class="centrado">
        <h3>Empelados/Proveedores</h3>
        <el-button @click="toogleRegister()">Ingresar</el-button>
        <LogInOrRegister
          v-if="registerDialog"
          @close="toogleRegister()"
        ></LogInOrRegister>
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
}
.centrado {
  text-align: center;
}
</style>