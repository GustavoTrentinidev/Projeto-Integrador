<template>
  <v-app class="black">
    <Header/>
    <v-container class="pa-8 mt-16" fluid>
      <h1 class="white--text">Meu perfil</h1>
      <v-img height="200" width="200" class="rounded-circle ml-16" style="background-position:center; background-image: url('https://s3.amazonaws.com/bm3assets/assets/default-user-img-c61778d399f8abbcb5d2ac637122913c3a86a8c4c4c96a8ff81b0bfcf79b2c88.jpg')" :src="foto">
      </v-img>
      <v-form>
        <v-container>
          <v-text-field label="Nome" v-model="nome" color="red" dark></v-text-field>
          <v-text-field label="Sobrenome" v-model="sobrenome" color="red" dark></v-text-field>
          <v-text-field label="Foto de perfil (link)" v-model="foto" color="red" dark></v-text-field>
          <v-btn class="red darken-1" @click="salvarPerfil">Salvar</v-btn>
          <v-btn class="red darken-1 ml-2" @click="logOut">Sair</v-btn>
        </v-container>
      </v-form>
      <h1 class="white--text">Notícias curtidas</h1>
      <v-container class="pa-4 mt-2 text-center">
      <v-row class="fill-height">
        <template v-for="noticia of curtidasUser">
          <v-col :key="noticia.id" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                class="noticia-chamada transparent"
                @click="abrirNoticia(noticia)"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="noticia.imgChamada" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <!-- <p class="mt-4 subheading text-left">
                        {{ noticia.titulo }}
                      </p> -->
                      <div class="d-flex justify-space-between">
                        <p
                          class="ma-0 text-body-1 font-weight-bold font-italic text-left d-inline"
                        >
                          {{noticia.topico}}
                        </p>
                        <!-- <p
                          class="text-caption font-weight-medium font-italic text-left"
                        >
                          {{ noticia.data }}
                        </p> -->
                        <div>
                      <v-btn icon>
                        <v-icon style="color:red; opacity: 1" @click="descurtir(noticia)">
                          mdi-cards-heart
                        </v-icon>
                      </v-btn>
                        </div>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
                <p class="mt-4 subheading text-left white--text">{{ noticia.titulo }}</p>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue"
import * as firebase from "@/plugins/firebase.js"
export default {
  components: {
    Header,
  },
  data() {
    return{
      nome:"",
      sobrenome:"",
      foto:"",
      uid:"",
      temPerfil: false,
      userProfile: '',
      curtidasUser: [],
      listaCurtidasDescurtir: [],
    }
  },
  async mounted(){
    this.uid = firebase.auth.currentUser.uid
    const userProfile = await firebase.profileCollection.where("uid", "==", this.uid).get()
    this.userProfile = userProfile
    if(userProfile.docs.length > 0){
      this.temPerfil = true
      const perfil = userProfile.docs[0]
      this.profileId = perfil.id
      this.nome = perfil.data().nome
      this.sobrenome = perfil.data().sobrenome
      this.foto = perfil.data().foto
      this.tipo = perfil.data().tipo
    }
    this.lerCurtidas()
    
  },
  methods:{
    async descurtir(noticia){
      const index = this.curtidasUser.indexOf(noticia)
      this.curtidasUser.splice(index,1)
      this.listaCurtidasDescurtir.splice(index,1)
      await firebase.profileCollection.doc(this.userProfile.docs[0].id).update({
            curtidas: this.listaCurtidasDescurtir
        })
    },
    async lerCurtidas(){
      this.curtidasUser = []
      // Arrumar: no reload da página ele não pega os dados corretamente.
      const userProfile = await firebase.profileCollection.where("uid", "==", this.uid).get()
      this.userProfile = userProfile
      for(const i in userProfile.docs[0].data().curtidas){
        await firebase.newsCollection.doc(userProfile.docs[0].data().curtidas[i]).get().then(doc =>{
          this.curtidasUser.push(doc.data())
          this.listaCurtidasDescurtir.push(doc.id)
        })
        //console.log(await firebase.newsCollection.get().docs.doc(userProfile.docs[0].data().curtidas[i]))
     }
    },
    async salvarPerfil(){
      if(this.temPerfil){
        //atualiza as informações
        await firebase.profileCollection.doc(this.profileId).update({
          nome: this.nome,
          sobrenome: this.sobrenome,
          foto: this.foto,
        })
      } else{
        //adiciona as informações
        await firebase.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          sobrenome: this.sobrenome,
          foto: this.foto,
        })
      }
    },
    
    async logOut(){
      try{
        await firebase.auth.signOut()
        this.$router.push({path:"/"})
      }catch(error){
        console.log(error)
      }
    },

    abrirNoticia(noticia) {
      //console.log(noticia);
      this.$router.push({ name: "NoticiaInfo", params: { noticia, id: noticia.id }});
    },
  }
}
</script>

<style>

</style>