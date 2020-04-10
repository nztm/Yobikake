<template>
  <section>
    <div>
      <div class="content">
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
          <h3 class="content-title">こまめな手洗いをしよう！</h3>
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
          <h3 class="content-title">医療に携わる人へ<br />感謝を伝えよう！</h3>
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
          <h3 class="content-title">人との距離をたもとう！</h3>
          <shareButtons
            url="keepdistance"
            text="💚🧍‍♂️人との距離をたもとう🧍‍♀️💜
            #距離をたもとう #keepdistance #Yobikake"
          ></shareButtons>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import shareButtons from '~/components/shareButtons.vue'

export default {
  layout: 'main',
  components: {
    shareButtons
  }
}
</script>

<style lang="scss">
body {
  background-color: #f4f4f4;
  margin: 0;
  * {
    box-sizing: border-box;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;
  margin: 80px auto;
  justify-content: center;
}
.content-one {
  background-color: #fff;
  border-radius: 8px;
  margin: 20px;
  width: 270px;
  @media screen and (max-width: 670px) {
    margin: 24px 0;
    width: 100%;
  }
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
  text-align: center;
  margin: 24px 0 4px;
}
</style>
