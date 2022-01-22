<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="8" max-width="fit-content">
        <v-img src="@/assets/images/valorant-img.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="valorant-text text-center " fluid>
          <h1>Valorant</h1>
          <h4>
            (texto)
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
    goToNewsPage(){
      const valor = "Valorant"
      this.$router.push({ name: "Noticias", params: {valor} });
    }
  }
};
</script>

<style>
@media screen and (max-width: 600px) {
}
.valorant-text {
  color: white;
}
</style>