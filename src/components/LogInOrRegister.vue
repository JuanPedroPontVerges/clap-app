<template>
  <div>
    <el-dialog
      :title="currentComponent == 'AppLogin' ? 'Iniciar Sesión' : 'Registrarse'"
      :before-close="beforeCloseHandler"
      :visible.sync="showLogInOrRegister"
      width="40%"
    >
      <component :is="currentComponent"></component>
    </el-dialog>
  </div>
</template>

<script>
import AppRegister from "../components/AppRegister";
import AppLogin from "../components/AppLogin";
import { mapState } from "vuex";

export default {
  data() {
    return {
      showSuccess: false
    };
  },
  methods: {
    beforeCloseHandler() {
      this.$store.commit("setShowLogInOrRegister")
      this.$store.commit("setCurrentComponent", 'AppLogin')
    }
  },
  computed: {
    showLogInOrRegister() {
      return this.$store.state.loginOrRegister;
    },
    currentComponent() {
      return this.$store.state.component;
    }
  },
  components: {
    AppLogin,
    AppRegister
  }
};
</script>

<style scoped>
</style>