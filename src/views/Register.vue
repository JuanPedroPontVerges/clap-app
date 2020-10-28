<template>
  <el-container>
    <el-aside width="50%">
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <h1>CLAP</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <h2 v-if="active == 0">Registrar Usuario</h2>
          <h2 v-else>Registrar Institución</h2>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :lg="16">
          <el-form
            ref="registerForm"
            :model="registerForm"
            v-if="active == 0"
            @submit.prevent
          >
            <el-form-item label="Email">
              <el-input v-model="registerForm.usuario.email" type="email">
              </el-input>
            </el-form-item>
            <el-form-item label="Nombre">
              <el-input v-model="registerForm.usuario.nombre" type="text">
              </el-input>
            </el-form-item>
            <el-form-item label="Apellido">
              <el-input v-model="registerForm.usuario.apellido" type="text">
              </el-input>
            </el-form-item>
            <el-form-item label="Contraseña">
              <el-input
                v-model="registerForm.usuario.contrasena"
                type="password"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <el-form
            ref="registerForm"
            :model="registerForm"
            @submit.prevent
            v-else
          >
            <el-form-item label="Nombre">
              <el-input v-model="registerForm.institucion.nombre" type="text">
              </el-input>
            </el-form-item>
            <el-form-item label="Tiene sitio web">
              <el-radio
                label="Si"
                v-model="registerForm.institucion.tieneSitioWeb"
              ></el-radio>
              <el-radio
                label="No"
                v-model="registerForm.institucion.tieneSitioWeb"
              ></el-radio>
            </el-form-item>
            <el-form-item
              label="Sitio web"
              v-if="registerForm.institucion.tieneSitioWeb === 'Si'"
            >
              <el-input v-model="registerForm.institucion.sitioWeb"> </el-input>
            </el-form-item>
            <el-form-item label="Cantidad de interesados" size="small">
              <el-input
                v-model="registerForm.institucion.interesados"
                type="number"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <el-button
            style="margin-top: 12px;"
            @click="next()"
            v-if="active == 0"
            >Proximo paso</el-button
          >
          <el-button style="margin-top: 12px;" @click="registrar()" v-else
            >Finalizar</el-button
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-steps :active="active" finish-status="success">
            <el-step title="Usuario"></el-step>
            <el-step title="Institución"></el-step>
          </el-steps>
        </el-col>
      </el-row>
    </el-aside>
    <el-aside width="50%" style="background:#E1D5E7;">
      <div v-if="active == 0">
        <el-row type="flex" justify="center" style="text-align:center;">
          <el-col :span="12">
            <h1>CLAP</h1>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="text-align:center;">
          <el-col :lg="12">
            <h2>Email</h2>
            <p>Email: {{ this.registerForm.usuario.email }}</p>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="text-align:center;">
          <el-col :lg="12">
            <h2>Nombre</h2>
            <p>Nombre: {{ this.registerForm.usuario.nombre }}</p>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :lg="12" style="text-align:center;">
            <h2>Apellido</h2>
            <p>Apellido: {{ this.registerForm.usuario.apellido }}</p>
          </el-col>
        </el-row>
      </div>
      <div v-else>
        <el-row type="flex" justify="center" style="text-align:center;">
          <el-col :span="12">
            <h1>Tu institucion</h1>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="text-align:center;">
          <el-col :lg="12">
            <h2>Nombre</h2>
            <p>Nombre: {{ this.registerForm.institucion.nombre }}</p>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="text-align:center;">
          <el-col :lg="12">
            <h2>Web</h2>
            <p>Web: {{ this.registerForm.institucion.tieneSitioWeb }}</p>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :lg="12" style="text-align:center;">
            <h2>Cant de interesados</h2>
            <p>
              Número de interesados:
              {{ this.registerForm.institucion.interesados }}
            </p>
          </el-col>
        </el-row>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import LoginOrSignupLayout from "../layouts/LoginOrSignupLayout";
import LogInOrRegister from "../components/LogInOrRegister";
import AppRegister from "../components/AppRegister";

export default {
  data() {
    return {
      registerForm: {
        usuario: {
          nombre: "",
          contrasena: "",
          apellido: "",
          email: ''
        },
        institucion: {
          nombre: "",
          web: "",
          tieneSitioWeb: '',
          interesados: 0
        }
      },
      active: 0
    };
  },
  created() {
    this.$emit(`update:layout`, LoginOrSignupLayout);
  },
  methods: {
    registrar() {
      this.$store.dispatch("signup", this.registerForm);
    },
    next() {
      if (this.active++ > 1) this.active = 0;
    }
  },
  components: {
    LogInOrRegister,
    AppRegister
  }
};
</script>

<style></style>
