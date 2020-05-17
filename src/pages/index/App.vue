<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted () {
    this.screenWidth = document.documentElement.clientWidth || document.body.clientWidth

    window.addEventListener('resize', () => {
      let width = document.documentElement.clientWidth || document.body.clientWidth
      if (width === this.screenWidth) {
        return
      }
      window.location.reload()
    })

    // 获取视窗宽度
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    // 设置根html font-size
    let htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'
  }
}
</script>
<style>
</style>
