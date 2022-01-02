<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="league-text text-center" fluid>
          <h1>League of Legends</h1>
          <h4>
            (texto)
          </h4>
          <div class="mt-3">
            <v-btn class="blue darken-2" >Notícias</v-btn>
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
export default {};
</script>

<style>
@media screen and (max-width: 600px) {
}
.league-text {
  color: white;
}
</style>