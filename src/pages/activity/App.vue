<template>
  <div id="app">
    <div
      id="nav"
      v-if="false"
    >
      <router-link to="/index">index</router-link> |
      <router-link to="/page1">page1</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted () {
    this.screenWidth = document.documentElement.clientWidth || document.body.clientWidth
    // 获取视窗宽度
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    // 设置根html font-size
    let htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
