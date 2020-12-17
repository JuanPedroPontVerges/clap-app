<template>
  <div class="container">
    <el-row>
      <el-col :sm="18">
        <el-row type="flex" align="middle">
          <el-col :sm="6">
            <el-button
              icon="el-icon-arrow-left"
              round
              size="small"
              @click="handleBack()"
            ></el-button>
          </el-col>
          <el-col :sm="16">
            <h1>{{ getTramite.tramite }}</h1>
          </el-col>
          <el-col :sm="4">
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
                <el-button round icon="el-icon-check">Completado</el-button>
              </el-col>
            </el-row>
            <el-row style="border: 1px solid black; padding: 20px">
              <el-col :sm="12">
                <el-form label-position="top">
                  <el-form-item label="Nombre">
                    <el-input v-model="form.nombre"></el-input>
                  </el-form-item>
                  <el-form-item label="Id Empleado">
                    <el-input v-model="form.id"></el-input>
                  </el-form-item>
                  <el-form-item label="Periodo">
                    <el-input v-model="form.periodo"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="6">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top: 20px">
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
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    handleBack() {
      this.$router.back();
    },
    handleCommand() {
      //
    },
  },
  components: { AppModal, AppPasos, AppArchivos },
};
</script>

<style></style>
