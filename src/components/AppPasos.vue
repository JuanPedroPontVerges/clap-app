<template>
  <div>
    <el-row
      type="flex"
      align="middle"
      v-for="(paso, index) in getPasos"
      :key="index"
      @click.native="changePaso(index)"
    >
      <el-col :sm="2">
        <p class="numero-pasos">{{ paso.numeroDePaso }}</p>
      </el-col>
      <el-col :sm="16">
        <p>{{paso.nombre}}</p>
        <p>Responsable {{ paso.responsablePaso  || 'La Metro' }}</p>
      </el-col>
      <el-col :sm="6">
        <el-checkbox
          size="big"
          :border="true"
          v-model="getPasos[index].completado"
          disabled
        ></el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: [],
      tramiteID: 0,
    };
  },
  computed: {
    getPasos() {
      return this.$store.state.tramites[
        this.$router.currentRoute.params.id.slice(3, 4)
      ].pasos;
    },
  },
  methods: {
    changePaso(index) {
      this.$store.commit('setCurrentPaso', index)
    }
  }
  // created() {
  //   this.tramiteID = ;
  // },
};
</script>

<style>
</style>