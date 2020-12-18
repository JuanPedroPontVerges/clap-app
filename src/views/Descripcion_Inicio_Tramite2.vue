<template>
  <el-form label-position="top">
    <el-form-item label="Tipo Persona">
      <el-input v-model="form.tipoPersona" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="Razón Social">
      <el-input v-model="form.razonSocial" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="CUIT">
      <el-input v-model="form.cuit" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="Constancia inscripción AFIP">
      <a
        href="https://made2.co/agu-borrar/CONSTANCIA-AFIP.pdf"
        target="_blank"
        class="download"
      >
        <i class="el-icon-download"></i>
        <span>Descargar</span>
      </a>
    </el-form-item>
    <el-form-item label="Constancia CBU">
      <a
        href="https://made2.co/agu-borrar/Contenido-AliasCBU2.jpg"
        target="_blank"
        class="download"
      >
        <i class="el-icon-download"></i>
        <span>Descargar</span>
      </a>
    </el-form-item>
    <el-form-item label="Email Contacto">
      <el-input v-model="form.emailContacto" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="Teléfono Contacto">
      <el-input v-model="form.telefonoContacto" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="Nombre Contacto">
      <el-input v-model="form.nombreContacto" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="Área de Contratación">
      <el-input v-model="form.areaContratacion" :disabled="true"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tipoPersona: "",
        razonSocial: "",
        cuit: "",
        emailContacto: "",
        telefonoContacto: "",
        nombreContacto: "",
        areaContratacion: "",
      },
    };
  },
};
</script>
