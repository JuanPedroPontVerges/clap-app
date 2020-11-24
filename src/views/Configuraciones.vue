<template>
  <div>
    <el-row>
      <el-col :sm="8">
        <el-tabs
          tab-position="left"
          style="height: 200px"
          @tab-click="handleClick"
        >
          <el-tab-pane
            ><span slot="label"><i class="el-icon-info"></i> General</span>
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-question"></i> Preferencias</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-office-building"></i> Departamentos</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-receiving"></i> Almacenamiento</span
            >
          </el-tab-pane>
          <el-tab-pane
            ><span slot="label"
              ><i class="el-icon-s-custom"></i> Colaboradores</span
            >
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :sm="16">
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
import HomeLayout from "../layouts/HomeLayout"

export default {
  data() {
    return {
      currentTab: "Almacenamiento",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
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
    this.$emit(`update:layout`, HomeLayout);
  },
};
</script>

<style>
</style>