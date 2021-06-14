// default 只导出一个实例
import axios from 'axios'

// 这时候若是第三方过期 import修改导入
// 加入新第三方代码 然后相关代码包装到promise返回
// 其他正常使用

//面向home的网路请求
export function request(config){

        //  1、创建实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

        // 2、axios的拦截器（请求/相应）
     instance.interceptors.request.use(config =>{
        //  console.log(config);
        // 2.1请求拦截的作用
         //  1、config中的信息不符合服务器要求 多配置信息或信息转化
        // 2、每次发送请求时，在界面显示图标
        //3、某些网络请求（比如token），必修携带一些特殊信息。让其返回登录界面
         return config
     },err=>{
        //  没有返回config的话 说明拿不到被拦截 就会打印错误
         console.log(err);
     })

        // 2.1响应拦截
     instance.interceptors.response.use(res=>{
            // console.log(res);
            return res.data
     },err=>{
            console.log(err);
     })

    // 3、发送真正的网络请求
    //axios instance实例本身就是一个promise 所以直接返回
    return instance(config)

}
    



