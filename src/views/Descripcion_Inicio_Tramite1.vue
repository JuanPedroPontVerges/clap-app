<template>
  <el-row :gutter="20">
  <el-form  label-position="top">
    <el-col :sm="12">
    <el-form-item label="Razón Social ">
      <el-input v-model="form.razonSocial"></el-input>
    </el-form-item>
    </el-col>
    <el-col :sm="12">
    <el-form-item label="CUIT">
      <el-input v-model="form.cuit"></el-input>
    </el-form-item>
    </el-col>
    <el-col :sm="24">
    <el-form-item label="Factura a cancelar">
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
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
    </el-col>
    <el-col :sm="12">
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
    </el-col>
    <el-col :sm="24">
    <el-form-item label="Comentarios">
      <el-input type="textarea" v-model="form.comentarios"></el-input>
    </el-form-item>
    </el-col>
  </el-form>
  </el-row>
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
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
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

  