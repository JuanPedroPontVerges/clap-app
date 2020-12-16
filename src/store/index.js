import Vue from "vue";
import Vuex from "vuex";
import * as fb from '../firebase'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    configuraciones: {
      general: {
        nombre: '',
        descripcion: '',
        url: '',
        dialogImageUrl: ''
      },
      preferencias: {
        empleados: '',
        zonaHoraria: '',
        diasDeTrabajo: [],
      }
    },
    userProfile: {},
    component: 'AppLogin',
    errorMsg: '',
    loaded: false,
    tramiteActual: {},
    formDialog: false,
    logo: 'logo.png',
    agregarPersonaDialog: false,
    tramites: [{
        id: 1,
        fecha: "2016-05-03",
        tramite: "Contratar empleados",
        interesado: "Agus",
        pasosCompletados: "2/3",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Activo'
      },
      {
        id: 2,
        fecha: "2017-06-13",
        tramite: "Otro tramite",
        interesado: "Juan Pedro",
        pasosCompletados: "3/5",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Activo'
      },
      {
        id: 3,
        fecha: "2020-05-03",
        tramite: "Inscripcion alumno",
        interesado: "Lauti",
        pasosCompletados: "4/4",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Cancelado'
      },
      {
        id: 4,
        fecha: "2018-02-21",
        tramite: "Pagar cuota",
        interesado: "Ivan",
        pasosCompletados: "2/5",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Activo'
      }
    ],
    departamentos: [],
    personas: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setCurrentComponent(state, payload) {
      state.component = payload
    },
    setErrorMessage(state, payload) {
      state.errorMsg = payload
    },
    setLoaded(state, payload) {
      state.loaded = payload
    },
    setTramiteActual(state, payload) {
      state.tramiteActual = payload
    },
    setFormDialog(state) {
      state.formDialog = !state.formDialog
    },
    setLogo(state, payload) {
      state.logo = payload
    },
    setDepartamento(state, payload) {
      state.departamentos.push(payload)
    },
    deleteDepartamento(state, payload) {
      state.departamentos.splice(payload, 1)
    },
    deleteTramite(state, payload) {
      state.tramites.splice(payload, 1)
    },
    setAgregarPersonaDialogo(state) {
      state.agregarPersonaDialog = !state.agregarPersonaDialog
    },
    setAgregarPersona(state, payload) {
      state.personas.push(payload)
    },
    deletePersona(state, payload) {
      state.personas.splice(payload, 1)
    },
    setFilteredTable(state, payload) {
      state.tramites = payload
    },
    setConfigGeneral(state, payload) {
      state.configuraciones.general = payload
    },
    setConfigPreferencias(state, payload) {
      state.configuraciones.preferencias = payload
    },
    setFilteredPersonaTable(state, payload) {
      state.personas = payload
    },
    setDialogImageUrl(state, payload) {
      state.configuraciones.general.dialogImageUrl = payload
    },
  },
  actions: {
    async login({
      dispatch
    }, form) {
      // sign user in
      await fb.auth.signInWithEmailAndPassword(form.email, form.password)
        .then(({
          user
        }) => {
          this.commit('setErrorMessage', ' ')
          dispatch('fetchUserProfile', user)
          router.push('/')
        })
        .catch(err => {
          this.commit('setErrorMessage', err.message)
          console.log("Errorrrr", err)
        })
    },
    async fetchUserProfile({
      commit
    }, user) {
      // fetch user profile
      await fb.usersCollection.doc(user.uid).get()
        .then(userProfile => {
          commit('setUserProfile', userProfile.data())
        })
        .catch(err => {
          commit('setErrorMessage', err.message)
        })
      commit('setLoaded', true)
    },
    async signup({
      dispatch
    }, {
      nombre,
      email,
      contrasena,
      apellido,
      telefono
    }) {
      // sign user up
      const {
        user
      } = await fb.auth.createUserWithEmailAndPassword(email, contrasena)
      // set type of user depending of where this action is called from
      let tipo = ''
      if (router.currentRoute.fullPath == "/login") {
        tipo = "admin-user"
      } else {
        tipo = "normal-user"
      }
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        usuario: {
          nombre,
          email,
          contrasena,
          apellido,
          telefono,
          type: tipo
        }
      })
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
      router.push('/')
    },
    async logout({
      commit
    }) {
      await fb.auth.signOut()
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/login')
    },
    changeDialogState({
      commit
    }) {
      commit('setAgregarPersonaDialogo')
    }
  },
  modules: {}
});