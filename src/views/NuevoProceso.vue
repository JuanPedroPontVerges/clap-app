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
          {{ getNewProceso.titulo }}
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
    <div style="padding: 40px">
      <el-row>
        <el-col :xs="24" style="border: 1px solid black">
          <el-row>
            <el-col :xs="24" style="padding: 20px">
              <h2>Sobre el tramite</h2>
              <p>{{ getNewProceso.descripcion }}</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" style="padding: 20px">
              <h2>Departamento</h2>
              <p>{{ getNewProceso.departamento }}</p>
            </el-col>
          </el-row>
          <el-row style="border: 1px solid black">
            <el-col :xs="24" style="padding: 0 20px">
              <h2 style="text-align: center">Pasos</h2>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        style="border: 1px solid black"
        align="middle"
        v-for="(paso, index) in getPasos"
        :key="index"
      >
        <span
          style="
            padding: 20px;
            margin: 10px;
            border-radius: 50%;
            border: 1px solid black;
          "
          >{{ index + 1 }}</span
        >
        <el-col :xs="16">
          <h3>{{ paso.titulo }}</h3>
          <h3>Responsable: {{ paso.responsable }}</h3>
        </el-col>
        <el-col :xs="8" style="text-align: right; padding: 20px">
          <el-button type="primary" @click="mostrarPaso(index)"
            >Ver formulario</el-button
          >
        </el-col>
      </el-row>
      <el-row style="border: 1px solid black">
        <el-col :xs="24" style="text-align: center; padding: 20px">
          <div>
            <el-button
              type="primary"
              icon="el-icon-plus"
              circle
              @click="drawer = true"
            ></el-button>
            <span style="margin: 0 10px; font-size: 20px">Agregar Paso</span>
          </div>
        </el-col>
      </el-row>

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
                    v-model="formHeader.titulo"
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
                    v-model="formHeader.descripcion"
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

            <el-form label-position="top">
              <div
                style="margin: 20px"
                v-for="(campo, index) in formCampos"
                :key="index"
              >
                <el-col :lg="3">
                  <p>{{ index + 1 }}</p>
                </el-col>
                <el-col :xs="9" :lg="8">
                  <el-form-item label="Nombre" >
                    <el-input  v-model="campo.nombre"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="9" :lg="8">
                  <el-form-item label="Tipo">
                    <el-select  v-model="campo.tipo">
                      <el-option value="TextInput">TextInput</el-option>
                      <el-option value="TextArea">TextArea</el-option>
                      <el-option value="DatePicker">DatePicker</el-option>
                      <el-option value="NumberInput">NumberInput</el-option>
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
                    @click="dialogForm = true"
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
              <el-form :model="formSettings">
                <h3>Aca podras configurar tus campos</h3>
                <el-form-item label="Caracteres minimos">
                  <el-input-number
                    size="small"
                    v-model="formSettings.min"
                    :min="1"
                    :max="10"
                  ></el-input-number>
                </el-form-item>
                <el-form-item label="Caracteres máximos">
                  <el-input-number
                    size="small"
                    v-model="formSettings.max"
                    :min="25"
                    :max="250"
                  ></el-input-number>
                </el-form-item>
                <el-form-item label="Descripción">
                  <el-input
                    type="textarea"
                    :rows="2"
                    v-model="formSettings.description"
                  >
                  </el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogForm = false">Cancel</el-button>
                <el-button type="primary" @click="saveForm()"
                  >Save changes</el-button
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
      formCampos: [
        {
          nombre: "Ejemplo",
          tipo: "TextArea",
        },
      ],
      formSettings: {
        min: 0,
        max: 0,
        description: "",
      },
      dialogForm: false,
    };
  },
  methods: {
    handleCommand() {
      //
    },
    agregarCampo() {
      console.log(this.formCampos);
      this.formCampos.push({ nombre: "", tipo: "" });
    },
    eliminarProcesoPaso(index) {
      this.formCampos.splice(index, 1)
    },
    agregarPaso() {
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
      setTimeout(() => {
        this.formHeader = this.$store.state.pasoActual.header;
        this.formCampos = this.$store.state.pasoActual.campos;
      }, 10);
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
      return this.$store.state.procesoActual;
    },
    getProcesosPasos() {
      return this.$store.state.pruebaProcesos[this.getProcesoIndex()].pasos;
    },
    getPasos() {
      return this.$store.state.pasos;
    },
    getPasoActual() {
      console.log(this.$store.pasoActual);
      return this.$store.pasoActual;
    },
  },
  components: {
    HomeLayout,
  },
};
</script>

<style>
</style>