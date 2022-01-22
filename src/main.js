import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify/lib'
import { auth } from './plugins/firebase'

import home from "./pages/home.vue"
import login from "./pages/login.vue"
import news from "./pages/news.vue"
import perfil from "./pages/perfil.vue"
import noticiaComp from "./pages/noticiaTemplate.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/", component: home}, 
    {path: "/login", component: login},
    {path: "/news", name: "Noticias", component: news, props: true},
    {path: "/perfil", component: perfil, meta:{requiresAuth: true},},
    {path: "/news/noticia", name: 'NoticiaInfo', component: noticiaComp, props: true}
  ]
})

router.beforeEach((to,from,next) =>{
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser){
    next("/login")
  } else{
    next()
  }
})

Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true },
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
