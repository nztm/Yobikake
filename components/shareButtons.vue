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
      @click="copy(text + '\n https://yobikake.com/' + url)"
      ><i class="far fa-copy"></i> URLと文章をコピー
    </span>
    <div id="copiedDialog" style="display: none;">
      コピーしました！
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'text'],
  methods: {
    copy(msg) {
      const copyText = msg
      navigator.clipboard.writeText(copyText)
      const dialog = document.getElementById('copiedDialog')
      dialog.style.display = 'block'
      setTimeout(function() {
        document.getElementById('copiedDialog').classList.add('huwaClass')
        setTimeout(function() {
          document.getElementById('copiedDialog').style.display = 'none'
          document.getElementById('copiedDialog').style.opacity = 1
          document.getElementById('copiedDialog').classList.remove('huwaClass')
        }, 400)
      }, 2000)
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
#copiedDialog {
  background-color: rgba(80, 80, 80, 0.8);
  text-align: center;
  padding: 6px;
  color: #fff;
  border-radius: 4px;
  margin: auto;
  top: 12vh;
  right: 24px;
  left: 24px;
  position: fixed;
}
.huwaClass {
  animation: huwa 0.4s ease alternate;
}
@keyframes huwa {
  0% {
    opacity: 1;
    display: block;
  }
  100% {
    opacity: 0;
    display: block;
  }
}
</style>
