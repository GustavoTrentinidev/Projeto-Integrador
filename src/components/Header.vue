<template> 
   <v-app-bar app dark prominent max-height="72">
      <v-img max-width="60" src="@/assets/images/logo.png"></v-img>
      <v-spacer></v-spacer>
      <v-toolbar flat class="header">
        <v-toolbar-items>
          <a href="">Home</a>
        </v-toolbar-items>
      <ul>
        <li>Home</li>
        <li>Notícias</li>
        <li>Sobre</li>
      </ul>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-img max-width="60" src="@/assets/images/userLogo.png" />
   </v-app-bar>
</template>

<script>
export default {

}
</script>


<style scoped>
.header{
  font-family: 'Montserrat', sans-serif;
  /* font-size: 2rem; */
}

ul{
  margin: auto auto;
}
li{
  display: inline;
  color: white;
  font-weight: 700;
  margin: 0 15px;
}



</style>
