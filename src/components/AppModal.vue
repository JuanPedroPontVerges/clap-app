<template>
  <div>
    <el-dialog
      title="¿Estas seguro? "
      :visible.sync="getFormDialog"
      width="35%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="eliminatTramite()">Cancelar tramite</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getFormDialog() {
      return this.$store.state.formDialog;
    },
  },
  methods: {
    setFormDialog() {
      this.$store.commit("setFormDialog");
      //this.$router.push(`/tramites/`);
    },
    eliminarTramite() {
      let id = 0;
      id = this.$router.currentRoute.params.id.slice(3, 4);
      this.$store.commit("deleteTramite", id);
      this.setFormDialog()
      console.log(id);
    },
  },
};
</script>

<style scoped>
</style>