<template>
  <component :is="layout">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  data() {
    return {
      layout: `div`,
    };
  },
  name: "app",
  components: {},
};
</script>

<style>
@font-face {
  font-family: "Geomanist";
  src: local("Geomanist"),
    url(./fonts/Geomanist/Geomanist-Regular.otf) format("truetype");
}
</style>
