<template>
  <v-app class="black">
    <Header />
    <div>
      <v-row justify="end" class="mt-4 mr-3 height-ajust">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-if="tipo === 1 && usuario !== null" v-slot:activator="{ on, attrs }">
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
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Escreva a notícia</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="enviarNoticia(), (dialog = false)">
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
                class="noticia-chamada black"
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

                      <div>
                        <p
                          class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                        >
                          {{noticia.topico}}
                        </p>
                        <!-- <p
                          class="text-caption font-weight-medium font-italic text-left"
                        >
                          {{ noticia.data }}
                        </p> -->
                      </div>
                    </v-row>
                    
                  </v-card-title>
                </v-img>
                <p class="mt-4 subheading text-left white--text black">{{ noticia.titulo }}</p>
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
    };
  },
  async created(){
    this.tipo = 1
    this.usuario = firebase.auth.currentUser
    this.lerNoticias()
    if(firebase.auth.currentUser != null){
      this.uid = firebase.auth.currentUser.uid
      const userProfile = await firebase.profileCollection.where("uid", "==", this.uid).get()
      if(userProfile.docs.length > 0){
        const perfil = userProfile.docs[0]
        this.tipo = perfil.data().tipo
      }

    }
    if(this.valor == undefined || this.valor == null){
      this.selectTopic = 'Todos'
    }
  },
  methods: {
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
      this.$router.push({ name: "NoticiaInfo", params: { noticia } });
    },
  },
};
</script>

<style>
.zindex {
  z-index: 1;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
}

.noticia-chamada:not(.on-hover) {
  opacity: 0.6;
}
</style>
