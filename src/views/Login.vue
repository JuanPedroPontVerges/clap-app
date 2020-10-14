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
          <h3>Alumnos/Profesores</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <el-form :model="form">
            <el-form-item label="">
              <el-input v-model="form.email" type="text"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="form.password" type="text"></el-input>
            </el-form-item>
            <el-button type="submit">Ingresar</el-button>
            <div class="extras">
              <p>¿Aún no tienes cuenta?</p>
              <a href="">Registrate ahora</a>
            </div>
          </el-form>
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

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  created() {
    this.$emit(`update:layout`, LoginOrSignupLayout);
  },
  components: {}
};
</script>

<style>
</style>