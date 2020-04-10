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
          text="%E3%81%86%E3%81%A1%E3%81%A7%E9%81%8E%E3%81%94%E3%81%9D%E3%81%86%EF%BC%81%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%F0%9F%8F%A0%0a%23%E3%81%86%E3%81%A1%E3%81%A7%E9%81%8E%E3%81%94%E3%81%9D%E3%81%86%20%23stayhome%20%23Yobikake%0A"
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
