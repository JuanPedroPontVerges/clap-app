<!-- PASOS DEL 1 TRAMITE !!!!!! -->
<template>
  <div>
    <el-row style="border: 1px solid black; padding: 20px">
      <el-col :sm="12">
        <el-form label-position="top">
          <el-form-item label="Nombre Responsable">
            <el-input v-model="getPaso.nombreCompleto"></el-input>
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
          <el-form-item label="Decision" label-width="50px">
            <el-radio-group v-model="getPaso.decision" size="medium">
              <el-radio border label="Si"></el-radio>
              <el-radio border label="No"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Comentarios">
            <el-input type="textarea" v-model="getPaso.comentarios"></el-input>
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