<!-- PASOS DEL 2 TRAMITE !!!!!! -->
<template>
  <div>
    <el-row class="paso">
      <el-col :sm="12" class="paso-column">
        <el-form label-position="top">
          <el-form-item label="Nombre Responsable">
            <el-input disabled v-model="getPaso.nombreResponsable"></el-input>
          </el-form-item>
          <el-form-item label="Departamento">
            <el-select
              v-model="getPaso.departamento"
              placeholder="Administración"
              disabled
            >
              <el-option
                v-for="(departamento, index) in getDepartamentos"
                :key="index"
                :label="departamento.nombre"
                :value="departamento.nombre"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Decisión" label-width="50px">
            <el-radio-group v-model="getPaso.decision" size="medium">
              <el-radio border disabled  label="Si"></el-radio>
              <el-radio border disabled  label="No"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Comprobante de pago">
            <a href="https://made2.co/agu-borrar/transferencia.jpg" target="_blank" class="download">
              <i class="el-icon-download"></i>
              <span>Descargar</span>
            </a>
          </el-form-item>
          <el-form-item label="Comentarios">
            <el-input disabled type="textarea" v-model="getPaso.comentarios"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  computed: {
    getPaso() {
      return this.$store.state.tramites[1].pasos[1];
    },
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>

<style>
</style>