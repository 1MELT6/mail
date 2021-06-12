<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeData} from 'network/home'

export default {
  components:{
    NavBar
  },
  // 存储请求过来的临时数据
  data(){
    return{
      // 内容过多
      // result: null 
      banners:[],
      recommends:[]
      }
  },
  // 监听组件创建完发送请求
  created(){
    //1.请求多个数据,axios本身是promise,所以直接写then
    getHomeData().then(res =>{
      console.log(res);
      // 函数执行完毕变量res会被弹栈回收
      // res消失后 若无别的对象指向数据 则数据也会被回收
      // this.result = res;
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })

    //验证数据是否存在,promise异步操作
    // 下面执行完前面还没执行所以大概率输出为空
    // console.log(this.result);
    //通过devtools调试
  }
}
</script>

<style>
  .home-nav{
    background-color:rgb(33, 243, 138) ;
    /* background-color:var(--color-tint) ; */
    color:white
  }
</style>