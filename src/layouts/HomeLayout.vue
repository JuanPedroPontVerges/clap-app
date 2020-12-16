<template>
  <el-container type="flex" justify="center">
    <el-header>
      <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="click" />
    </el-header>
    <el-main>
      <slot />
      <SocialChat icon :attendants="attendants">
        <p slot="header">
          ¿Necesitas una mano?
        </p>
        <AppPulpoButton slot="button"></AppPulpoButton>
        <image
          style="width: 100px; height: 100px; border-radius: 100%"
          src="/src/assets/logo.png"
          slot="button"
        ></image>
        <small slot="footer">Chatea con Pulpo</small>
      </SocialChat>
    </el-main>
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
      // PULPO BUTTON
      attendants: [
        {
          app: "whatsapp",
          name: "Pulpo",
          number: "3516866950",
          avatar: {
            src: "../assets/logo.png",
            alt: "Pulpo",
          },
        },
      ],
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
</style>