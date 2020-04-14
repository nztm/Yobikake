<template>
  <div class="share-buttons">
    <a
      :href="
        'http://twitter.com/share?url=https://yobikake.com/' +
          url +
          '&text=' +
          encodeURIComponent(text) +
          '%0A' +
          '&related=yobikakecom,nztm_tw'
      "
      target="_blank"
      class="share-link share-link-twitter"
      ><i class="fab fa-twitter"></i> ツイートする
    </a>
    <a
      :href="
        'https://www.facebook.com/dialog/share?app_id=640540216785473&display=popup&href=https://yobikake.com/' +
          url
      "
      target="_blank"
      class="share-link share-link-fb"
      ><i class="fab fa-facebook"></i> シェアする
    </a>
    <a
      :href="
        'https://social-plugins.line.me/lineit/share?url=https://yobikake.com/' +
          url +
          '&text=' +
          encodeURIComponent(text) +
          '%0A'
      "
      target="_blank"
      class="share-link share-link-line"
      ><i class="fab fa-line"></i> 共有する
    </a>
    <span
      target="_blank"
      class="share-link share-link-copy copy"
      @click="copy('https://yobikake.com/' + url)"
      ><i class="far fa-copy"></i>{{ copyLabel }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['url', 'text'],
  data: () => ({
    copyLabel: 'URLをコピーする'
  }),
  methods: {
    copy(msg) {
      const copyText = msg
      navigator.clipboard.writeText(copyText)
      this.copyLabel = 'コピーしました！'
      setTimeout(
        function() {
          this.copyLabel = 'URLをコピーする'
        }.bind(this),
        2000
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.share-buttons {
  padding: 12px;
}
.share-link {
  display: block;
  border-radius: 4px;
  padding: 10px 24px;
  margin-top: 6px;

  color: #fff;
  text-decoration: none;
  transition: 0.3s all;
  i {
    margin-right: 4px;
    font-size: 20px;
  }
  &:hover {
    padding-left: 40px;
  }
}
.share-link-twitter {
  background-color: #1da1f2;
}
.share-link-fb {
  background-color: #3b5998;
}
.share-link-line {
  background-color: #00bb00;
}
.share-link-copy {
  background-color: #777777;
  cursor: pointer;
}
</style>
