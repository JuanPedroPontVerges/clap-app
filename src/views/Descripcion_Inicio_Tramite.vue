<template>
  <div>
    <component :is="getCurrentTramite"></component>
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
  components: {
    Descripcion_Inicio_Tramite1,
    Descripcion_Inicio_Tramite2,
  },
};
</script>

<style>
</style>