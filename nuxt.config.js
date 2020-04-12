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
          'Yobikakeは、SNSを使ってワンクリックで誰もが呼びかけを発信できるサービスです。新型コロナウィルスの感染が拡大するなか、高校生の自分たちにできることはないかと考え、立ち上げました。あなたの呼びかけからはじめよう。皆さんの力を合わせて新型コロナウィルスの拡大を抑えましょう！一人ひとりの呼びかけが大きな力になります。ぜひご自身のSNSでシェアをお願いします。'
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
          'Yobikakeは、SNSを使ってワンクリックで誰もが呼びかけを発信できるサービスです。新型コロナウィルスの感染が拡大するなか、高校生の自分たちにできることはないかと考え、立ち上げました。あなたの呼びかけからはじめよう。皆さんの力を合わせて新型コロナウィルスの拡大を抑えましょう！一人ひとりの呼びかけが大きな力になります。ぜひご自身のSNSでシェアをお願いします。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://yobikake.com/ogp.png'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '640540216785473'
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
      }
    ]
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
  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-163397212-1' || 'dummy'
      }
    ],
    '@nuxtjs/sitemap'
  ],

  buildModules: ['@nuxtjs/imagemin'],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://yobikake.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: [''],
    routes: ['/about', '/contributors']
  },
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
  },
  /* Toggle minify settings */
  collapseBooleanAttributes: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  processConditionalComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  trimCustomFragments: true,
  useShortDoctype: true
}
