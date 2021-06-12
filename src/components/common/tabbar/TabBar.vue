<template>
  <div id="tab-bar">
    <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tarbar/天气.png" alt="" />
      首页
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tarbar/天气.png" alt="" />
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tarbar/天气.png" alt="" />
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tarbar/天气.png" alt="" />
      <div>我的</div>
    </div>-->
   <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  /* 水平分布 */
  display: flex;
  background-color: #f6f6f6;
  /* 底部显示 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 小阴影  x,y透明度*/
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}

</style>