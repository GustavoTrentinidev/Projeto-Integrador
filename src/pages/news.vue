<template>
  <v-app id="app">
    <Header />
    <div>
      <v-row justify="end" class="mt-4 mr-3 height-ajust">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-if="tipo === 1 && usuario !== null && userperfil" v-slot:activator="{ on, attrs }">
            <v-btn
              id="btnNoticia"
              class="zindex"
              color="red darken-1"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Criar Notícia
            </v-btn>
          </template>
          <v-card>
            <v-toolbar dark>
              <v-btn icon dark @click="dialog = false, atualizando = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Escreva a notícia</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn v-if="atualizando" dark text @click="atualizarNoticia(), (dialog = false, atualizando = false)">
                  Atualizar
                </v-btn>
                <v-btn v-else dark text @click="enviarNoticia(), (dialog = false, atualizando = false)">
                  Publicar
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-text-field
                    label="Link da imagem da chamada da notícia"
                    color="red darken-1"
                    v-model="imgChamada"
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                  <v-select
                    v-model="selectModal"
                    :items="items"
                    filled
                    label="Tema da notícia"
                  ></v-select>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-text-field
                    label="Digite o título da notícia"
                    color="red darken-1"
                    v-model="newstitle"
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <span>{{dica}}</span>
                  <v-textarea
                    filled
                    auto-grow
                    label="Digite o corpo da notícia"
                    v-model="corpo"
                    @keydown.tab.prevent="darTab"
                    rows="10"
                    row-height="30"
                    shaped
                    color="red darken-1"
                  ></v-textarea>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <div>
    <v-select
      class="mt-14 mx-4"
      max-width="300"
      dark
      v-model="selectTopic"
      :items="itemsTopic"
      filled
      label="Filtrar por tópico"
    ></v-select>
    </div>

    <v-container class="pa-4 mt-2 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="noticia of noticias">
          <v-col :key="noticia.id" cols="12" md="4" v-if="noticia.topico == selectTopic || selectTopic == 'Todos'">
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

                      <v-menu top right v-if="tipo === 1 && usuario !== null && userperfil">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                          >
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item
                            v-for="(opcao, i) in opcoes"
                            :key="i"
                          >
                            <v-list-item-title @click="opcao.funcao(noticia)" style="cursor:pointer">
                                {{ opcao.what }}
                            </v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                      <v-btn icon>
                        <v-icon v-if="curtidasUser.indexOf(noticia.id) != -1" style="color:red; opacity: 1" @click="curtir(noticia)">
                          mdi-cards-heart
                        </v-icon>
                        <v-icon v-else style="color:white; opacity: 1" @click="curtir(noticia)">
                          mdi-cards-heart-outline
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
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import * as firebase from "@/plugins/firebase.js";
export default {
  props: ['valor'],
  components: {
    Header,
  },
  data() {
    return {
      transparent: "rgba(255, 255, 255, 0)",
      dica:"Para pular uma linha digite duas vezes <br>",
      imgChamada: "",
      dialog: false,
      newstitle: "",
      corpo: "",
      uid: "",
      noticias: [],
      tipo:"",
      selectModal: '',
      selectTopic: this.valor,
      items: ['Riot', 'Teamfight Tatics', 'Wild Rift', 'League of Legends',"Valorant"],
      itemsTopic: ['Todos','Riot', 'Teamfight Tatics', 'Wild Rift', 'League of Legends',"Valorant"],
      usuario: "",
      userperfil: "",
      opcoes: [{what: 'Delete', funcao: this.deletar}, {what: 'Update', funcao: this.abrirAtualizar}],
      atualizando: false,
      idUpdate: '',
      curtidasUser: [],
      userProfile: ''
    };
  },
  async created(){
    this.tipo = 1
    this.userperfil = true
    
    this.usuario = firebase.auth.currentUser
    this.lerNoticias()
    if(firebase.auth.currentUser != null){
      this.uid = firebase.auth.currentUser.uid
      const userProfile = await firebase.profileCollection.where("uid", "==", this.uid).get()
      if(userProfile.docs.length > 0){
        const perfil = userProfile.docs[0]
        this.tipo = perfil.data().tipo
        this.userperfil = true
      } else{
        this.userperfil = false
      }
    }
    if(this.valor == undefined || this.valor == null){
      this.selectTopic = 'Todos'
    }
  },
  mounted(){
    this.lerCurtidas()
  },
  methods: {
    async lerCurtidas(){
      // Arrumar: no reload da página ele não pega os dados corretamente.
      const userProfile = await firebase.profileCollection.where("uid", "==", this.uid).get()
      this.userProfile = userProfile
      for(const i in userProfile.docs[0].data().curtidas){
        this.curtidasUser.push(userProfile.docs[0].data().curtidas[i])
      }
    },
    async curtir(noticia){
      // Arrumar: quando curtir a notícia, não abrí-la também.
      if (this.curtidasUser.indexOf(noticia.id) != -1){
        const index = this.curtidasUser.indexOf(noticia.id)
        this.curtidasUser.splice(index,1)
        await firebase.profileCollection.doc(this.userProfile.docs[0].id).update({
          curtidas: this.curtidasUser
        })
      } else{
        this.curtidasUser.push(noticia.id)
        await firebase.profileCollection.doc(this.userProfile.docs[0].id).update({
          curtidas: this.curtidasUser
        })
      }
      console.log(this.curtidasUser)
      this.lerNoticias()
    },
    async deletar(noticia){
      await firebase.newsCollection.doc(noticia.id).delete()
      this.lerNoticias()
    },
    abrirAtualizar(noticia){
      console.log(noticia)
      this.dialog = true
      this.atualizando = true
      this.newstitle = noticia.titulo;
      this.corpo = noticia.corpo;
      this.imgChamada = noticia.imgChamada;
      this.selectModal = noticia.topico
      this.idUpdate = noticia.id
    },
    async atualizarNoticia(){
      await firebase.newsCollection.doc(this.idUpdate).update({
        corpo: this.corpo,
        titulo: this.newstitle,
        imgChamada: this.imgChamada,
        topico: this.selectModal
      });
      this.newstitle = "";
      this.corpo = "";
      this.imgChamada = "";
      this.lerNoticias();
    },
    darTab() {
      this.corpo += "    ";
    },
    async enviarNoticia() {
      await firebase.newsCollection.add({
        uid: this.uid,
        corpo: this.corpo,
        titulo: this.newstitle,
        data: new Date(),
        imgChamada: this.imgChamada,
        topico: this.selectModal
      });
      this.newstitle = "";
      this.corpo = "";
      this.imgChamada = "";
      this.lerNoticias();
    },
    async lerNoticias() {
      const logNews = await firebase.newsCollection.get();
      this.noticias = []
      for (const doc of logNews.docs) {
        this.noticias.push({
          id: doc.id,
          data: doc.data().data.toDate(),
          titulo: doc.data().titulo,
          corpo: doc.data().corpo,
          imgChamada: doc.data().imgChamada,
          topico: doc.data().topico
        });
      }
    },
    abrirNoticia(noticia) {
      //console.log(noticia);
      this.$router.push({ name: "NoticiaInfo", params: { noticia, id: noticia.id }});
    },
  },
};
</script>

<style>
#app {
    background: url("../assets/images/backGround.png") center center; 
    background-size: cover;
}
.zindex {
  z-index: 1;
}
.v-card {
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
}
.noticia-chamada:not(.on-hover) {
  filter: brightness(0.4);
}
</style>