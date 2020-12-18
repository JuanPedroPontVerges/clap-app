<template>
  <div class="nuevo-proceso">
      <div class="container">
      <div class="header">
        <el-row type="flex">
          <el-col :xs="20" class="descripcion-header">
            <div class="btn-back">
              <el-button
                icon="el-icon-arrow-left"
                round
                size="medium"
                class="btn-blue"
                @click="handleBack()"
              >Volver</el-button>
            </div>
            <div class="title">
              <h2>
                {{ getNewProceso.titulo || "Error" }}
              </h2>
            </div>
          </el-col>
          <el-col :xs="4" type="flex" align="right">
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
      
      <div class="row-container">
        <div class="details">
          <el-row>
            <el-col :xs="24">
              <el-row class="header-box">
                <el-col :xs="24" >
                  <p class="title">Sobre el tramite</p>
                  <p class="description">{{ getNewProceso.descripcion }}</p>
                </el-col>
              </el-row>
              <el-row class="header-box">
                <el-col :xs="24" >
                  <p class="title">Departamento a cargo</p>
                  <p class="description">{{ getNewProceso.departamento }}</p>
                </el-col>
              </el-row>
              <el-row class="header-pasos">
                <el-col :xs="24">
                  <h3>Pasos</h3>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row
            type="flex"
            class="content"
            align="middle"
            v-for="(paso, index) in getNewProceso.pasos"
            :key="index"
          >
            <span class="step-number">{{ index + 1 }}</span
            >
            <el-col :xs="20">
              <p class="title">{{ paso.titulo }}</p>
              <p class="responsable">Responsable: {{ paso.responsable }}</p>
            </el-col>
            <el-col :xs="4" type="flex" align="right">
              <el-button type="primary" round size="medium" class="btn-blue" @click="mostrarPaso(index)"
                >Ver formulario</el-button
              >
            </el-col>
          </el-row>
          <el-row class="agregar-paso">
            <el-col :xs="24">
              <div>
                <el-button
                  type="primary"
                  round
                  class="btn-violet"
                  icon="el-icon-plus"
                  @click="drawer = true"
                >Agregar Paso</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      

      <!-- DRRRRRAAWWWEEEEERRRRRRRRR -->

      <el-drawer
        :withHeader="false"
        :visible.sync="drawer"
        :with-header="false"
        size="40%"
      >
        <div style="margin: 100px 14px; 0 14px;">
          <el-row :gutter="20">
            <el-form :model="formHeader">
              <el-col
                :xs="24"
                :lg="6"
                class="hidden-sm-and-up"
                style="text-align: right; padding: 10px"
              >
                <el-button icon="el-icon-close"></el-button>
              </el-col>
              <el-col :xs="18" :lg="18">
                <el-form-item>
                  <el-input
                    placeholder="Respuesta"
                    v-model="getNewProceso.pasos[0].titulo"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :lg="6" class="hidden-sm-and-down">
                <el-button icon="el-icon-close"></el-button>
              </el-col>

              <el-col :xs="24" style="border-top: 1px solid black">
                <el-form-item label="Descripción paso">
                  <el-input
                    type="textarea"
                    v-model="getNewProceso.pasos[0].descripcion"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :lg="24">
                <el-form-item label="Responsable">
                  <el-radio v-model="formHeader.responsable" label="Interesado"
                    >Interesado</el-radio
                  >
                  <el-radio
                    v-model="formHeader.responsable"
                    label="Administrador"
                    >Administrador</el-radio
                  >
                </el-form-item>
              </el-col>
            </el-form>
            <el-col :lg="24">
              <p>Campos</p>
            </el-col>

            <el-form label-position="top" :model="formCampos">
              <div
                style="margin: 20px"
                v-for="(campo, index) in formCampos.campos"
                :key="index"
              >
                <el-col :lg="3">
                  <span>{{ index + 1 }}</span>
                </el-col>
                <el-col :xs="9" :lg="8">
                  <el-form-item label="Nombre">
                    <el-input v-model="campo.nombre"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="9" :lg="8">
                  <el-form-item label="Tipo">
                    <el-select v-model="campo.tipo">
                      <el-option value="TextInput">TextInput</el-option>
                      <el-option value="Upload">Upload</el-option>
                      <el-option value="DatePicker">DatePicker</el-option>
                      <el-option value="Select">Select</el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :lg="2">
                  <el-button
                    icon="el-icon-close"
                    circle
                    @click="eliminarProcesoPaso(index)"
                  ></el-button>
                </el-col>
                <el-col :lg="3">
                  <el-button
                    icon="el-icon-setting"
                    circle
                    @click="mostrarConfig(index)"
                  ></el-button>
                </el-col>
              </div>
            </el-form>

            <!-- DIALOG FOOOOOOOOOOOOOOOOOOOOOOOOOORRRMM -->

            <el-dialog
              title="Configuraciones"
              :visible.sync="dialogForm"
              width="35%"
              :modal="false"
            >
              <component :is="getCurrentComponent"></component>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogForm = false">Cancel</el-button>
                <el-button type="primary" @click="saveForm()"
                  >Guardar cambios</el-button
                >
              </span>
            </el-dialog>
            <el-col :xs="24" style="text-align: center; padding: 20px">
              <div>
                <el-button
                  type="primary"
                  icon="el-icon-plus"
                  circle
                  @click="agregarCampo"
                ></el-button>
                <span style="margin: 0 10px; font-size: 20px"
                  >Agregar Campo</span
                >
              </div>
            </el-col>
            <el-col
              :lg="24"
              style="
                border-top: 1px solid black;
                padding: 20px;
                text-align: center;
              "
            >
              <el-button type="danger" @click="drawer = false"
                >Cancelar</el-button
              >
              <el-button type="primary" @click="agregarPaso">Agregar</el-button>
            </el-col>
          </el-row>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
import AppDTP from "../components/InputsConfigComponents/AppDTP";
import AppSelect from "../components/InputsConfigComponents/AppSelect";
import AppTextInput from "../components/InputsConfigComponents/AppTextInput";
import AppUpload from "../components/InputsConfigComponents/AppUpload";

export default {
  data() {
    return {
      drawer: false,
      formNuevoProceso: {
        value: "",
      },
      formHeader: {
        titulo: "",
        descripcion: "",
        responsable: "",
      },
      formCampos: {
        campos: [
          {
            nombre: "Ejemplo",
            tipo: "TextArea",
          },
        ],
      },
      dialogForm: false,
      currentComponent: "",
      currentRow: 0,
    };
  },
  methods: {
    handleCommand() {
      //
    },
    mostrarConfig(index) {
      this.currentRow = index;
      switch (this.formCampos.campos[index].tipo) {
        case "TextInput": {
          this.currentComponent = "AppTextInput";
          this.dialogForm = true;
          break;
        }
        case "Upload": {
          this.currentComponent = "AppUpload";
          this.dialogForm = true;
          break;
        }
        case "DatePicker": {
          this.currentComponent = "AppDTP";
          this.dialogForm = true;
          break;
        }
        case "Select": {
          this.currentComponent = "AppSelect";
          this.dialogForm = true;
          break;
        }
      }
    },
    agregarCampo() {
      console.log(this.formCampos);
      this.formCampos.campos.push({ nombre: "", tipo: "" });
    },
    eliminarProcesoPaso(index) {
      this.formCampos.campos.splice(index, 1);
    },
    agregarPaso() {
      console.log(this.formHeader);
      this.$store.commit("setPasos", {
        detalles: {
          titulo: this.formHeader.titulo,
          descripcion: this.formHeader.descripcion,
          responsable: this.formHeader.responsable,
        },
        pasos: this.formCampos,
      });
      console.log(this.formCampos);
      console.log(this.formHeader);
      this.drawer = false;
      this.formHeader = {};
      this.formCampos = {};
    },
    mostrarPaso(index) {
      this.$store.commit("setPasoActual", index);
      // setTimeout(() => {
      //   this.formHeader = this.$store.state.pasoActual.header;
      //   this.formCampos = this.$store.state.pasoActual.campos;
      // }, 10);
      this.drawer = true;
    },
    handleBack() {
      this.$router.back();
    },
    getProcesoIndex() {
      return this.$route.query[""] - 1;
    },
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  computed: {
    getNewProceso() {
      return this.$store.state.procesoActual[0];
    },
    getProcesosPasos() {
      return this.$store.state.pruebaProcesos[this.getProcesoIndex()].pasos;
    },
    getPasos() {
      console.log(this.$store.state.procesoActual.pasos);
      return this.$store.state.procesoActual[0].pasos;
    },
    getPasoActual() {
      return this.$store.pasoActual;
    },
    getCurrentComponent() {
      return this.currentComponent;
    },
  },
  components: {
    HomeLayout,
    AppDTP,
    AppSelect,
    AppTextInput,
    AppUpload,
  },
};
</script>

<style>
</style>