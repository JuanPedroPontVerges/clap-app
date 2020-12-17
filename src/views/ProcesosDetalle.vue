<template class="process-description">
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
            <h1>{{ getProceso.proceso }}</h1>
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
              <el-col :sm="24">
                <span class="process-header-title">Sobre el trámite</span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </el-col>
            </el-row>
            <el-row type="flex" align="middle" justify="space-between">
              <el-col :sm="24">
                <span class="process-header-title">Departamento</span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </el-col>
            </el-row>
            <el-row type="flex" align="middle" justify="space-between">
              <el-col :sm="24">
                <span class="process-steps-title">Pasos</span>
              </el-col>
            </el-row>
            <el-row style="border: 1px solid black; padding: 20px">
              <el-col :sm="24">
                <el-table
                  :data="displayData"
                  style="width: 100%"
                  :show-header="false"
                  :span-method="objectSpanMethod">
                  <el-table-column
                    prop="paso1Numero"
                    label="Paso"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="paso1Titulo"
                    label="Título"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="paso1Responsable"
                    label="Responsable">
                  </el-table-column>
                  <el-table-column>
                    <template slot-scope="scope">
                      <el-tooltip
                          class="item"
                          effect="dark"
                          content="Editar"
                          placement="top-start"
                      >
                          <el-button
                          type="primary"
                          icon="el-icon-edit"
                          circle
                          @click.stop="handleEdit(scope.$index)"
                          ></el-button>
                      </el-tooltip>
                      <el-tooltip
                          class="item"
                          effect="dark"
                          content="Eliminar"
                          placement="top-start"
                      >
                          <el-button
                          type="danger"
                          icon="el-icon-delete"
                          circle
                          @click.stop="handleDelete(scope.$index)"
                          ></el-button>
                      </el-tooltip>
                      </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";

export default {
  name: "ProcesosDetalle",
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
    getProceso() {
      return this.$store.state.procesoActual;
    },
    displayData() {
      return this.$store.state.procesosDetalle;
    }
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
  
};
</script>

<style></style>
