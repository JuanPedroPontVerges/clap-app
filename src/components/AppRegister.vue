<template>
  <div>
    <el-form ref="registerForm" :model="registerForm" @submit.prevent>
      <el-form-item label="Nombre">
        <el-input v-model="registerForm.nombre" type="text"> </el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="registerForm.email" type="email"> </el-input>
      </el-form-item>
      <el-form-item label="Contraseña">
        <el-input v-model="registerForm.contrasena" type="password"> </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-top:20px">
      <el-button @click="setRegister">Cancelar</el-button>
      <el-button type="primary" @click="register()">Registrarse</el-button>
    </div>
    <p v-if="exito">
      Se ha registrado con exito!,
      <a @click="setRegister()">inicia sesión</a>
      para comenzar a usar nuestra plataforma
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        nombre: "",
        email: "",
        contrasena: ""
      },
      exito: false
    };
  },
  methods: {
    setRegister() {
      this.$store.commit("setShowLogInOrRegister");
      this.$store.commit("setCurrentComponent", "AppLogin");
    }
  }
};
</script>
