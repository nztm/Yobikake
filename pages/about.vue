<template>
  <div>
    <section class="text-content">
      <h1>当サイトについて</h1>
      <p>
        「Yobikake」は、SNSを使ってワンクリックで誰もが呼びかけを発信できるサービスです。<br /><br />
        新型コロナウィルスの感染が拡大するなか、高校生の自分たちにできることはないかと考え、立ち上げました。<br /><br />
        あなたの呼びかけからはじめよう。皆さんの力を合わせて新型コロナウィルスの拡大を抑えましょう！<br /><br />
        一人ひとりの呼びかけが大きな力になります。ぜひご自身のSNSでシェアをお願いします。
      </p>
      <h2>Google Analyticsの利用について</h2>
      <p>
        当サイトでは、Googleによるアクセス解析ツール「Google
        Analytics」を利用しています。 この Google Analytics
        はトラフィックデータの収集のために Cookie を使用しています。<br /><br />
        このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        この機能は Cookie
        を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br />
        Google Analytics
        の利用規約及びプライバシーポリシーについては下記のサイトをご覧ください。<br />
        <a href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >Google Analytics 利用規約</a
        ><br />
        <a href="https://policies.google.com/technologies/partner-sites?hl=ja"
          >Google プライバシポリシー</a
        >
      </p>
      <h2>寄付について</h2>
      <p>サイトの運営費、ドメイン、サーバー費などに使わせていただきます。</p>
      <img src="~/assets/kyash_qr.png" />
      <h2>お問い合わせ先</h2>
      <p>
        nztm.biz＠gmail.com <br />
        ※＠を半角にしてください。
      </p>
      <nuxt-link to="/" class="goback">← トップページに戻る</nuxt-link>
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

<style lang="scss" scoped>
.text-content {
  width: 90%;
  max-width: 900px;
  margin: 24px auto;
  line-height: 2em;

  img {
    width: 20%;
  }
}
.goback {
  background-color: #4183d1;
  border-radius: 40px;
  display: block;
  padding: 12px 36px;
  margin: 60px auto;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  width: 90%;
  max-width: 300px;
  text-align: center;
  transition: 0.3s all;
  box-sizing: border-box;
  &:hover {
    padding-left: 0;
  }
}
</style>
