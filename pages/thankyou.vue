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
        type: 'article',
        url: 'https://yobikake.com/thankyou',
        image: 'https://yobikake.com/thankyou.png'
      }
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.meta.url
        },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>
