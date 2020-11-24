import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Forms from "../views/Forms.vue";
import Register from "../views/Register.vue";
import Descripcion from "../views/Descripcion.vue";
import Tramites from "../views/Tramites.vue";
import Configuraciones from "../views/Configuraciones.vue";
import Personas from "../views/Personas.vue";
import Procesos from "../views/Procesos.vue";
import Reportes from "../views/Reportes.vue";
//import NewTemplate from "../views/NewTemplate.vue";
import {
  auth
} from '../firebase';

Vue.use(VueRouter);

const routes = [{
    path: "/tramites",
    name: "Tramites",
    component: Tramites,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/personas",
    name: "Personas",
    component: Personas,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresAuth: false,
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