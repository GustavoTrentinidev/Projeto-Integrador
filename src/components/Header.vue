<template> 
   <v-app-bar class="header-bar" app dark prominent  max-height="72">
   <v-app-bar-nav-icon class="icone-header1" x-large></v-app-bar-nav-icon>
      <v-img max-width="60" src="@/assets/images/logo.png"></v-img>
      <v-spacer></v-spacer>
      <v-toolbar flat class="header">
      <ul>
        <li><a class="hoveredLink" href="">Home</a></li>
        <li><a class="hoveredLink" href="">Notícias</a></li>
        <li><a class="hoveredLink" href="">Sobre</a></li>
      </ul>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-icon class="icone-header" x-large >mdi-account</v-icon>
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
  font-weight: 700;
  margin: 0 15px;
}
.hoveredLink{
  color: white;
  text-decoration: none;
  transition: 100ms ease-out;
}

.icone-header1{
  margin: 10px 0;

}

.icone-header{
  margin: 15px 0;

}

</style>
