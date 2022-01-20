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
          <span class="white--text">{{tipo}}</span>
        </v-container>
      </v-form>
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
      tipo:""
    }
  },
  async mounted(){
    this.uid = firebase.auth.currentUser.uid
    console.log(this.uid)
    const userProfile = await firebase.profileCollection.where("uid", "==", this.uid).get()
    if(userProfile.docs.length > 0){
      this.temPerfil = true
      const perfil = userProfile.docs[0]
      this.profileId = perfil.id
      this.nome = perfil.data().nome
      this.sobrenome = perfil.data().sobrenome
      this.foto = perfil.data().foto
      this.tipo = perfil.data().tipo
    }
  },
  methods:{
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
    
    logOut(){
      this.$router.push({path:"/"})
    }

  }
}
</script>

<style>

</style>