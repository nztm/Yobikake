<template>
  <html>
    <meta http-equiv="refresh" content="0; URL=https://yobikake.com/" />
  </html>
</template>

<script>
export default {
  layout: 'redirect',
  data() {
    return {
      meta: {
        image: 'https://yobikake.com/keepdistance.png'
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
