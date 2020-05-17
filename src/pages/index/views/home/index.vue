<template>
  <div class="home">首页</div>
</template>

<script>
export default {
  data() {
    return {
      phoneHeight: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>

 <style lang="scss" scoped>
@import "~styles/index.scss";
*html {
  background: linear-gradient(
    90deg,
    rgba(131, 29, 194, 1) 0%,
    rgba(176, 36, 161, 1) 52%,
    rgba(245, 47, 91, 1) 100%
  );
}
img {
  width: 100%;
  height: auto;
  width: auto\9; /* ie8 */
  display: block;
  -ms-interpolation-mode: bicubic;
}
</style>
