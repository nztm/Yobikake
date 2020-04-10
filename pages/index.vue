<template>
  <section>
    <div>
      <div class="content-one">
        <div class="content-thumbnail">
          <img src="~/assets/emoji/1f3e0.svg" alt="" />
        </div>
        <h3 class="content-title">うちで過ごそう！</h3>
        <a
          href="http://twitter.com/share?url=https://yobikake.com/stayhome&hashtags=Yobikake,うちで過ごそう"
          target="_blank"
          class="share-link share-link-twitter"
          ><i class="fab fa-twitter"></i> Twitter でシェア</a
        >
        <a
          href="https://www.facebook.com/dialog/share?app_id=????&display=popup&href=https://yobikake.com/stayhome&hashtag=#Yobikake"
          target="_blank"
          class="share-link share-link-fb"
          ><i class="fab fa-facebook"></i> Facebook でシェア</a
        >
        <a
          href="https://social-plugins.line.me/lineit/share?url=https://yobikake.com/stayhome"
          target="_blank"
          class="share-link share-link-line"
          ><i class="fab fa-line"></i> LINE でシェア</a
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.share-link {
  display: block;
  border-radius: 4px;
  padding: 12px 24px;
  margin: 8px;

  color: #fff;
  text-decoration: none;
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
</style>
