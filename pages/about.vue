<template>
  <div>
    <section class="text-content">
      <h1>当サイトについて</h1>
      <p>
        「Yobikake」は、SNSを使ってワンクリックで誰もが呼びかけを発信できるサービスです。<br />
        新型コロナウィルスの感染が拡大するなか、高校生の自分たちにできることはないかと考え、立ち上げました。<br /><br />
        あなたの呼びかけからはじめよう。皆さんの力を合わせて新型コロナウィルスの拡大を抑えましょう！<br />
        一人ひとりの呼びかけが大きな力になります。ぜひご自身のSNSでシェアをお願いします。
      </p>
      <h2>Google Analyticsの利用について</h2>
      <p>
        当サイトでは、Googleによるアクセス解析ツール「Google
        Analytics」を利用しています。<br />
        このGoogle
        Analyticsはトラフィックデータの収集のためにCookieを使用しています。<br />
        このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br />
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br />
        GoogleAnalyticsの利用規約及びプライバシーポリシーについては下記のサイトをご覧ください。<br />
        <a href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >Google Analytics 利用規約</a
        ><br />
        <a href="https://policies.google.com/technologies/partner-sites?hl=ja"
          >Google プライバシポリシー</a
        >
      </p>
      <h2>お問い合わせ先</h2>
      <p>
        nztm.biz＠gmail.com <br />
        ※＠を半角にしてください。
      </p>
      <nuxt-link to="/">トップページに戻る</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        type: 'article',
        url: 'https://yobikake.com/about'
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
        }
      ]
    }
  }
}
</script>

<style>
.text-content {
  width: 90%;
  max-width: 900px;
  margin: 24px auto;
  line-height: 2em;
}
</style>
