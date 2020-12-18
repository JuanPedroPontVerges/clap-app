<template>
  <el-form label-position="top">
    <el-form-item label="Razón Social ">
      <el-input v-model="form.razonSocial"></el-input>
    </el-form-item>
    <el-form-item label="CUIT">
      <el-input v-model="form.cuit"></el-input>
    </el-form-item>
    <el-form-item label="Factura a cancelar">
      <a
        href="https://made2.co/agu-borrar/factura.jpg"
        target="_blank"
        class="download"
      >
        <i class="el-icon-download"></i>
        <span>Descargar</span>
      </a>
    </el-form-item>
    <el-form-item label="Departamento que debe aprobar el pago">
      <el-select v-model="form.departamento" placeholder="Marketing">
        <el-option
          v-for="(departamento, index) in getDepartamentos"
          :key="index"
          :label="departamento.nombre"
          :value="departamento.nombre"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Comentarios">
      <el-input type="textarea" v-model="form.comentarios"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        razonSocial: "",
        cuit: "",
        departamento: "",
        emailContacto: "",
        telefonoContacto: "",
        nombreContacto: "",
        areaContratacion: "",
      },
    };
  },
  computed: {
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
  },
};
</script>

<style>
</style>

  