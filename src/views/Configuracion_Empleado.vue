<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :sm="5">
        <el-tabs
          tab-position="left"
          @tab-click="handleClick"
          class="hidden-xs-only"
        >
          <el-tab-pane
            ><span slot="label"><i class="el-icon-info"></i> General</span>
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-tools"></i> Preferencias</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-menu"></i> Departamentos</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-data"></i> Almacenamiento</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-custom"></i> Colaboradores</span
            >
          </el-tab-pane>
        </el-tabs>
        <el-tabs @tab-click="handleClick" class="hidden-sm-and-up">
          <el-tab-pane
            ><span slot="label"><i class="el-icon-info"></i> General</span>
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-tools"></i> Preferencias</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-menu"></i> Departamentos</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-data"></i> Almacenamiento</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-custom"></i> Colaboradores</span
            >
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :sm="19">
        <component :is="currentTab"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Almacenamiento from "../components/ConfiguracionesComponents/Almacenamiento";
import Colaboradores from "../components/ConfiguracionesComponents/Colaboradores";
import Departamentos from "../components/ConfiguracionesComponents/Departamentos";
import General from "../components/ConfiguracionesComponents/General";
import Preferencias from "../components/ConfiguracionesComponents/Preferencias";
import HomeEmpleadosLayout from "../layouts/HomeEmpleadosLayout";

export default {
  data() {
    return {
      currentTab: "General",
    };
  },
  methods: {
    handleClick(tab, event) {
      switch (tab.index) {
        case "0":
          this.currentTab = "General";
          break;
        case "1":
          this.currentTab = "Preferencias";
          break;
        case "2":
          this.currentTab = "Departamentos";
          break;
        case "3":
          this.currentTab = "Almacenamiento";
          break;
        case "4":
          this.currentTab = "Colaboradores";
          break;
      }
    },
  },
  components: {
    Almacenamiento,
    Colaboradores,
    Departamentos,
    General,
    Preferencias,
  },
  created() {
    this.$emit(`update:layout`, HomeEmpleadosLayout);
  },
};
</script>

<style>
</style>