<template>
  <el-row type="flex" justify="center">
    <el-col :lg="12">
      <p style="text-align:text-center">
       <span v-if="getUsuario"> {{ getUsuario }} </span>
      </p>
    </el-col>
  </el-row>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";

export default {
  name: "Home",
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  computed: {
    getUsuario() {
      return this.$store.state.userProfile.usuario.nombre || "cargando"; 
    }
  },
  mounted(){
 
  }
};
</script>
