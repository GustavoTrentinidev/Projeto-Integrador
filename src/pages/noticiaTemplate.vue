<template>
    <v-app class="black white--text">
        <Header/>
        <v-main>
          <div class="d-flex justify-center flex-column">
            <h1>{{noticia.titulo}}</h1>
          </div>
      </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header"
export default {
    props: ['noticia'],
    components: {
        Header,
    }
}
</script>

<style>

</style>