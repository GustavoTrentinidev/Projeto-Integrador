<template>
  <v-app>
      <v-main class="main">
          <v-container class="container fill-height">
            <v-row>
              <v-col cols="4"></v-col>
              <v-col class="black d-flex flex-column align-center ">
                <h2 class="white--text mt-10">Iniciar sessão</h2>
                <v-form class="d-flex flex-column">
                  <v-text-field dark label="Email" class="mt-10" outlined required :rules="emailRules" v-model="user.email"></v-text-field>
                  <v-text-field dark label="Senha" class="mt-n4" outlined v-model="user.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" ></v-text-field>
                  <v-btn class="mx-auto" >
                    <v-img max-width="25" src="@/assets/images/googleLogin.png"></v-img>
                  </v-btn>
                  <v-btn class="mx-auto mt-5">
                    Submit
                  </v-btn>
                </v-form>
              </v-col>
              <v-col cols="4"></v-col>
            </v-row>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      user: {},
      show: false,
    }
  },
  components: { },

}
</script>

<style>
.main{
  background: url("../assets/images/bgLogin.jpg");
  background-position: center;
  background-size: contain;
}

</style>