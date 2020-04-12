<template>
  <div class="logo">
    <nuxt-link to="/">
      <img src="~/assets/logo.svg" alt="Logo" />
    </nuxt-link>
    <h3><span>あなたの呼びかけから</span><span>はじめよう</span></h3>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  background-color: #fff;
  border-bottom: solid 8px #ffd04f;
  text-align: center;
  padding: 36px;

  img {
    width: 20%;
    min-width: 200px;
  }
  h3 {
    margin: 8px 0 0;
    span {
      display: inline-block;
    }
  }
}
</style>
