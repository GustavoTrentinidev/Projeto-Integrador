<template>
  <v-main class="pr-0 black" max-width="auto">
    <v-row>
      <v-col cols="12" sm="4" class="my-auto">
        <v-container class="wild-text text-center" fluid>
          <h1>Wild Rift</h1>
          <h4>
            (texto)
          </h4>
          <div class="mt-3">
            <v-btn class="blue lighten-1" >Notícias</v-btn>
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
export default {};
</script>

<style>
@media screen and (max-width: 600px) {
}
.wild-text {
  color: white;
}
</style>