import Vue from 'vue'
import VueRouter from 'vue-router'

// 5.懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart= () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')



// 1.安装插件
Vue.use(VueRouter)


// 2、创建router 6.配置映射关系 7.回到app.vue 添加router-view

const routes = [
    { //重定向
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    }
 ]

const router = new VueRouter({
    routes,
    mode:'history'
})

// 3、导出
export default router

// 4、到main.js挂载