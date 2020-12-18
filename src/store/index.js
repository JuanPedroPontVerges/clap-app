import Vue from "vue";
import Vuex from "vuex";
import * as fb from '../firebase'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
import 'core-js/es/array'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    navbarOptions: {
      elementId: "main-navbar",
      isUsingVueRouter: true,
      mobileBreakpoint: 992,
      brandImagePath: "./",
      brandImage: require(`../assets/logo.png`),
      brandImageAltText: "brand-image",
      collapseButtonOpenColor: "#661c23",
      collapseButtonCloseColor: "#661c23",
      showBrandImageInMobilePopup: true,
      ariaLabelMainNav: "Navegacion",
      menuOptionsRight: [{
          type: "link",
          text: "Trámites",
          path: {
            name: "Tramites"
          },
        },
        {
          type: "link",
          text: "Procesos",
          path: {
            name: "Procesos"
          },
        },
        {
          type: "link",
          text: "Personas",
          path: {
            name: "Personas"
          },
        },
        {
          type: "link",
          text: "Reportes",
          path: {
            name: "Reportes"
          },
        },
        {
          type: "link",
          text: "Configuración",
          path: {
            name: "Configuraciones"
          },
        },
        {
          type: "button",
          path: {
            name: "signup"
          },
          class: "button-red",
          iconRight: '<i class="el-icon-bell"></i>',
        },
        {
          type: "button",
          iconRight: '<i class="el-icon-user"></i>',
          path: {
            name: ""
          },
          text: "logout",
        },
      ],
    },
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
    userType: '',
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
        fecha: "03-11-2020",
        tramite: "Alta Proveedor",
        interesado: "Gonzalo Sosa",
        pasosCompletados: "2/2",
        tipo: 'Proveedor',
        departamento: 'Administración',
        estado: 'Finalizado',
        pasos: [{
            numeroDePaso: 1,
            nombre: 'Recepción Solicitud',
            descripcionPaso: 'Es el inicio del trámite solicitado por el interesado.',
            tipoPersona: 'Fisica',
            razonSocial: 'Imprenta HNOS Sosa',
            cuit: '30-25454456-2',
            comprobanteAfip: 12334241,
            comprobanteCbu: '28/12/20 al 11/01/21',
            emailContacto: 'gonzalo@sosaimprenta.com.ar',
            telefonoContacto: '3513555898',
            nombreContacto: 'Gonzalo Sosa',
            areaContratacion: 'Marketing',
            leidoTerminosContratacion: true,
            responsablePaso: 'Interesado',
            editable: false,
            completado: true,
            id: 1,
          },
          {
            numeroDePaso: 2,
            nombre: 'Respuesta Solicitud',
            descripcionPaso: 'Validar los datos, cargarlos en el CRM de administración y confirmar alta.',
            nombreResponsable: 'Leonela Ricompensa',
            departamento: 'Administración',
            decision: 'Si',
            comentarios: '',
            responsablePaso: 'Instituto',
            editable: false,
            completado: true,
            id: 2,
          }
        ],
        perfil: [{
          nombre: 'Gonzalo Sosa',
          email: 'gonzalo@sosaimprenta.com.ar',
          telefono: '3513555898',
          tipo: 'Proveedor'
        }]
      },
      {
        id: 2,
        fecha: "13-11-2020",
        tramite: "Pago proveedor",
        interesado: "Gonzalo Sosa",
        pasosCompletados: "2/2",
        tipo: 'Proveedor',
        departamento: 'Administracion',
        estado: 'Finalizado',
        pasos: [{
            numeroDePaso: 1,
            nombre: 'Recepción Solicitud',
            descripcionPaso: 'Es el inicio del trámite solicitado por el interesado.',
            razonSocial: 'Imprenta HNOS Sosa',
            cuit: '30-25454456-2',
            departamentoAprobacion: 'Administración',
            comentarios: 'Aceptamos efectivo, transferencias o cheques a 30 días únicamente.',
            responsablePaso: 'Interesado',
            editable: false,
            completado: true,
            id: 1
          },
          {
            numeroDePaso: 2,
            nombre: 'Respuesta Solicitud',
            descripcionPaso: 'Validar los datos, cargarlos en el CRM de administración y confirmar alta.',
            nombreResponsable: 'Leonela Ricompensa',
            departamento: 'Administración',
            decision: 'Si',
            comentarios: 'Fue transferencia',
            responsablePaso: 'Instituto',
            editable: false,
            completado: true,
            id: 2
          }
        ]
      },
    ],
    procesos: [{
        titulo: "Alta Proveedor",
        descripcion: "Es el trámite inicial para que un proveedor empiece a trabajar con la institución.",
        departamento: "Administración",
        tipoInteresado: "Empleado / Proveedor",
        id: 1,
        paso: '2',
        pasos: [{
            id: 1,
            titulo: "Recepción Solicitud",
            responsable: "Interesado",
            descripcion: "Es el inicio del trámite solicitado por el interesado.",
            campos: [{
              id: 0,
              nombre: "",
              tipo: "",
            }],
          },
          {
            id: 2,
            titulo: "Respuesta solicitud",
            responsable: "Instituto",
            descripcion: "Validar los datos, cargarlos en el CRM de administración y confirmar alta.",
            campos: [{
              id: 0,
              nombre: "",
              tipo: "",
            }],
          }
        ]
      },
      {
        titulo: "Pago Proveedor",
        descripcion: "Otra descripción de otro proceso",
        departamento: "Administración",
        tipoInteresado: "Empleado / Proveedor",
        id: 2,
        paso: '2',
        pasos: [{
            id: 1,
            titulo: "Recepcion Solicitud",
            responsable: "Interesado",
            descripcion: "Descripción de Recepción Solicitud",
            campos: [{
              id: 0,
              nombre: "",
              tipo: "",
            }],
          },
          {
            id: 2,
            titulo: "Respuesta de Solicitud",
            responsable: "Interesado",
            descripcion: "Descripcion de Respuesta de Solicitud",
            campos: [{
              id: 0,
              nombre: "",
              tipo: "",
            }],
          },
          {
            id: 3,
            titulo: "Confirmación de Solicitud",
            responsable: "Interesado",
            descripcion: "Otra descripción de confirmacion de solicitud",
            campos: [{
              id: 0,
              nombre: "",
              tipo: "",
            }],
          },
        ]
      }
    ],
    departamentos: [{
      nombre: 'Administración',
      personas: 1,
      acción: ''
    }],
    personas: [],
    selectedPersona: null,
    currentPaso: 0,
    currentTramite: 0,
    currentNumeroDeTramite: 0,
    procesoActual: {},
    procesosPasos: [{
      nombre: "Paso N°1",
      tipo: "Text Field",
    }],
    pasos: [{
      titulo: 'Recepción Solicitud',
      responsable: 'Interesado',
      descripcion: 'Random description'
    }],
    pasoActual: {
      campos: [{
          nombre: "Campo N°1",
          tipo: "Text Field"
        },
        {
          nombre: "Paso N°2",
          tipo: "Select"
        },
        {
          nombre: "Paso N°3",
          tipo: "Upload"
        },
      ],
      header: {
        titulo: "Recepción Solicitud",
        responsable: "Interesado",
        descripcion: "Random description"
      },
      descripcion: "Random description",
      responsable: "Interesado",
      titulo: "Recepción Solicitud",
      generatedID: 0,
    }
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
      let result = state.procesos.filter(ele => ele.id == payload)
      state.procesoActual = result
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
    },
    setGeneratedID(state) {
      state.generatedID++;
    },
    setUserType(state, payload) {
      state.userType = payload
    },
    setNavBar(state, payload) {
      state.navbarOptions = payload
    },
    setProcesoActualPaso(state, payload) {
      console.log(payload);
      state.procesoActual[0].pasos.push(payload)
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
          router.push('/tramites')
        })
        .catch(err => {
          this.commit('setErrorMessage', err.message)

        })
    },
    async loginEmpleados({
      dispatch
    }, form) {
      // sign user in
      await fb.auth.signInWithEmailAndPassword(form.email, form.password)
        .then(({
          user
        }) => {
          this.commit('setErrorMessage', ' ')
          dispatch('fetchUserProfile', user)
          router.push('/tramites_empleados')
        })
        .catch(err => {
          this.commit('setErrorMessage', err.message)

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
      router.push('/tramites')
      this.state.component = "AppLogin"
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