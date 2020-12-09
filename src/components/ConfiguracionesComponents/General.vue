<template>
  <div>
    <el-row
      class="settings-title"
    >
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
    <el-row
      :gutter="20"
      class="settings-body"
    >
      <el-form label-position="top">
        <el-col :sm="24">
          <h3>Logo</h3>
        </el-col>
        <el-col :sm="24">
          <div>
            <input type="file" @change="previewImage" />
          </div>
          <p>
            Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
          <div v-if="picture == null">
            <el-button @click="onUpload" type="primary">Guardar</el-button>
          </div>
          <div><img class="preview" :src="picture" /></div>

          <!-- <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog> -->
          
        </el-col>

        <el-col :sm="24">
          <el-form-item label="Nombre Institución" label-width="50px">
            <el-input v-model="form.nombre"></el-input>
          </el-form-item>
          <el-form-item label="Descripción">
            <el-input
              type="textarea"
              v-model="form.descripcion"
              maxlength="50"
              show-word-limit
            >
            </el-input>
          </el-form-item>
          <el-form-item label="URL Institución" label-width="50px">
            <el-input v-model="form.url">
              <template slot="append">.pulpo.com.ar</template>
            </el-input>
          </el-form-item>
          <el-button type="primary">Validar</el-button>
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
      },
      imageData: null,
      picture: null,
      uploadValue: 0,
      dialogVisible: false,
      dialogImageUrl: "",
    };
  },
  methods: {
    onUpload() {
      this.picture = null;
      this.$store.commit("setLogo", this.imageData.name);
      const storageRef = storage
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    },
    previewImage(file) {
      console.log(file);
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
img.preview {
  width: 200px;
}
</style>