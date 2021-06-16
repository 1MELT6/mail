<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import Icon from "components/content/Icon/Icon.vue";
import SvgIcon from "components/content/Icon/svg.vue";

export default {
  name: "app",
  components: {
    MainTabBar,
    Icon,
    SvgIcon,
  },
};
</script>

<style>
/* 别名配置vue.config.js */
@import "assets/css/base.css";
/* @import "./assets/css/base.css"; */
</style>
