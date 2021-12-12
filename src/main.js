import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import home from "./pages/home.vue"
import login from "./pages/login.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/", component: home}, 
    {path: "/login", component: login},
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
