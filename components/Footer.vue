<template>
  <div>
    <footer>
      <nav class="footer-menu">
        <ul class="footer-menu-list">
          <li><nuxt-link to="/about">このサイトについて</nuxt-link></li>
          <li>
            <a
              href="https://github.com/nztm/yobikake.com/blob/master/CONTRIBUTORS.md"
              target="_blank"
              rel="noopener"
              >Contributors</a
            >
          </li>
          <li>
            <a
              href="https://github.com/nztm/Yobikake"
              target="_blank"
              rel="noopener"
              >GitHub</a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/yobikakecom"
              target="_blank"
              rel="noopener"
              >Twitter</a
            >
          </li>
        </ul>
      </nav>
      <p class="copyright">
        &copy; 2020 Yobikake |
        <a href="https://twemoji.twitter.com/" target="_blank" rel="noopener"
          >Twemoji CC-BY 4.0</a
        >
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
footer {
  padding: 2.4em;
  background-color: #418fb5;
  color: #fff;
  text-align: center;
  a {
    color: #fff;
    text-decoration: none;
  }
}
.footer-menu-list {
  list-style: none;

  padding: 0;
  li {
    display: inline;
    padding: 8px;
  }
}
</style>
