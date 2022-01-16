<template>
    <div class="cards-jogos d-flex justify-center mt-4 mb-4">
        <v-row class="v-linha d-flex flex-nowrap ">
            <v-col class="pl-16">
                <v-card class="d-flex pa-2 mx-6 lol rounded " min-width="201.60" max-width="fit-content" max-height="41" outlined tile dark >
                <a class="linkJogos" @click="$vuetify.goTo('#lol')">
                    <v-img max-width="25" src="@/assets/images/cardLOL.jpg" class="mr-2"></v-img>
                    <div class="">League of Legends</div>
                </a>
                </v-card>
            </v-col>
            <v-col class="px-0">
                <v-card class="d-flex pa-2 mx-6 valorant rounded" max-width="fit-content" min-width="139" max-height="41" outlined tile dark>
                <a class="linkJogos" @click="$vuetify.goTo('#valorant')">
                    <v-img max-width="25" src="@/assets/images/cardVAVA.png" class="mr-2"></v-img>
                    <div class="">VALORANT</div>
                </a>
                </v-card>
            </v-col>
            <v-col class="px-0">
                <v-card class="d-flex pa-2 mx-6 wild-rift rounded" max-width="fit-content" min-width="118" max-height="41"  outlined tile dark >
                <a class="linkJogos" @click="$vuetify.goTo('#wr')">
                    <v-img max-width="25" src="@/assets/images/cardWR.png" class="mr-2"></v-img>
                    <div class="">Wild Rift</div>
                </a>
                </v-card>
            </v-col>
            <v-col class="px-0">
                <v-card class="d-flex pa-2 mx-6 tft rounded" max-width="fit-content" min-width="182.5" max-height="41"  outlined tile dark >
                <a class="linkJogos" @click="$vuetify.goTo('#tft')">
                    <v-img max-width="25" src="@/assets/images/cardTFT.jpeg" class="mr-2"></v-img>
                    <div class="">Teamfight Tatics</div>
                </a>
                </v-card>
            </v-col>
        </v-row>
    </div>    
</template>

<script>
export default {

}
</script>

<style scoped>

.cards-jogos{
    background-image: linear-gradient(to right, #000000, #1e1e1e, #000000);
    font-family: 'Montserrat', sans-serif;
    /* overflow-x: auto; */
    top: 0;
    z-index: 1;
    position: sticky;
    position: -webkit-sticky;
    
}

.v-linha{
    overflow-x: auto;
}
  
.valorant{
    background-image: linear-gradient(to right, #1e1e1e, #ff4454);
    border: 0; 
}

.lol{
    border: 0;
    background-image: linear-gradient(to right, #00444e, #009dbb);
}

.wild-rift{
    background-image: linear-gradient(to right, #00d5cf, #009dbb);
    border: 0; 
}

.tft{
    border: 0; 
    background-image: linear-gradient(to right, #ffb342, #ff8337);
}

.linkJogos{
    text-decoration: none;
    color: white;
    display: flex;
}   
</style>