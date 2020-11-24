<template>
  <el-dialog
    title="Invita a tu equipo"
    :visible.sync="setFormDialog"
    width="45%"
  >
    <el-form :model="form">
      <el-form-item
        v-for="(input, index) in 3"
        label="Agregar mail"
        :label-width="formLabelWidth"
        :key="index"
      >
        <el-input size="normal" v-model="form.usuarios[index].email"></el-input>
        <el-form-item>
          <el-checkbox v-model="form.usuarios[index].admin"
            >Hacer admin</el-checkbox
          >
        </el-form-item>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="openDialogForm()">Más tarde</el-button>
      <el-button type="primary" @click="saveForm()">Invitar equipo</el-button>
    </span>
    {{ form.usuarios[1].tipo }}
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        usuarios: [
          { email: "", admin: "" },
          { email: "", admin: "" },
          { email: "", admin: "" }
        ]
      },
      formLabelWidth: "100px",
      setFormDialog: true
    };
  },
  computed: {
    setFormDialog() {
      return this.$store.state.formDialog;
    }
  },
  methods: {
    openDialogForm() {
      this.$store.dispatch("setAppFormDialog");
      this.$store.commit("setCurrentDialog", "AppChooseTemplate");
    },
    saveForm() {
      this.$store.dispatch("setAppFormDialog");
      this.$store.commit("setCurrentDialog", "AppChooseTemplate");
    }
  }
};
</script>