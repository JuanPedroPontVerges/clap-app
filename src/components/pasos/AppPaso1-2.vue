<!-- PASOS DEL 2 TRAMITE !!!!!! -->
<template>
  <div>
    <el-row style="border: 1px solid black; padding: 20px">
      <el-col :sm="12">
        <el-form label-position="top">
          <el-form-item label="Razón Social ">
            <el-input v-model="getPaso.razonSocial" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="CUIT">
            <el-input v-model="getPaso.cuit" type="number" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="Adjuntar Factura">
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
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
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
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
          </el-form-item>
          <el-form-item label="Departamento">
            <el-select
              v-model="getPaso.departamento"
              placeholder="Elija un Departamento"
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