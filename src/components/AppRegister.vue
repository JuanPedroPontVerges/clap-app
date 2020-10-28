<template>
  <div>
    <el-form ref="registerForm" :model="registerForm" @submit.prevent>
      <el-form-item label="Email">
        <el-input v-model="registerForm.email" type="email"> </el-input>
      </el-form-item>
      <el-form-item label="Nombre">
        <el-input v-model="registerForm.nombre" type="text"> </el-input>
      </el-form-item>
      <el-form-item label="Apellido">
        <el-input v-model="registerForm.apellido" type="text"> </el-input>
      </el-form-item>
      <el-form-item label="Contraseña">
        <el-input v-model="registerForm.contrasena" type="password"> </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-top:20px;">
      <el-button @click="nextStep()">Siguiente paso</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        nombre: "",
        email: "",
        contrasena: "",
        apellido: ""
      },
      exito: false
    };
  },
  methods: {}
};
</script>
