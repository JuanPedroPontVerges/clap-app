<template>
  <div>
    <el-form
      ref="registerForm"
      :model="registerForm"
      :rules="rules"
      status-icon
    >
      <el-row :gutter="20">
        <el-col :sm="12">
          <el-form-item label="Nombre">
            <el-input v-model="registerForm.nombre" type="text"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="12">
          <el-form-item label="Apellido">
            <el-input v-model="registerForm.apellido" type="text"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="12">
          <el-form-item label="Email">
            <el-input v-model="registerForm.email" type="email"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="12">
          <el-form-item label="Teléfono">
            <el-input v-model="registerForm.telefono" type="number"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="12">
          <el-form-item label="Contraseña" prop="contrasena">
            <el-input
              v-model="registerForm.contrasena"
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
        <el-col :sm="12">
          <el-form-item label="Repetir Contraseña" prop="checkPass">
            <el-input v-model="registerForm.checkPass" :type="icono ? 'password' : 'text'">
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
    <div style="margin: 16px 0">
      <el-button type="primary" @click="registrar('registerForm')"
        >Registrarse</el-button
      >
    </div>
    <div class="extras">
      ¿Ya tenes cuenta?
      <a @click="toogleLogin()">
        <span>Ingresar</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("Porfavor, elija una contraseña"));
      } else if (value !== this.registerForm.contrasena) {
        callback(new Error("¡Las contraseñas no son iguales!"));
      } else {
        callback();
      }
    };
    return {
      icono: true,
      registerForm: {
        nombre: "",
        contrasena: "",
        apellido: "",
        email: "",
        telefono: "",
        checkPass: "",
      },
      rules: {
        contrasena: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    showPassword() {
      this.icono = !this.icono;
    },
    toogleLogin() {
      this.$store.commit("setCurrentComponent", "AppLogin");
    },
    registrar(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("signup", this.registerForm);
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
  color: #0049ff;
  text-decoration: none !important;
  font-weight: 600;
}
a {
  text-decoration: none !important;
}
</style>
