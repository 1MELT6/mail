<template>
  <div>
       <!-- //导航 -->
      <nav-bar>
          <div slot="center" class="title">
              <div class="title-item" v-for="(item,index) in titles" :key="index">
                  {{item}}
              </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
     components:{
         NavBar
     },
     data(){
         return {
             titles:['商品','参数','评论','推荐']
         }
     }
}
</script>

<style>
.title{
    display: flex;
    font-size: 15px;
}

.title-item{
    flex:1
}

</style>