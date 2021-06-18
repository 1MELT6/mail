<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" />
    <!-- 测试添加购物车 -->
    <!-- <ul>
        <li :key="index" v-for="(item,index) in $store.state.cartList">
    {{item}}
         </li>
    </ul> -->

    <!-- 轮播图 -->
    <detail-swiper :top-images="topImages" />
    <!-- 商品基本信息 -->
    <detail-base-info :goods="goods" />
    <!-- 商品店家信息 -->
    <detail-shop-info :shop="shop" />
    <!-- 商品参数信息 -->
    <detail-param-info :param-info="paramInfo" />
     <!-- 商品评论信息 -->
    <detail-comment-info :comment-info="commentInfo" />
    <!-- 驼峰 若属性和传入值一致，因为属性不分大小写，容易传错 -->
    <!-- 商品详情图片信息 -->
    <detail-goods-info :detail-info="detailInfo" />
    <!-- 推荐 -->
    <goods-list :goods="recommends" />
    <!-- 底部工具栏 -->
     <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- 返回顶部 -->
    <back-top />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      // 对象不能传空
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs:[0,1000,2000,3000]
    };
  },
  created() {
    // 1、保存传入的id
    this.iid = this.$route.params.iid;

    // 2、根据iid请求详情数据(network)
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 1、获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //2、获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3、导入店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      //4、保存商品的详情数据
      this.detailInfo = data.detailInfo;

      //5、获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6、取出评论信息
      // 判断是否有评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      //7、获取推荐数据(组件复用goodlist)
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    });
  },
  methods: {
    titleClick(index) {
      // console.log(index);
      window.scrollTo(0,this.themeTopYs[index])
    },
    addToCart() {
      // 1.获取购物车展示的信息
     const obj = {}
       obj.iid = this.iid;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.nowPrice;
      // 2.添加到购物车
      // (vuex管理,可以理解先把加入的购物车放入临沭存储)
      this.$store.commit("addCart", obj);
    },
  },
};
</script>

<style>
/* 頂部固定 */
.detail-nav {
  position: sticky;
  top: 0.01px;
  /* 顶部navbar的高度 */
  background-color: #fff;
  z-index: 9;
}
/* 底部蓋上 */
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% -44px);
}
</style>