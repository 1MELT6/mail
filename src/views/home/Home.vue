<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners" />
    <!-- <recommend-view :recommends='recommends'/> -->
    <feature-view />
    <tab-control class="home-tab-control" 
    :titles="['流行', '新款', '精选']"
     @tabClick="tabClick" />
    <good-list :goods="showGoods"/>
   
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from 'components/content/goods/GoodsList'
 
// 额为组件 方法等
import { getHomeData, getHomeGoods } from "network/home";

// 没有swiper的index文件
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'

// 子组件
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView";
import FeatureView from "./childrenComps/FeatureView";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList
  },
  // 存储请求过来的临时数据
  data() {
    return {
      // 内容过多
      // result: null
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop'
    }
  },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
  // 监听组件创建完发送请求
  created() {
    //1.请求多个数据
    this.getHomeData()
    // 2、请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 事件监听相关方法

    // 监听pop\news切换
    tabClick(index){
        switch (index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
    },

    // 网络请求相关方法

    // axios本身是promise,所以直接写then
    getHomeData() {
      getHomeData().then((res) => {
        // console.log(res);
        // 函数执行完毕变量res会被弹栈回收
        // res消失后 若无别的对象指向数据 则数据也会被回收
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })

      //验证数据是否存在,promise异步操作
      // 下面执行完前面还没执行所以大概率输出为空
      // console.log(this.result);
      //通过devtools调试
    },
    getHomeGoods(type){
         const page = this.goods[type].page + 1
         getHomeGoods("pop", 1).then((res) => {
          // 如何把数组放到另一个数组 1、遍历 2、push
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
    })
    }
  },
};
</script>

<style>
.home-nav {
  background-color: rgb(33, 243, 138);
  /* background-color:var(--color-tint) ; */
  color: white;
  /* 固定nav */
   position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;
}
/* 固定good */
.home-tab-control{
/*两个要混合使用*/
position: sticky;
top: 43px;
/* 顶部navbar的高度 */
z-index: 9;
}
</style>