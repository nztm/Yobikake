export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Yobikake | あなたの呼びかけからはじめよう',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Yobikakeは、それぞれの人がTwitterやFacebookなどの各SNSを使って注意を呼びかけることができるサービスです。ワンクリックであなたのSNSで拡散することができます。一人ひとりの呼びかけが周りを巻き込んで大きな力になる。みんなで力を合わせてこの窮地を乗り越えましょう！'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Yobikake | あなたの呼びかけからはじめよう'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://yobikake.com/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Yobikake | あなたの呼びかけからはじめよう'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Yobikakeは、それぞれの人がTwitterやFacebookなどの各SNSを使って注意を呼びかけることができるサービスです。ワンクリックであなたのSNSで拡散することができます。一人ひとりの呼びかけが周りを巻き込んで大きな力になる。みんなで力を合わせてこの窮地を乗り越えましょう！'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://yobikake.com/ogp.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
