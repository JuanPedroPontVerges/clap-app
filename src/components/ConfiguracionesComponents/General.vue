<template>
  <div class="configuracion-general">
    <el-row class="settings-title">
      <el-col :sm="24">
        <h2>General</h2>
      </el-col>
      <el-col :sm="24">
        <div>
          <p>
            Indica la información sobre tu instituto que se le mostrará a los interesados.
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="settings-body">
      <el-form label-position="top">
        <el-col :sm="24">
          <h3>Logo</h3>
        </el-col>
        <el-col :sm="24">
          <img class="logo" src="../../assets/logoMetro.png" alt="" />
          <a href="#"><i class="el-icon-delete"></i>Eliminar</a>
        </el-col>

        <el-col :sm="12" style="margin-top:30px;">
          <el-form-item label="Nombre Institución" label-width="50px">
            <el-input
              value="La Metro"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24">
          <el-form-item label="Descripción">
            <el-input
              type="textarea"
              value="Bienvenido al panel de gestión de la institución. Desde aqui podrás solicitar y dar seguimiento de tus trámites."
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="12">
          <el-form-item label="URL Institución" label-width="50px">
            <el-input value="lametro">
              <template slot="append">.pulpo.com.ar</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="14">
          <el-button type="primary" class="btn-blue" @click="guardarCambios">Guardar</el-button>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import { storage } from "../../firebase";

export default {
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      dialogVisible: false,
      dialogImageUrl: "",
      disabled: false,
      showUpload: true,
      /*
      fileList: [
        {
          name: "LaMetro",
          url:
            "data:image/png;base64,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",
        },
      ],
      */
    };
  },
  methods: {
    handleRemove(file) {
      //console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogVisible = true;
    },
    toggleUpload(file) {
      //console.log(file.url);
      this.dialogImageUrl = file.url;
      this.getForm.dialogImageUrl = file.url;
      this.showUpload = !this.showUpload;
    },
    guardarCambios() {
      this.$store.commit("setDialogImageUrl", this.dialogImageUrl);
      this.$store.commit("setConfigGeneral", this.getForm);
      this.$message({
        message: "Cambios guardados",
        type: "success",
        duration: 4000,
      });
    },
  },
  computed: {
    getForm() {
      return this.$store.state.configuraciones.general;
    },
  },
  created() {
    if (this.$store.state.configuraciones.general.dialogImageUrl) {
      this.toggleUpload({
        url: this.$store.state.configuraciones.general.dialogImageUrl,
      });
      this.dialogImageUrl = this.$store.state.configuraciones.general.dialogImageUrl;
    }
  },
};
</script>

<style>
img.preview {
  width: 200px;
}
.hideUpload > div {
  display: none;
}
</style>
