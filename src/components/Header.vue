<template>
  <div>
    <v-app-bar app absolute dark max-height="64" class="bricks">
        <v-app-bar-nav-icon class="mobile-feature" @click="sidebar = !sidebar" large></v-app-bar-nav-icon>
        <v-img src="@/assets/images/ganf-gif.gif" max-width="165"></v-img>
        <h2 v-for="text of textsHeader" :key="text.title" class="textoHeader mx-5" >
          <router-link link :to="text.to" class="text-decoration-none white--text">
            {{text.title}}
          </router-link>
        </h2>
      </v-app-bar>
        <v-navigation-drawer app dark v-model="sidebar">
        <v-list dense dark color="#272727">
            <v-list-item>
              <v-list-item-title>
                  <h3>Ganf News</h3>
              </v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list>
          <v-list-item v-for="item of itensLista" :key="item.title" link >
              <v-list-item-icon>
                  <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link :to="item.to" class="text-decoration-none white--text">
                  {{item.title}}
                </router-link>
              </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

        </v-list>
      </v-navigation-drawer>
  </div>
  
</template>

<script>
export default {
    data(){
      return{
          sidebar: false,
          textsHeader: [
            {title:"Home", to:"/"},
            {title:"Notícias", to:"/news"},
            {title:"Perfil", to:"/perfil"}
          ],
          itensLista: [
            {title:"Home", icon:"mdi-home",to:"/"},
            {title:"Perfil", icon:"mdi-account",to:"/perfil"},
            {title:"Notícias", icon:"mdi-newspaper-variant-multiple-outline",to:"/news"}
          ]
      }
  }
}
</script>


<style scoped>
.mobile-feature{
  display: none;
}
.bricks{
  background: url("../assets/images/bricks.png")
}
@media screen and (max-width:600px){
  .mobile-feature{
    display: inline-block;
  }
  .perfil-icone{
    display: none;
  }
  .textoHeader{
    display: none;
  }
}
</style>

