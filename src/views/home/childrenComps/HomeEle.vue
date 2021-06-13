<template>
  <div>
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, id) in banners" :key="id">
        <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

vue.use(ElementUI)

export default {

}
</script>

<style>

</style>