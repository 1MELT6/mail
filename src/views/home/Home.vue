<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
     </nav-bar>
    
     <home-swiper :banners="banners" />
    <!-- <recommend-view :recommends='recommends'/> -->
     <feature-view/>
     <ui>
       <li>test1李贝彩</li>
       <li>test2罗丽莎</li>
       <li>test3黎金妙</li>
       <li>test4</li>
       <li>test5</li>
       <li>test6</li>
       <li>test7</li>
       <li>test8</li>
       <li>test9</li>
       <li>test10</li>
       <li>test11</li>
       <li>test12</li>
       <li>test13</li>
       <li>test14</li>
       <li>test15</li>
       <li>test16</li>
       <li>test17</li>
       <li>test18</li>
       <li>test19</li>
       <li>test20</li>
       <li>test21</li>
       <li>test22</li>
       <li>test23</li>
       <li>test24</li>
       <li>test25</li>
       <li>test26</li>
       <li>test27</li>
       <li>test28</li>
       <li>test29</li>
       <li>test30</li>
       <li>test31</li>
       <li>test32</li>
       <li>test33</li>
       <li>test34</li>
       <li>test35</li>
       <li>test36</li>
       <li>test37</li>
       <li>test38</li>
       <li>test39</li>
       <li>test40</li>
       <li>test41</li>
       <li>test42</li>
       <li>test43</li>
       <li>test44</li>
       <li>test45</li>
       <li>test46</li>
       <li>test47</li>
       <li>test48</li>
       <li>test49</li>
       <li>test50</li>
       <li>test51</li>
       <li>test52</li>
       <li>test53</li>
       <li>test54</li>
       <li>test55</li>
       <li>test56</li>
       <li>test57</li>
       <li>test58</li>
       <li>test59</li>
       <li>test60</li>
       <li>test61</li>
       <li>test62</li>
       <li>test63</li>
       <li>test64</li>
       <li>test65</li>
       <li>test66</li>
       <li>test67</li>
       <li>test68</li>
       <li>test69</li>
       <li>test70</li>
       <li>test71</li>
       <li>test72</li>
       <li>test73</li>
       <li>test74</li>
       <li>test75</li>
       <li>test76</li>
       <li>test77</li>
       <li>test78</li>
       <li>test79</li>
       <li>test80</li>
       <li>test81</li>
       <li>test82</li>
       <li>test83</li>
       <li>test84</li>
       <li>test85</li>
       <li>test86</li>
       <li>test87</li>
       <li>test88</li>
       <li>test89</li>
       <li>test90</li>
       <li>test91</li>
       <li>test92</li>
       <li>test93</li>
       <li>test94</li>
       <li>test95</li>
       <li>test96</li>
       <li>test97</li>
       <li>test98</li>
       <li>test99</li>
       <li>test100</li>
     </ui>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeData} from 'network/home'
// 没有swiper的index文件
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from'./childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'
export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
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
      // console.log(res);
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