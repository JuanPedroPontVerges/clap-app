<template>
  <div class="tramites-detalle">
    <div class="container">
      <div class="header">
        <el-row type="flex" align="middle">
          <el-col :sm="20" class="tramites-descripcion-header">
            <div class="btn-back">
              <el-button
                icon="el-icon-arrow-left"
                round
                size="medium"
                class="btn-blue"
                @click="handleBack()"
                >Volver</el-button
              >
            </div>
            <div class="title">
              <h2>{{ getTramite.tramite }}</h2>
            </div>
            <div class="tag">
              <el-tag
                type="success"
                v-if="getPasos[getPasos.length - 1].completado === true"
                >Finalizado</el-tag
              >
            </div>
          </el-col>
          <el-col :sm="4" type="flex" align="right">
            <el-dropdown trigger="click" @command="handleCommand">
              <el-button
                type="primary"
                size="medium"
                @click.stop="handleAccion(scope.$index)"
              >
                <i class="el-icon-more" style="transform: rotate(90deg)"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="eliminar">Eliminar</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
      <el-row class="row-container">
        <el-col :sm="18" class="details">
          <el-row>
            <el-col :sm="24">
              <el-row
                type="flex"
                align="middle"
                justify="space-between"
                class="header-box"
              >
                <el-col :sm="24">
                  <p class="title">{{ getPaso.nombre }}</p>
                  <p class="description">{{ getPaso.descripcionPaso }}</p>
                </el-col>
                <el-col :sm="6" type="flex" align="end">
                  <el-button
                    round
                    icon="el-icon-check"
                    @click="completarPaso"
                    :disabled="getPaso.completado ? true : false"
                    >Completado</el-button
                  >
                </el-col>
              </el-row>
              <component :is="getComponent" class="content"></component>
            </el-col>
          </el-row>
        </el-col>

        <el-col :sm="6" class="sidebar">
          <el-tabs v-model="activeName">
            <el-tab-pane label="Pasos" name="first">
              <AppPasos></AppPasos>
            </el-tab-pane>
            <el-tab-pane label="Timeline" name="third">
              <div class="block timeline">
                <el-timeline :reverse="reverse">
                  <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp"
                  >
                    {{ activity.content }}
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Perfil" name="fourth">
              <el-row>
                <el-col :sm="24">
                  <p>
                    <span class="title">Nombre</span>
                    <span class="description">Gonzalo Sosa</span>
                  </p>
                  <p>
                    <span class="title">Email</span>
                    <span class="description">gonzalo@sosaimprenta.com.ar</span>
                  </p>
                  <p>
                    <span class="title">Teléfono</span>
                    <span class="description">3513555898</span>
                  </p>
                  <p>
                    <span class="title">Tipo</span>
                    <span class="description">Proveedor</span>
                  </p>
                  <span class=""></span>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>

      <el-row class="collapse-mobile">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="Dinamico" name="1">
            <div class="contenido">
              <el-form label-position="top">
                <el-form-item label="Tipo Persona">
                  <el-input
                    v-model="getPaso.tipoPersona"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Razón Social">
                  <el-input
                    v-model="getPaso.razonSocial"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="CUIT">
                  <el-input v-model="getPaso.cuit" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="Constancia inscripción AFIP">
                  <a
                    href="https://made2.co/agu-borrar/CONSTANCIA-AFIP.pdf"
                    target="_blank"
                    class="download"
                  >
                    <i class="el-icon-download"></i>
                    <span>Descargar</span>
                  </a>
                </el-form-item>
                <el-form-item label="Constancia CBU">
                  <a
                    href="https://made2.co/agu-borrar/Contenido-AliasCBU2.jpg"
                    target="_blank"
                    class="download"
                  >
                    <i class="el-icon-download"></i>
                    <span>Descargar</span>
                  </a>
                </el-form-item>
                <el-form-item label="Email Contacto">
                  <el-input
                    v-model="getPaso.emailContacto"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Teléfono Contacto">
                  <el-input
                    v-model="getPaso.telefonoContacto"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Nombre Contacto">
                  <el-input
                    v-model="getPaso.nombreContacto"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Área de Contratación">
                  <el-input
                    v-model="getPaso.areaContratacion"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Feedback" name="2">
            <div class="contenido">
              <el-form label-position="top">
                <el-form-item label="Nombre Responsable">
                  <el-input
                    disabled
                    v-model="getPaso.nombreResponsable"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Departamento">
                  <el-select
                    v-model="getPaso.departamento"
                    placeholder="Administración"
                    disabled
                  >
                    <el-option
                      v-for="(departamento, index) in getDepartamentos"
                      :key="index"
                      :label="departamento.nombre"
                      :value="departamento.nombre"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Decisión" label-width="50px">
                  <el-radio-group v-model="getPaso.decision" size="medium">
                    <el-radio border disabled label="Si"></el-radio>
                    <el-radio border disabled label="No"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="Comentarios">
                  <el-input
                    disabled
                    type="textarea"
                    v-model="getPaso.comentarios"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-row>
    </div>
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
      agu: '<div style="background-color:black;"></div>',
      active: 0,
      form: {
        nombre: "",
        id: 0,
        periodo: "",
      },
      activeName: "first",
      reverse: true,
      activities: [
        {
          content: "Paso 2 Completado",
          timestamp: "07-11-2020",
        },
        {
          content: "Trámite Recibido",
          timestamp: "03-11-2020",
        },
      ],
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
