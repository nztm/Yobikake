<template>
  <section>
    <div>
      <div class="content">
        <div class="content-one">
          <div class="content-thumbnail orange">
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
          <div class="content-thumbnail green">
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
          <div class="content-thumbnail blue">
            <img src="~/assets/emoji/1f637.svg" alt="" />
          </div>
          <h3 class="content-title">人との距離をたもとう！</h3>
          <shareButtons
            url="keepdistance"
            text="💚🧍‍♂️人との距離をたもとう🧍‍♀️💜
 #距離をたもとう #keepdistance #Yobikake"
          ></shareButtons>
        </div>
        <div class="content-one">
          <div class="content-thumbnail red">
            <img src="~/assets/emoji/1f44f.svg" alt="" />
          </div>
          <h3 class="content-title">医療に携わる人へ感謝を！</h3>
          <shareButtons
            url="thankyou"
            text="医療に携わる人へ感謝を！👨‍⚕️👩‍🔬👏 #感謝を伝えよう #thankyou #Yobikake"
          ></shareButtons>
        </div>
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
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
  margin: 4vw auto;
  max-width: 1280px;
  justify-content: center;
  @media screen and (max-width: 670px) {
    padding: 24px;
  }
  @media screen and (max-width: 1360px) {
    max-width: 640px;
  }
}
.content-one {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(8, 28, 115, 0.2);
  margin: 20px;
  width: 280px;

  @media screen and (max-width: 720px) {
    margin: 24px 0;
    width: 100%;
  }
}
.content-thumbnail {
  padding: 36px;
  border-radius: 8px 8px 0 0;
  img {
    display: block;
    margin: auto;
    width: 40%;
  }
}
.content-title {
  text-align: center;
  margin: 24px 0 4px;
}

.orange {
  background-color: #ff8f57;
}
.red {
  background-color: #f74f4f;
}
.blue {
  background-color: #418fb5;
}
.green {
  background-color: #41b784;
}
</style>
