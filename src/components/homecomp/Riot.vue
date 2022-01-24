<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="8" max-width="fit-content">
        <v-img src="@/assets/images/riot-logo.png"></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="riot-text text-center " fluid>
          <h1>Riot Games</h1>
          <h4>
            Riot Games é a empresa responsável pela criação dos jogos League of Legends,
            VALORANT, Teamfight Tatics, Wild Rift, entre outros. E também vem apostando
            em outras áreas, como a música, com o Riot Games Music e a televisão, com a série da Arcane Netflix.
          </h4>
          <div class="mt-3">
            <v-btn class="red darken-1" @click="goToNewsPage" >Notícias</v-btn>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  methods: {
    goToNewsPage(){
      const valor = "Riot"
      this.$router.push({ name: "Noticias", params: {valor} });
    }
  }

};
</script>

<style>
@media screen and (max-width: 600px) {
}
.riot-text {
  color: white;
}
</style>