<template>
<AppTablero></AppTablero> 
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
import AppTablero from "../components/AppTablero";

export default {
  data() {
    return {};
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  components: {
    AppTablero
  }
};
</script>

<style>
</style>