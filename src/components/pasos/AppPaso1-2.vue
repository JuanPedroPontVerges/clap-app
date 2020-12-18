<!-- PASOS DEL 2 TRAMITE !!!!!! -->
<template>
  <div>
    <el-row class="paso">
      <el-col :sm="12" class="paso-column">
        <el-form label-position="top">
          <el-form-item label="Razón Social ">
            <el-input v-model="getPaso.razonSocial" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="CUIT">
            <el-input
              v-model="getPaso.cuit"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="Factura a cancelar">
            <a href="https://made2.co/agu-borrar/factura.jpg" target="_blank" class="download">
              <i class="el-icon-download"></i>
              <span>Descargar</span>
            </a>
          </el-form-item>
          <el-form-item label="Departamento que debe aprobar el pago">
            <el-select
              v-model="getPaso.departamento"
              placeholder="Marketing"
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
          <el-form-item label="Comentarios">
            <el-input type="textarea" v-model="getPaso.comentarios" :disabled="true"></el-input>
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
      return this.$store.state.tramites[1].pasos[0];
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