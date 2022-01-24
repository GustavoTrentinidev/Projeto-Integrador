<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="8" max-width="fit-content">
        <v-img src="@/assets/images/valorant-img.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="valorant-text text-center" fluid>
          <h1>Valorant</h1>
          <h4>
            VALORANT é o mais novo FPS 5x5 da Riot Games, que consta com
            personagens únicos e inéditos. O jogo vem ganhando grande destaque
            no cenário dos FPS's e adiquirindo uma imensa quantidade de público
            e torcedores, vindo a bater de frente até mesmo com o gigante CS:GO
          </h4>
          <div class="mt-3">
            <v-btn class="red darken-4" @click="goToNewsPage">Notícias</v-btn>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  methods: {
    goToNewsPage() {
      const valor = "Valorant";
      this.$router.push({ name: "Noticias", params: { valor } });
    },
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
}
.valorant-text {
  color: white;
}
</style>