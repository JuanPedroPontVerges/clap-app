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
</style>
