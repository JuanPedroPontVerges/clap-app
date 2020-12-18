<!-- PASOS DEL 1 TRAMITE !!!!!! -->
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
  computed: {
    getPaso() {
      return this.$store.state.tramites[0].pasos[1];
    },
    getDepartamentos() {
      return this.$store.state.departamentos;
    },
  },
};
</script>

<style>
</style>