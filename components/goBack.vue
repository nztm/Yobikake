<template>
  <div>
    <nuxt-link to="/" class="goback">← トップページに戻る</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.goback {
  background-color: #418fb5;
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
  box-shadow: 0 0 15px rgba(8, 28, 115, 0.2);
  &:hover {
    padding-left: 0;
  }
}
</style>
