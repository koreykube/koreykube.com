import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: () => import('../views/CreatePost.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { requiresAuth: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit("setUser");
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.signedIn) {
      next({
        path: '/',
        query: { redirect: to.fullPath  }
      });
    } else {
        next();
    }
  } else {
    next();
  }
});

export default router
