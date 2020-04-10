<template>
  <section>
    <div>
      <div class="content-one">
        <div class="content-thumbnail">
          <img src="~/assets/emoji/1f3e0.svg" alt="" />
        </div>
        <h3 class="content-title">うちで過ごそう！</h3>
        <shareButtons
          url="stayhome"
          text="うちで過ごそう！みんなのために🏠
          #うちで過ごそう #stayhome #Yobikake"
        ></shareButtons>
      </div>
      <div class="content-one">
        <div class="content-thumbnail">
          <img src="~/assets/emoji/1f932.svg" alt="" />
        </div>
        <h3 class="content-title">こまめな手洗いを</h3>
        <shareButtons
          url="handhygiene"
          text="こまめな手洗いをしよう！🧼🤲✨
          #こまめな手洗いを #handhygiene #Yobikake"
        ></shareButtons>
      </div>
      <div class="content-one">
        <div class="content-thumbnail">
          <img src="~/assets/emoji/1f44f.svg" alt="" />
        </div>
        <h3 class="content-title">医療に携わる人へ感謝を</h3>
        <shareButtons
          url="thankyou"
          text="医療に携わる人へ感謝を伝えよう！👨‍⚕️👩‍🔬👏
          #感謝を伝えよう #thankyou #Yobikake"
        ></shareButtons>
      </div>
      <div class="content-one">
        <div class="content-thumbnail">
          <img src="~/assets/emoji/1f637.svg" alt="" />
        </div>
        <h3 class="content-title">距離をたもとう</h3>
        <shareButtons
          url="keepdistance"
          text="💚🧍‍♂️人との距離をたもとう🧍‍♀️💜
          #距離をたもとう #keepdistance #Yobikake"
        ></shareButtons>
      </div>
    </div>
  </section>
</template>

<script>
import shareButtons from '~/components/shareButtons.vue'

export default {
  components: {
    shareButtons
  }
}
</script>

<style lang="scss">
body {
  background-color: #dbdbdb;
  * {
    box-sizing: border-box;
  }
}
.content-one {
  background-color: #fff;
  width: 20%;
  border-radius: 8px;
}
.content-thumbnail {
  background-color: #fea63e;
  padding: 24px;
  border-radius: 8px 8px 0 0;
  img {
    display: block;
    margin: auto;
    width: 70%;
  }
}
.content-title {
  margin: 12px;
}
</style>
