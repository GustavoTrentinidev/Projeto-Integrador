<template>
  <div class="mt-16 d-flex justify-center" id="carrosel">
      <v-btn class="align-self-center">
          <v-icon>mdi-arrow-left-box</v-icon>
      </v-btn>
        <div class="divCarrosel imgEsquerda" id="espaço2">
            <v-img :src="noticias[noticias.length + (-i -1)].imgChamada" @click="passCarrossel(-1)"></v-img>
        </div>
        <div class="divCarrosel imgCentral ml-n16 mr-n16 mt-n6" id="espaço1">
            <v-img :src="noticias[i + 1].imgChamada"></v-img>
        </div>
        <div class="divCarrosel imgDireita" id="espaço3">
            <v-img :src="noticias[i + 2].imgChamada" @click="passCarrossel(1)"></v-img>
        </div>
        <v-btn class="align-self-center">
          <v-icon>mdi-arrow-right-box</v-icon>
      </v-btn>
  </div>
</template>

<script>
import * as firebase from "@/plugins/firebase.js";
export default {
    data(){
        return{
            noticias: [],
            i: 0, 
        }
    },
    mounted(){
        this.lerNoticias()
    },
    methods: {
        passCarrossel(valor){
            this.i += valor
            console.log(this.i)
            if (valor == -1){
                if(this.i < 0){console.log('oi')
                }

            }
            console.log(this.noticias[this.noticias.length -this.i -1])
        },
        async lerNoticias(){
            const logNews = await firebase.newsCollection.get()
            for(const doc of (logNews.docs)){
                this.noticias.push({
                    id: doc.id,
                    data: doc.data().data.toDate(),
                    titulo: doc.data().titulo,
                    corpo: doc.data().corpo,
                    imgChamada: doc.data().imgChamada,
                    topico: doc.data().topico
                })
            }   
        }
    }
}
</script>

<style>
.divCarrosel{
    max-width: 30%;
}
.imgDireita, .imgEsquerda{
    filter: brightness(0.5);
    transition: filter 0.2s ease-in-out;
}
.imgDireita:hover, .imgEsquerda:hover{
    filter: brightness(1);
}
.imgCentral{
    z-index: 1;
}
</style>