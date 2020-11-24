<template>
  <el-container>
    <el-header>
      <vue-navigation-bar :options="navbarOptions" />
    </el-header>
    <el-main style="background-color: #dfddeb">
      <slot />
    </el-main>
    <el-footer style="border: 1px solid black">Pie de página</el-footer>
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
            text: "Tramites",
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
            text: "Configuracion",
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

.vnb {
  background: #00185d !important;
  color: #7e8ebe !important;
}

.vnb__menu-options__option__link {
  color: #7e8ebe !important;
}

.el-header {
  padding: 0 !important;
}

.router-link-active{
  color:white !important;
}
</style>