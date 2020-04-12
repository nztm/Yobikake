<template>
  <div>
    <section class="text-content">
      <h2>Contributors</h2>
      <div class="contributor">
        <p>企画、運営、実装</p>
        <h3>Tomohiro Nozaki</h3>
        <div class="sns-link">
          <a href="https://github.com/nztm" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/nztm_tw" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="contributor">
        <p>デザイン</p>
        <h3>Yuki Mihashi</h3>
        <div class="sns-link">
          <a href="https://github.com/yuki384" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/YukiMihashi" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="http://yuki384.github.io/" target="_blank">
            <i class="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </section>
    <goBack />
  </div>
</template>

<script>
import goBack from '~/components/goBack.vue'

export default {
  components: {
    goBack
  },
  data() {
    return {
      meta: {
        type: 'article',
        url: 'https://yobikake.com/contributors'
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
.contributor {
  background-color: #fff;
  padding: 16px 24px;
  margin: 24px 0;
  border-radius: 6px;
  a {
    font-size: 24px;
    margin-right: 12px;
    color: #2a2a49;
    transition: 0.3s all;
    &:hover {
      color: #7676a4;
    }
  }
  p {
    margin: 1em 0 0;
  }
  h3 {
    margin: 0 0 1em;
  }
}
.sns-link {
  margin-bottom: 1em;
}
</style>
