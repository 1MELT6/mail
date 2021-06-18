<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartCount }})</div>
    </nav-bar>
      <cart-list class="cart-list" :cart-list="cartList"></cart-list>
      <bottom-bar></bottom-bar>
  </div>
  
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'
export default {
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    // 封装为getter，方便后面调用，共享数据
    cartCount() {
      // return this.$store.state.cartList.length
      return this.$store.getters.cartCount;
    },
  },
};
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
 #cart {
    /*position: relative;*/
    height: 100vh;
  }

.cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>