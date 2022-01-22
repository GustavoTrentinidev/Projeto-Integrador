<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="league-text text-center" fluid>
          <h1>League of Legends</h1>
          <h4>
            League of Legends, mais conhecido como "lol", é um moba battle arena 5x5, no qual os jogadores escolhem seus campeões e tentam destruir a base adversário um do outro. O time que levar o Nexus inimigo ao chão primeiro se torna vencedor. Por conta de sua popularidade, o game é um dos maiores no cenário de esports em nível mundial.
          </h4>
          <div class="mt-3">
            <v-btn class="blue darken-2" @click="goToNewsPage">Notícias</v-btn>
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" sm="8" max-width="fit-content">
        <v-img src="@/assets/images/lol-img1.jpg"></v-img>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
    methods: {
    goToNewsPage(){
      const valor = "League of Legends"
      this.$router.push({ name: "Noticias", params: {valor} });
    }
  }
};
</script>

<style>
@media screen and (max-width: 600px) {
}
.league-text {
  color: white;
}
</style>