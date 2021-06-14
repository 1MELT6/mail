<template>
  <div class="back-top" @click="backTop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    methods:{
        backTop() {
            // 基本实现回到顶部
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style>
    .back-top{
        position: fixed;
        right: 10px;
        bottom: 60px;
    }

    .back-top img{
        width: 43px;
        height: 43px;
    }
</style>