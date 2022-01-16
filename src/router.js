import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Futsal from "./views/futsal/Futsal.vue";
import Dance from "./views/dance/Dance.vue";
import Gmpa from "./views/gmpa/Gmpa.vue";
import Esprime from "./views/esprime/Esprime.vue";
import UKM from "./views/ukm/Ukm.vue";
import Event from "./views/events/Event.vue";
import FormJoin from "./views/FormJoin.vue";
import EditUkm from "./views/ukm/Edit.vue";
import EditEvent from "./views/events/Edit.vue";
import DelUkm from "./views/ukm/Delete.vue";
import DelFutsal from "./views/futsal/Delete.vue";
import DelGmpa from "./views/gmpa/Delete.vue";
import DelDance from "./views/dance/Delete.vue";
import DelEsprime from "./views/esprime/Delete.vue";
import DelEvent from "./views/events/Delete.vue";
import AddUkm from "./views/ukm/Add.vue";
import AddEvent from "./views/events/Add.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./views/Admin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/futsal",
    component: Futsal,
  },
  {
    path: "/gmpa",
    component: Gmpa,
  },
  {
    path: "/dance",
    component: Dance,
  },
  {
    path: "/esprime",
    component: Esprime,
  },
  {
    path: "/editukm/:id",
    component: EditUkm,
  },
  {
    path: "/editevent/:id",
    component: EditEvent,
  },
  {
    path: "/delukm/:id",
    component: DelUkm,
  },
  {
    path: "/delfutsal/:id",
    component: DelFutsal,
  },
  {
    path: "/delgmpa/:id",
    component: DelGmpa,
  },
  {
    path: "/deldance/:id",
    component: DelDance,
  },
  {
    path: "/delesprime/:id",
    component: DelEsprime,
  },
  {
    path: "/delevent/:id",
    component: DelEvent,
  },
  {
    path: "/ukm",
    component: UKM,
  },
  {
    path: "/addukm",
    component: AddUkm,
  },
  {
    path: "/addevent",
    component: AddEvent,
  },
  {
    path: "/event",
    component: Event,
  },
  {
    path: "/formjoin",
    component: FormJoin,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;