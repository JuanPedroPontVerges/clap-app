<template>
  <div>
    <el-row
      type="flex"
      align="middle"
      v-for="(paso, index) in getPasos"
      :key="index"
      @click.native="changePaso(index), highlightRow(paso.id)"
      :class="{ active: paso.id == selected }"
    >
      <el-col :sm="2">
        <span class="numero-pasos">{{ paso.numeroDePaso }}</span>
      </el-col>
      <el-col :sm="16">
        <p class="nombre-paso">{{ paso.nombre }}</p>
        <p class="responsable-paso">Responsable: {{ paso.responsablePaso }}</p>
      </el-col>
      <el-col :sm="6">
        <el-checkbox
          size="big"
          :border="true"
          v-model="getPasos[index].completado"
          disabled
        >
          <i class="el-icon-success"></i>
          <i class="el-icon-circle-check"></i>
        </el-checkbox>
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
      selected: 1,
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
      this.selected = index;
      this.isActive = !this.isActive;
      this.$store.commit("setCurrentPaso", index);
    },
    highlightRow(id){
      this.selected = id
    }
  },
};
</script>

<style>
.active {
  background-color: lightgoldenrodyellow  !important;
}
</style>