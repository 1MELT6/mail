<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-active"></slot>
    <!-- <div :class="{ active: isActive }"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- 最好把属性写在div后包装 -->
    <!-- appvue插槽内容会覆盖这里，所以class就没了
  <slot :class="{active:isActive}" name="item-text"></slot> -->
    <!-- 不写死图片文字等  <img 
          src="MyVUE\bli\05路由\02-tabbar\src\assets\img\tarbar\天气.png"
          alt=""
        />
        <div>首页</div> -->
  </div>
</template>

<script>
export default {
  // 父传子，限制String类型,不用传死home
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:true,
      // path:'/home'
    };
  },
  computed: {
    // isActive(){
    //   //判断激活的path和字符串的path一不一样 一样为true
    //   // return this.$router.path.indexOf(this.path) !== -1
    //   return this.$router.path ===this.path
    // // this.$route.path.includes(this.path)
    // }
    // 以上实现不了激活状态变红
    isActive() {
      return this.$route.path === this.path ? true : false;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor} :{}
    }
  },
  methods: {
    itemClick() {
      // this.$router.replace(this.path)
      this.$router.replace(this.path).catch((error) => error);
    },
  },
};
</script>

<style>
/* 均等分并居中 */
.tab-bar-item {
  flex: 0.5;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
/* 图片设置 */
.tab-bar-item img {
  height: 30px;
  width: 30px;
  margin-top: 3px;
  /* 去除像素下面多出的三个像素 */
  vertical-align: middle;
}
/* .active {
  color: red;
} */
</style>