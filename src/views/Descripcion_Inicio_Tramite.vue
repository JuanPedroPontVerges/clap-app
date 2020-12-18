<template>
  <div class="tramite-empleado-detalle">
    <div class="tramite-empleado-header">
      <h2>Aca el titulo del tramite</h2>
    </div>
    <div class="tramite-empleado-body">
      <component :is="getCurrentTramite"></component>
    </div>
    <div class="tramite-empleado-footer">
      <el-button type="text" class="danger" @click="handleBack()">Cancelar</el-button>
      <el-button type="success" class="btn-blue" @click="handleBack()">Solicitar</el-button>
    </div>
  </div>
</template>

<script>
import Descripcion_Inicio_Tramite1 from "./Descripcion_Inicio_Tramite1";
import Descripcion_Inicio_Tramite2 from "./Descripcion_Inicio_Tramite2";

export default {
  data() {
    return {};
  },
  computed: {
    getCurrentTramite() {
      console.log(this.$store.state.currentInicioTramite);
      return this.$store.state.currentInicioTramite;
    },
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
  components: {
    Descripcion_Inicio_Tramite1,
    Descripcion_Inicio_Tramite2,
  },
};
</script>

<style>
</style>