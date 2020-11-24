<template>
  <div>
    <el-row>
      <el-col v-if="getLoaded" :sm="12" :lg="12">
        <h2>{{ getTramite.tramite }}</h2>
      </el-col>
      <el-col :sm="12" :lg="12">
        <el-button type="danger" @click="openDialogForm()">Cancelar</el-button>
        <AppModal></AppModal>
      </el-col>
      <el-col :sm="24" :lg="24">
        <el-steps :active="active" finish-status="success">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <h4>Solicitud</h4>
      <el-col :sm="16" :lg="18">
        <el-row style="border: 1px solid black">
          <el-col :lg="24">
            <h5>Nombre</h5>
            <p><i>nombre</i></p>
          </el-col>
          <el-col :lg="24">
            <h5>Carrera</h5>
            <p><i>carrera</i></p>
          </el-col>
          <el-col :lg="24">
            <h5>Certificado</h5>
            <p><i>certificado</i></p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="8" :lg="6" style="border: 1px solid black">
        <el-row :gutter="20">
          <el-col :lg="24">
            <el-button type="primary" @click="next()">Aprobar</el-button>
          </el-col>
          <el-col :lg="24">
            <el-button type="primary">Seguimiento</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h4>Segumiento</h4>
        <p><i>Seguimiento</i></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
import AppModal from "../components/AppModal";

export default {
  name: "Descripcion",
  data() {
    return {
      active: 0,
    };
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  computed: {
    getLoaded() {
      return this.$store.state.loaded;
    },
    getTramite() {
      return this.$store.state.tramiteActual;
    },
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    openDialogForm() {
      this.$store.commit("setFormDialog");
    },
  },
  components: { AppModal },
};
</script>

<style>
</style>
