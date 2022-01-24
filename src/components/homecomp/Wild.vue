<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="wild-text text-center" fluid>
          <h1>Wild Rift</h1>
          <h4>
            Wild Rift (ou "Celulol", como é carinhosamente conhecido pelos
            jogadores) é versão mobile de League of Legends, que foi lançado no
            ano de 2021 e rapidamente alcançou seu espaço entre os maiores jogos
            mobile. O jogo surpreendeu com sua facilidade ao ser jogado no
            celular e conseguir manter a mesma dinâmica da versão para PC.
          </h4>
          <div class="mt-3">
            <v-btn class="blue lighten-1" @click="goToNewsPage">Notícias</v-btn>
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" sm="8" max-width="fit-content">
        <v-img src="@/assets/images/wr-img.png"></v-img>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  methods: {
    goToNewsPage() {
      const valor = "Wild Rift";
      this.$router.push({ name: "Noticias", params: { valor } });
    },
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
}
.wild-text {
  color: white;
}
</style>