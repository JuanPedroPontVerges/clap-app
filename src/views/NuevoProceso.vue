<template class="nuevo-proceso">
  <div class="container">
    <el-row type="flex">
      <el-col :xs="2">
        <el-button
          icon="el-icon-arrow-left"
          round
          size="small"
          @click="handleBack()"
        ></el-button>
        <h2 style="display: inline">
          {{ getNewProceso.nombre }}
        </h2>
      </el-col>
      <el-col :xs="22" style="text-align: right">
        <el-dropdown trigger="click" @command="handleCommand">
          <el-button
            type="primary"
            size="mini"
            @click.stop="handleAccion(scope.$index)"
          >
            <i class="el-icon-more" style="transform: rotate(90deg)"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="eliminar">Eliminar</el-dropdown-item>
            <el-dropdown-item command="editar">Editar</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row style="padding: 60px">
      <el-col :xs="24" style="border: 1px solid black">
        <el-row>
          <el-col :xs="24" style="padding:20px;">
            <h2>Sobre el tramite</h2>
            <p>{{ getNewProceso.descripcion }}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" style="padding:20px;">
            <h2>Departamento</h2>
            <p>{{ getNewProceso.departamento }}</p>
          </el-col>
        </el-row>
        <el-row style="border:1px solid black;">
          <el-col :xs="24" style="padding:0 20px;">
            <h2 style="text-align:center;">Pasos</h2>
            <p>{{ getNewProceso.departamento }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";

export default {
  methods: {
    handleCommand() {
      //
    },
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
    this.$store.state.departamentos.forEach((depto) => {
      this.departamentos.push({ text: depto.nombre, value: depto.nombre });
    });
  },
  computed: {
    getNewProceso() {
      return this.$store.state.procesoActual;
    },
  },
  components: {
    HomeLayout,
  },
};
</script>

<style>
</style>