<template>
  <v-app>
      <Header/>
    <v-main class="black">
      <Cards/>
      <riot class="pt-5 pb-16"/>
      <league class="pt-5 pb-16" id="lol" />
      <valorant class="pt-5 pb-16" id="valorant" />
      <wild class="pt-5 pb-16" id="wr" />
      <TFT class="pt-5 pb-16" id="tft" />
      <Nav/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Cards from "@/components/homecomp/Cards"
import Riot from "@/components/homecomp/Riot"
import League from "@/components/homecomp/League"
import Valorant from "@/components/homecomp/Valorant"
import Wild from "@/components/homecomp/Wild"
import TFT from "@/components/homecomp/TFT"

export default {
  name: 'App',
  components: {    
    Header,
    Cards,
    Riot,
    League,
    Valorant,
    Wild,
    TFT,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>