<template>
    <v-app class="black white--text">
        <Header/>
        <v-main>
          <v-container class="titulo-noticia">
          <div class="d-flex justify-center flex-column" id="teste">
            <h1>{{noticia.titulo}}</h1>
            <span>{{noticia.data.toDate()}}</span>
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
import * as firebase from "@/plugins/firebase.js";
import Header from "@/components/Header"
export default {
    props: ['noticia'],
    components: {
        Header,
    },
    created() {
      console.log(this.$route.params.id)
      if (this.noticia === undefined) {
        this.getNews()
        
        

//for (const doc of logNews.docs) {
        //  this.noticias.push({
        //  id: doc.id,
        //  data: doc.data().data.toDate(),
        //  titulo: doc.data().titulo,
        //  corpo: doc.data().corpo,
        //  imgChamada: doc.data().imgChamada,
        //  topico: doc.data().topico
        //    });
        //}
      }
    }, methods: {
      async getNews() {
        await firebase.database.collection("news").doc(this.$route.params.id).get().then( (doc)=>{
          this.noticia = doc.data()
          console.log(doc.data())
          });
      }
    }
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