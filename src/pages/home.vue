<template>
  <v-app>
      <Header/>
    <v-main>
      <Cards/>        
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Cards from "@/components/Cards"

export default {
  name: 'App',

  components: {    
    Header,
    Cards,

  },

  data: () => ({
    //
  }),
};
</script>
