<template>
  <el-container>
    <el-aside width="50%">
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <h1>La Metro</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis odio
            <br />excepturi autem molestias libero minima?
          </p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <h3>{{this.$route.query.user}}</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <component :is="currentComponent"></component>
        </el-col>
      </el-row>
    </el-aside>
    <el-aside width="50%" style="background:#E1D5E7;">
      <el-row type="flex" justify="center" style="text-align:center;">
        <el-col :span="12">
          <h1>CLAP</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="text-align:center;">
        <el-col :lg="12">
          <h2>1</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            eligendi dolore inventore vel eius.
          </p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="text-align:center;">
        <el-col :lg="12">
          <h2>2</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            eligendi dolore inventore vel eius.
          </p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="12" style="text-align:center;">
          <h2>3</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            eligendi dolore inventore vel eius.
          </p>
        </el-col>
      </el-row>
    </el-aside>
  </el-container>
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
        password: ""
      }
    };
  },
  methods: {
    toogleRegister() {
      this.$store.commit("setShowLogInOrRegister");
    }
  },
  computed: {
    registerDialog() {
      return this.$store.state.loginOrRegister;
    },
    currentComponent() {
      return this.$store.state.component;
    }
  },
  created() {
    this.$emit(`update:layout`, LoginOrSignupLayout);
  },
  beforeRouteEnter (to, from, next) {
    if(from.fullPath !== "/landing")
      next("/landing")
    else 
      next()
  },
  components: {
    LogInOrRegister,
    AppLogin,
    AppRegister
  }
};
</script>

<style></style>
