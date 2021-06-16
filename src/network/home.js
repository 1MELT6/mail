import {request} from "./request"

// 不直接在home写而是再进行一次封装
export function getHomeData(){
    return request({
        url:'/home/multidata'
    })
}
// 首页多个请求可以单独进行封装统一管理耦合降低
//home.vue面对home.js开发

export function getHomeGoods(type, page){
    return request({
        url:'/home/data',
        // 拼接
        params:{
            type,
            page
        }
    })
}