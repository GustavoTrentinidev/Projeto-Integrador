<template>
  <v-app>
      <Header/>
    <v-main class="black">
      <Cards/>
      <riot/>
      <div id="lol">
        <hello-world/>
      </div>
      <div id="valorant">
        <hello-world/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Cards from "@/components/Cards"
import HelloWorld from '@/components/HelloWorld';
import Riot from "@/components/Riot"

export default {
  name: 'App',
  components: {    
    Header,
    Cards,
    HelloWorld,
    Riot,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>