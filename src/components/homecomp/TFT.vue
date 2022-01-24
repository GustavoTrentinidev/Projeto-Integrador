<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="8" max-width="fit-content">
        <v-img src="@/assets/images/tft-img.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="tft-text text-center" fluid>
          <h1>Teamfight Tatics</h1>
          <h4>
            O Teamfight Tactics é um jogo gratuito de estratégia e auto chess
            desenvolvido e publicado pela Riot Games. O jogo se passa no
            universo de League of Legends e é baseado no Dota Auto Chess, onde
            os jogadores competem online contra outros sete adversários,
            construindo uma equipe para ser a última em pé.
          </h4>
          <div class="mt-3">
            <v-btn class="orange darken-3" @click="goToNewsPage"
              >Notícias</v-btn
            >
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
      const valor = "Teamfight Tatics";
      this.$router.push({ name: "Noticias", params: { valor } });
    },
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
}
.tft-text {
  color: white;
}
</style>