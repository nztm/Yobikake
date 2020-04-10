<template>
  <div></div>
</template>

<script>
export default {
  layout: 'redirect',
  data() {
    return {
      meta: {
        image: 'https://yobikake.com/stayhome.png'
      }
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>
