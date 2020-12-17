<template>
  <el-container type="flex" justify="center">
    <el-header>
      <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="click" />
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <a
      href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
      class="float"
      target="_blank"
    >
      <i class="el-icon-s-tools my-float"></i>
    </a>
  </el-container>
</template>

<script>
import { SocialChat } from "vue-social-chat";
import AppPulpoButton from "../components/AppPulpoButton";

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
            path: { name: "Tramites" },
          },
          {
            type: "link",
            text: "Procesos",
            path: { name: "Procesos" },
          },
          {
            type: "link",
            text: "Personas",
            path: { name: "Personas" },
          },
          {
            type: "link",
            text: "Reportes",
            path: { name: "Reportes" },
          },
          {
            type: "link",
            text: "Configuración",
            path: { name: "Configuraciones" },
          },
          {
            type: "button",
            path: { name: "signup" },
            class: "button-red",
            iconRight: '<i class="el-icon-bell"></i>',
          },
          {
            type: "button",
            iconRight: '<i class="el-icon-user"></i>',
            path: { name: "" },
            text: "logout",
          },
        ],
      },
    };
  },
  methods: {
    click(text) {
      this.navbarOptions.menuOptionsRight[6].path.name = this.$route.name;
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
    this.navbarOptions.menuOptionsRight[6].path.name = this.$route.name;
  },
  components: {
    SocialChat,
    AppPulpoButton,
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

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  text-align: center;
}

.my-float {
  margin-top: 16px;
}
</style>