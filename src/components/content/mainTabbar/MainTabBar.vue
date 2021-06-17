<template>
   <tab-bar>
     <!-- activeColor="green" -->
      <tab-bar-item path="/home"  >
        <!-- 具名插槽 -->
     <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
 
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" alt="">
      <img slot="item-active" src="~assets/img/tabbar/shopcart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
     <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-active" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
 
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>