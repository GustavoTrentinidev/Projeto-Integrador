<template>
    <div class="cards-jogos d-flex justify-center">
        <v-card class="d-flex pa-2 mx-16" max-width="fit-content" outlined tile dark >
        <a class="linkJogos" href="">
            <v-img max-width="25" src="@/assets/images/cardLOL.jpg" class="mr-2"></v-img>
            <div class="">League of Legends</div>
        </a>
        </v-card>
        <v-card class="d-flex pa-2 mx-16" max-width="fit-content" outlined tile dark>
        <a class="linkJogos" href="">
            <v-img max-width="25" src="@/assets/images/cardVAVA.png" class="mr-2"></v-img>
            <div class="">VALORANT</div>
        </a>
        </v-card>
        <v-card class="d-flex pa-2 mx-16" max-width="fit-content" outlined tile dark >
        <a class="linkJogos" href="">
            <v-img max-width="25" src="@/assets/images/cardWR.png" class="mr-2"></v-img>
            <div class="">Wild Rift</div>
        </a>
        </v-card>
        <v-card class="d-flex pa-2 mx-16" max-width="fit-content" outlined tile dark >
        <a class="linkJogos" href="">
            <v-img max-width="25" src="@/assets/images/cardTFT.jpeg" class="mr-2"></v-img>
            <div class="">Teamfight Tatics</div>
        </a>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .linkJogos{
    text-decoration: none;
    color: white;
    display: flex;
  }
</style>