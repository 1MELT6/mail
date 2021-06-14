<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         :key="item"
         class="tab-control-item"
         @click="itemClick(index)">
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles:{
        type:Array,
        default() {
            return []
        }
      }
    },
    data() {
      return {
          currentIndex:0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        // goods点击传递
          this.$emit('tabClick', index)
      }
    }
  }
</script>

<style >
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    border-bottom: 2px solid var(--color-tint);
   
    color: var(--color-high-text);
  }


   
</style>
