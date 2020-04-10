<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  background-color: #ecf1f7;
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  color: #2a2a49;
}
</style>
