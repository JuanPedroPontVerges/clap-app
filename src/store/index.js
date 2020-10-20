import Vue from "vue";
import Vuex from "vuex";
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    loginOrRegister: false,
    component: 'AppLogin'
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setShowLogInOrRegister(state) {
      state.loginOrRegister = !state.loginOrRegister;
    },
    setCurrentComponent(state, payload) {
      state.component = payload
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      await fb.auth.signInWithEmailAndPassword(form.email, form.password)
        .then(({ user }) => {
          console.log(user)
          dispatch('fetchUserProfile', user)
        })
        .catch(err => {
          this.commit('setErrorMessage', err.message)
          console.log("Errorrrr", err)
        })
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      await fb.usersCollection.doc(user.uid).get()
      .then(userProfile => {
        commit('setUserProfile', userProfile.data())
      })
      .catch(err => {
        commit('setErrorMessage', err.message)
      })
      // set user profile in state
      // change route to dashboard
      // if (router.currentRoute.fullPath !== '/')
      //   router.push('/')
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      // set type of user depending of where this action is called from
      let tipo
        if (router.currentRoute.fullPath == "/login") {
        tipo = "admin-user"
      } else {
        tipo = "normal-user"
      }
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        email: form.email,
        contrasena: form.password,
        type: tipo
      })
    
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      // router.push('/login')
    },
  },
  modules: {}
});