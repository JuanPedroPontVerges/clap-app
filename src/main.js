import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import {
  auth
} from './firebase'
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);
// vue navigation bar CSS
import "vue-navigation-bar/dist/vue-navigation-bar.css";

Vue.config.productionTip = false;

let app

auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  } else
    store.commit("setUserProfile", null)
})