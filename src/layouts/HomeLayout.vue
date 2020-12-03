<template>
  <el-container type="flex" justify="center">
    <el-header>
      <vue-navigation-bar :options="navbarOptions" />
    </el-header>
    <el-main>
      <slot />
    </el-main>
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
        tooltipAnimationType: "shift-away",
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
            path: { name: "login" },
            iconRight: '<i class="el-icon-user"></i>',
          },
        ],
      },
    };
  },
  methods: {
    signout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {},
  components: {},
  /*beforeCreate(){
    this.brandImage =  require(`../assets/${this.$store.state.logo}`)
  }
  */
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