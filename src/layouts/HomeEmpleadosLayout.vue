<template>
  <el-container type="flex" justify="center">
    <el-header>
      <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="click" />
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <!-- <a href="https://wa.me/5493516866950" target="_blank" class="float" style="padding: 5px">
      <div style="text-align: center; margin-top: 12px">
        <img src="../assets/logo.png" alt="" />
      </div>
    </a> -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require(`../assets/${this.$store.state.logo}`),
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "#661c23",
        collapseButtonCloseColor: "#661c23",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Navegacion",
        menuOptionsRight: [
          {
            type: "link",
            text: "Trámites",
            path: { name: "Tramites_Empleados" },
          },
          {
            type: "link",
            text: "Configuracion",
            path: { name: "Configuracion_Empleado" },
          },
          {
            type: "button",
            iconRight: '<i class="el-icon-user"></i>',
            path: { name: "Tramites_Empleados" },
            text: "logout",
          },
        ],
      },
    };
  },
  methods: {
    click(text) {
      this.navbarOptions.menuOptionsRight[2].path.name = this.$route.name;
      if (text == "logout") {
        this.$confirm("Esta a punto de cerrar sesión", "Atención", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancelar",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "Sesión cerrada correctamente",
            });
            this.signout();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Cancelado",
            });
          });
      }
    },
    signout() {
      this.$store.dispatch("logout");
    },
  },
  created() {
    this.navbarOptions.menuOptionsRight[2].path.name = this.$route.name;
  },
  mounted() {

  },
  components: {
    getTypeOfUser() {
      return this.$store.state.userType;
    },
  },
};
</script>

<style>
@import "/path/to/node_modules/vue-navigation-bar.css";
.bg-blue {
  background-color: #292f4c !important;
}

i {
  margin: 0 !important;
}

/* .float {
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 40px;
  right: 40px;
  background-color: #00185d;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  text-align: center;
}

.float:hover {
  height: 85px;
  width: 85px;
  margin:2px;
  transition: 1ms all;
}

.my-float {
  margin-top: 16px;
} */
</style>