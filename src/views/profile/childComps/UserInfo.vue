<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div> <h3 @click="userClick" v-if="isAuth">登录/注册</h3>
           <h3 v-else>{{name}} <button @click.prevent="logout">退出</button></h3> 
           </div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone" ><p v-if="isAuth">暂无绑定手机号</p> <p v-else>{{tel}}</p></slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
	export default {
    data(){
      return{//获取用户信息
        name:localStorage.getItem('name'),
        mail:localStorage.getItem('mail'),
        tel:localStorage.getItem('tel'),
        isAuth:"",//是否保持登录状态
      }
    },
	 methods:{
     userClick(){
       this.$router.push('/login')
     },
     //当点击退出按钮，将不保存登录状态
      logout:function()
      {
        this.isAuth="false";//修改登录状态
        localStorage.setItem('s',this.isAuth);
        this.$router.push('/profile');
      },
      getS(){
        this.isAuth = localStorage.getItem('s');
        return this.isAuth
      }
    }
   }
	
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);


  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
    width: 100px;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;
    width: 100px;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }

  button{
  float: right;
  margin-top: -3px;
  margin-left: -100px;
  margin-right: -100px;
  background-color:rgb(207, 240, 210);
  position: relative;
   color: rgb(117, 115, 223);
 border: none;
}
</style>
