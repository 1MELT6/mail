<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
     <h2>李贝彩</h2>
     <h2>李贝彩</h2>
     <h2>李贝彩</h2>
     <h2>李贝彩</h2>
     <h2>李贝彩</h2>
     <h2>李贝彩</h2>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
/* 双排图片 */
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>