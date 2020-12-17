<template>
  <div class="container">
    <el-row>
      <el-col :sm="18">
        <el-row type="flex" align="middle">
          <el-col :sm="2">
            <el-button
              icon="el-icon-arrow-left"
              round
              size="small"
              @click="handleBack()"
            ></el-button>
          </el-col>
          <el-col :sm="15" class="tramites-descripcion-header">
            <h1>{{ getTramite.tramite }}</h1>
          </el-col>
          <el-col :sm="4">
            <el-tag
              type="success"
              v-if="getPasos[getPasos.length - 1].completado === true"
              >Completado</el-tag
            ></el-col
          >
          <el-col :sm="3">
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

        <el-row>
          <el-col :sm="24">
            <el-row type="flex" align="middle" justify="space-between">
              <el-col :sm="12">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </el-col>
              <el-col :sm="6">
                <el-button
                  round
                  icon="el-icon-check"
                  @click="completarPaso"
                  :disabled="getPaso.completado ? true : false"
                  >Completado</el-button
                >
              </el-col>
            </el-row>
            <component :is="getComponent"></component>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="6">
        <el-tabs v-model="activeName" style="margin-top: 20px">
          <el-tab-pane label="Pasos" name="first">
            <AppPasos></AppPasos>
          </el-tab-pane>
          <el-tab-pane label="Archivos" name="second">
            <AppArchivos></AppArchivos>
          </el-tab-pane>
          <el-tab-pane label="Chat" name="third">Chat</el-tab-pane>
          <el-tab-pane label="Perfil" name="fourth">Perfil</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
import AppModal from "../components/AppModal";
import AppPasos from "../components/AppPasos";
import AppArchivos from "../components/AppArchivos";
import AppPaso1 from "../components/pasos/AppPaso1-1";
import AppPaso12 from "../components/pasos/AppPaso2-1";
import AppPaso2 from "../components/pasos/AppPaso1-2";
import AppPaso21 from "../components/pasos/AppPaso2-2";

export default {
  name: "Descripcion",
  data() {
    return {
      active: 0,
      form: {
        nombre: "",
        id: 0,
        periodo: "",
      },
      activeName: "first",
    };
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
    this.$store.commit(
      "setCurrentTramite",
      this.$router.currentRoute.params.id.slice(3, 4)
    );
  },
  computed: {
    getTramite() {
      return this.$store.state.tramiteActual;
    },
    getPasos() {
      return this.$store.state.tramites[
        this.$router.currentRoute.params.id.slice(3, 4)
      ].pasos;
    },
    getPaso() {
      return this.$store.state.tramites[
        this.$router.currentRoute.params.id.slice(3, 4)
      ].pasos[this.getCurrentPaso - 1];
    },
    getCurrentPaso() {
      return this.$store.state.currentPaso + 1;
    },
    getNumeroDeTramite() {
      return this.$store.state.currentNumeroDeTramite;
    },
    getComponent() {
      if (this.getNumeroDeTramite == 1 && this.getCurrentPaso == 1) {
        return "AppPaso1";
      } else if (this.getNumeroDeTramite == 1 && this.getCurrentPaso == 2) {
        return "AppPaso12";
      } else if (this.getNumeroDeTramite == 2 && this.getCurrentPaso == 1) {
        return "AppPaso2";
      } else if (this.getNumeroDeTramite == 2 && this.getCurrentPaso == 2) {
        return "AppPaso21";
      }
    },
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleCommand() {
      //
    },
    completarPaso() {
      this.$store.commit("setCompletadoPaso", {
        paso: this.getCurrentPaso,
        tramite: this.getNumeroDeTramite,
      });
    },
  },
  components: {
    AppModal,
    AppPasos,
    AppArchivos,
    AppPaso1,
    AppPaso12,
    AppPaso2,
    AppPaso21,
  },
};
</script>

<style></style>
