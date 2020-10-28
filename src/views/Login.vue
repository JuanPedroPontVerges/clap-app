<template>
  <el-container>
    <el-main>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12">
          <el-col :xs="24">
            <h1>La Metro</h1>
          </el-col>
          <el-col :xs="24">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio
              <br />excepturi autem molestias libero minima?
            </p>
          </el-col>
          <el-row>
            <el-col :xs="24">
              <h3>{{ this.$route.query.user }}</h3>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24">
              <AppLogin></AppLogin>
            </el-col>
          </el-row>
        </el-col>
        <!-- separacion de contenidos -->
        <el-col :xs="24" :sm="12" style="background:#E1D5E7;margin:10px 0;">
          <el-col :xs="24" class="center">
            <h1>CLAP</h1>
          </el-col>
          <el-row  class="center">
            <el-col :lg="12">
              <h2>1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi dolore inventore vel eius.
              </p>
            </el-col>
          </el-row>
          <el-row  class="center">
            <el-col :lg="12">
              <h2>2</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi dolore inventore vel eius.
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="12" class="center">
              <h2>3</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi dolore inventore vel eius.
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
        password: ""
      }
    };
  },
  methods: {
    toogleRegister() {
      this.$store.commit("setShowLogInOrRegister");
    }
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
    AppLogin
  }
};
</script>

<style>
.center {
  text-align: center;
}
</style>
