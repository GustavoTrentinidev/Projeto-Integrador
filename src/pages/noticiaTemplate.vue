<template>
    <v-app class="transparent white--text" id="app">
        <Header/>
        <v-main>
          <v-container class="titulo-noticia">
          <div class="d-flex justify-center flex-column" v-if="noticia">
            <h1>{{noticia.titulo}}</h1>
            <span>{{noticia.data}}</span>
            <hr class="red">
            <v-container class="conteudo">
            <span v-html="noticia.corpo"></span>
            <v-img :src="noticia.imgChamada"></v-img>
            </v-container>
          </div>
          <div class="d-flex justify-center flex-column" v-else>
            <h1>{{noticia1.titulo}}</h1>
            <span>{{noticia1.data.toDate()}}</span>
            <hr class="red">
            <v-container class="conteudo">
            <span v-html="noticia1.corpo"></span>
            <v-img :src="noticia1.imgChamada"></v-img>
            </v-container>
          </div>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
import * as firebase from "@/plugins/firebase.js";
import Header from "@/components/Header"
export default {
    props: ['noticia'],
    components: {
        Header,
    },
    data(){
      return{
        noticia1: {}
      }
    },
    created() {
      if (this.noticia === undefined) {
        this.getNews()
      }
    }, methods: {
      async getNews() {
        await firebase.database.collection("news").doc(this.$route.params.id).get().then( (doc)=>{
          this.noticia1 = doc.data()
          });
      }
    }
}

</script>

<style>
#app {
    background: url("../assets/images/backGround.png") center center; 
    background-size: cover;
}
.titulo-noticia{
  max-width: 940px;
}
.conteudo{
  max-width: 600px;
}
</style>