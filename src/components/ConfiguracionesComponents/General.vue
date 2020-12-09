<template>
  <div>
    <el-row class="settings-title">
      <el-col :sm="24">
        <h2>General</h2>
      </el-col>
      <el-col :sm="24">
        <div>
          <p>
            Indica la información sobre tu instituto que se le mostrará a los
            interesados.
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
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="toggleUpload"
            :on-remove="toggleUpload"
            :class="{ hideUpload: !showUpload }"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-col>

        <el-col :sm="24">
          <el-form-item label="Nombre Institución" label-width="50px">
            <el-input v-model="form.nombre" v-if="!getForm.nombre"></el-input>
            <el-input
              disabled
              v-if="getForm.disabled"
              v-model="getForm.nombre"
              style="margin-top: 10px"
            ></el-input>
          </el-form-item>
          <el-form-item label="Descripción">
            <el-input
              type="textarea"
              v-model="form.descripcion"
              maxlength="50"
              show-word-limit
              v-if="!getForm.descripcion"
            >
            </el-input>
            <el-input
              type="textarea"
              v-model="getForm.descripcion"
              maxlength="50"
              show-word-limit
              disabled
              v-if="getForm.disabled"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="URL Institución" label-width="50px">
            <el-input v-model="form.url" v-if="!getForm.url">
              <template slot="append">.pulpo.com.ar</template>
            </el-input>
            <el-input v-model="getForm.url" v-if="getForm.disabled" disabled>
              <template slot="append">.pulpo.com.ar</template>
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="guardarCambios" v-if="getForm"
            >Validar</el-button
          >
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
      form: {
        nombre: "",
        descripcion: "",
        url: "",
        disabled: false,
      },
      imageData: null,
      picture: null,
      uploadValue: 0,
      dialogVisible: false,
      dialogImageUrl: "",
      disabled: false,
      showUpload: true,
    };
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
    toggleUpload() {
      this.showUpload = !this.showUpload;
    },
    guardarCambios() {
      if (!this.form) return;
      else this.setDisabled = true;
      this.form.disabled = true;
      this.$store.commit("setConfigGeneral", this.form);
      console.log(this.setDisabled);
    },
  },
  computed: {
    getForm() {
      return this.$store.state.configuraciones.general;
    },
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
