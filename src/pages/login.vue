<template>
  <v-app>
      <v-main class="main">
          <v-container class="container fill-height">
            <v-row>
              <v-col sm="4" cols="1"></v-col>
              <v-col class="black d-flex flex-column align-center ">                
                <h1 class="white--text mt-10"><router-link to="/">Ganf News </router-link></h1>
                <h2 class="white--text mt-10">Iniciar sessão</h2>
                <v-form class="d-flex flex-column">
                  <v-text-field dark label="Email" class="mt-10" outlined required v-model="user.email" @keydown.enter="login"></v-text-field>
                  <v-text-field dark label="Senha" class="mt-n4" outlined v-model="user.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"  @keydown.enter="login" ></v-text-field>
                  <v-btn class="mx-auto" @click="errorLogin = true">
                    <v-img max-width="25" src="@/assets/images/googleLogin.png"></v-img>
                  </v-btn>
                  <v-btn class="mx-auto mt-5" @click="login">
                    Submit
                  </v-btn>
                </v-form>
              </v-col>
              <v-col sm="4" cols="1"></v-col>
            </v-row>
          </v-container>
          <v-snackbar color="red" v-model="errorLogin" danger timeout="2000">Usuário ou senha inválidos.</v-snackbar>
          
          <v-dialog v-model="novaConta" persistent max-width="300" dark> 
            <v-card>
              <v-card-title>
                Conta não encontrada.
              </v-card-title>
              <v-card-text>
                A conta não foi localizada. Deseja criar uma nova conta com os dados informados?
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" text @click="criarNovaConta">Sim</v-btn>
                <v-btn color="red darken-1" text @click="novaConta = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-main>
  </v-app>
</template>

<script>
import * as firebase from "@/plugins/firebase.js"
export default {
  data(){
    return{
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    }
  },
  components: { },
  methods:{
    async login(){
      try{
        await firebase.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        this.$router.push({path:"/"})
      }catch(error){
        const errorCode = error.code
        switch(errorCode){
          case "auth/wrong-password":
            this.errorLogin = true
            break
          case "auth/invalid-email":
            this.errorLogin = true
            break
          case "auth/user-not-found":
            this.novaConta = true
            break
          default:
            this.errorLogin = true
            break
        }
      }
    },
    async criarNovaConta(){
      this.novaConta = false
      await firebase.auth.createUserWithEmailAndPassword(this.user.email,this.user.password)
      this.login()
    }
  }

}
</script>

<style>
.main{
  background: url("../assets/images/bgLogin.jpg");
  background-position: center;
  background-size: contain;
}
</style>