<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <!-- 驼峰 -->
    <detail-goods-info :detail-info="detailInfo"/>
    <detail-param-info :param-info="paramInfo"/>
    <detail-comment-info/>
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


import { getDetail, Goods, Shop,GoodsParam } from "network/detail";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      // 对象不能传空
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
    };
  },
  created() {
    // 1、保存传入的id
    this.iid = this.$route.params.iid;

    // 2、根据iid请求详情数据(network)
    getDetail(this.iid).then((res) => {
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
      this.detailInfo = data.detailInfo

      //5、获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    
        //6、取出评论信息
        // 判断是否有评论
        if(data.rate.cRate !==0){
            this.commentInfo = data.rate.list[0]
        }
    });
  },
};
</script>

<style>
/* 頂部固定 */
.detail-nav {
  position: sticky;
  top: 0.1px;
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