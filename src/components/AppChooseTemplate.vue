<template>
  <el-dialog
    title="Eleji tu primera plantilla"
    :visible.sync="setFormDialog"
    width="90%"
  >
    <el-row :gutter="20">
      <el-col :span="8" v-for="(o, index) in 3" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <el-button type="primary" class="button">Elejir</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" :offset="6" style="margin-top:10px;">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>¿No encontraste lo que buscabas?</span>
            <div class="bottom clearfix">
              <router-link to="/newTemplate">
                <el-button type="primary" class="button"
                  >Crea tu propia plantilla</el-button
                >
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>