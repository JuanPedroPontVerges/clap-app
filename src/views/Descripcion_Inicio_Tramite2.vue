<template>
  <el-form label-position="top">
    <el-form-item label="Tipo Persona">
      <el-input v-model="form.tipoPersona"></el-input>
    </el-form-item>
    <el-form-item label="Razón Social">
      <el-input v-model="form.razonSocial"></el-input>
    </el-form-item>
    <el-form-item label="CUIT">
      <el-input v-model="form.cuit"></el-input>
    </el-form-item>
    <el-form-item label="Constancia inscripción AFIP">
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
    <el-form-item label="Constancia CBU">
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
    <el-form-item label="Email Contacto">
      <el-input v-model="form.emailContacto"></el-input>
    </el-form-item>
    <el-form-item label="Teléfono Contacto">
      <el-input v-model="form.telefonoContacto"></el-input>
    </el-form-item>
    <el-form-item label="Nombre Contacto">
      <el-input v-model="form.nombreContacto"></el-input>
    </el-form-item>
    <el-form-item label="Área de Contratación">
      <el-input v-model="form.areaContratacion"></el-input>
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
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
};
</script>
