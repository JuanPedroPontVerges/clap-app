<!-- PASOS DEL 1 TRAMITE !!!!!! -->
<template>
  <div>
    <el-row class="paso" >
      <el-col :sm="12" class="paso-column">
        <el-form label-position="top">
          <el-form-item label="Tipo Persona">
            <el-input
              v-model="getPaso.tipoPersona"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Razón Social">
            <el-input
              v-model="getPaso.razonSocial"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="CUIT">
            <el-input
              v-model="getPaso.cuit"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Constancia inscripción AFIP">
            <a href="https://made2.co/agu-borrar/CONSTANCIA-AFIP.pdf" target="_blank" class="download">
              <i class="el-icon-download"></i>
              <span>Descargar</span>
            </a>
          </el-form-item>
          <el-form-item label="Constancia CBU">
            <a href="https://made2.co/agu-borrar/Contenido-AliasCBU2.jpg" target="_blank" class="download">
              <i class="el-icon-download"></i>
              <span>Descargar</span>
            </a>
          </el-form-item>
          <el-form-item label="Email Contacto">
            <el-input
              v-model="getPaso.emailContacto"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Teléfono Contacto">
            <el-input
              v-model="getPaso.telefonoContacto"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Nombre Contacto">
            <el-input
              v-model="getPaso.nombreContacto"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Área de Contratación">
            <el-input
              v-model="getPaso.areaContratacion"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    getPaso() {
      return this.$store.state.tramites[0].pasos[0];
    },
  },
};
</script>

<style>
</style>