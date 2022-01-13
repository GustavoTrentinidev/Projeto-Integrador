<template>
  <div>
    <v-app-bar app absolute dark max-height="64">
        <v-app-bar-nav-icon class="mobile-feature" @click="sidebar = !sidebar" large></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-icon large class="perfil-icone">mdi-account</v-icon>
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
          <v-list-item>
              <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  Perfil
              </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
              <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Home</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
              <v-list-item-icon>
                  <v-icon>mdi-newspaper-variant-multiple-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Notícias</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
  
</template>

<script>
export default {
    data(){
      return{
          sidebar: false,
      }
  }
}
</script>


<style scoped>
.mobile-feature{
  display: none;
}
@media screen and (max-width:600px){
  .mobile-feature{
    display: inline-block;
  }
  .perfil-icone{
    display: none;
  }
}
</style>

