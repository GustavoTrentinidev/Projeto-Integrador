<template>
  <v-app>
      <Header />

    <v-main>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>

    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';

import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {    
    Header,
    HelloWorld,

  },

  data: () => ({
    //
  }),
};
</script>
