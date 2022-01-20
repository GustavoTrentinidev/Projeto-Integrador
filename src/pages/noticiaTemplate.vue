<template>
    <v-app class="black white--text">
        <Header/>
        <v-main>
          <v-container class="titulo-noticia">
          <div class="d-flex justify-center flex-column" id="teste">
            <h1>{{noticia.titulo}}</h1>
            <span>{{noticia.data}}</span>
            <hr class="red">
            <v-container class="conteudo">
            <span v-html="noticia.corpo"></span>
            <v-img :src="noticia.imgChamada"></v-img>
            </v-container>
          </div>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header"
export default {
    props: ['noticia'],
    components: {
        Header,
    },
}
</script>

<style>
.titulo-noticia{
  max-width: 940px;
}
.conteudo{
  max-width: 600px;
}
</style>