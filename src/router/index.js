import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Forms from "../views/Forms.vue";
import Descripcion from "../views/Descripcion.vue";
import Tramites from "../views/Tramites.vue";
import Configuraciones from "../views/Configuraciones.vue";
import Personas from "../views/Personas.vue";
import Procesos from "../views/Procesos.vue";
import ProcesosDetalle from "../views/ProcesosDetalle.vue";
import Reportes from "../views/Reportes.vue";
import {
  auth
} from '../firebase';

Vue.use(VueRouter);

const routes = [{
    path: "/personas",
    name: "Personas",
    component: Personas,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/",
    name: "Tramites",
    component: Tramites,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/procesos",
    name: "Procesos",
    component: Procesos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reportes",
    name: "Reportes",
    component: Reportes,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/configuraciones",
    name: "Configuraciones",
    component: Configuraciones,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/descripcion/:id",
    name: "Descipcion",
    component: Descripcion,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/detalle/:id",
    name: "Detalle Procesos",
    component: ProcesosDetalle,
    meta: {
      requiresAuth: true,
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) {
    next('/landing')
  } else {
    next()
  }
})

export default router;