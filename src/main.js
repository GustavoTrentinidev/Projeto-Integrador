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
  mode: "hash",
  routes: [
    {path: "/", component: home, meta:{title:"Home | Ganf News"}}, 
    {path: "/login", component: login, meta:{title: "Login | Ganf News"}},
    {path: "/news", name: "Noticias", component: news, props: true, meta:{title: "Notícias | Ganf News"}},
    {path: "/perfil", component: perfil, meta:{requiresAuth: true, title: "Perfil | Ganf News"},},
    {path: `/news/noticia/:id`, name: 'NoticiaInfo', component: noticiaComp, props: true, meta:{title: "Notícia | Ganf News"}}
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }  
})

router.beforeEach((to,from,next) =>{
  Vue.nextTick(() => {
    document.title = to.meta.title || "Ganf News";
    
  });
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
