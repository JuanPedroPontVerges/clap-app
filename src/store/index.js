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
        fecha: "03-05-2020",
        tramite: "Proceso pedido de ausencia",
        interesado: "Agus",
        pasosCompletados: "2/3",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Activo',
        pasos: [{
            numeroDePaso: 1,
            nombreCompleto: 'Agustin Campos',
            motivo: 'Vacaciones',
            descripcion: 'Quiero tomarme las 2 semanas adeudadas del año anterior',
            idEmpelado: 12334241,
            fecha: '28/12/20 al 11/01/21',
            responsable: '',
            editable: false,
            completado: true
          },
          {
            numeroDePaso: 2,
            nombre: ' ',
            razonSocial: 'La Metro',
            departamento: ' ',
            decision: '',
            comentarios: '',
            responsable: '',
            editable: true,
            completado: false
          }
        ]
      },
      {
        id: 2,
        fecha: "13-06-2020",
        tramite: "Solicitud pago proveedor",
        interesado: "Juan Pedro",
        pasosCompletados: "3/5",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Activo',
        pasos: [{
            numeroDePaso: 1,
            razonSocial: 'Razon social',
            nombreCompleto: 'Razon social',
            cuit: 20415220120,
            departamento: '',
            comentarios: 'Un comentarioo',
            imgFactura: '',
            editable: false,
            responsable: '',
            completado: true
          },
          {
            numeroDePaso: 2,
            nombre: ' ',
            departamento: ' ',
            decision: '',
            comentarios: '',
            responsable: '',
            imgComprobante: '',
            editable: true,
            completado: false
          }
        ]
      },
    ],
    procesos: [{}],
    departamentos: [],
    personas: [],
    selectedPersona: null,
    currentPaso: 0,
    currentTramite: 0,
    currentNumeroDeTramite: 0,
    procesoActual: null,
    procesosPasos: [{
      nombre: "Paso N°1",
      tipo: "Text Field",
    }],
    pasos: [{
      titulo: 'Recepción Solicitud',
      responsable: 'Interesado',
      descripcion: 'Random description'
    }],
    pasoActual: {}
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
    setProcesoActual(state, payload) {
      state.procesoActual = payload
      console.log(state.procesoActual);
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
    deleteProceso(state, payload) {
      state.procesos.splice(payload, 1)
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
    setFilteredTable(state, payload) {
      state.procesos = payload
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
    getPersonaPersonas(state, payload) {
      state.selectedPersona = state.personas[payload]
    },
    setGuardarPersona(state, payload) {
      let index = state.personas.indexOf(state.selectedPersona);
      state.personas[index] = payload
    },
    getDepartamentos(state, payload) {
      let cont = 0;
      state.departamentos.map((department) => {
        cont++
        department.personas = state.personas.filter((person) => person.departamento === department.nombre).length;
        return department
      })
    },
    setCurrentPaso(state, payload) {
      state.currentPaso = payload
    },
    setCompletadoPaso(state, {
      paso,
      tramite
    }) {
      console.log(tramite - 1, paso - 1);
      state.tramites[tramite - 1].pasos[paso - 1].completado = true
      state.tramites[tramite - 1].estado = "Aprobado"
    },
    setCurrentTramite(state, payload) {
      state.currentTramite = payload
    },
    setNumeroDeTramite(state, payload) {
      state.currentNumeroDeTramite = payload
    },
    setAgregarProceso(state, payload) {
      state.procesos.push(payload)
    },
    setProcesosPasos(state, payload) {
      state.procesosPasos.push(payload)
    },
    eliminarProcesoPaso(state, payload) {
      state.procesosPasos.splice(payload, 1)
    },
    setPasos(state, {
      header,
      campos
    }) {
      state.pasos.push(header)
      state.procesosPasos.push(campos)
    },
    setPasoActual(state, payload) {
      state.pasoActual = {
        header: state.pasos[payload],
        campos: state.procesosPasos[payload]
      }
      setTimeout(() => {
        console.log(state.pasoActual);
      }, 10)
    }
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
      dispatch,
      commit
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
      commit('setAgregarPersona', {
        nombre,
        email,
        departamento: '',
        tipo: 'Empleado'
      })
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