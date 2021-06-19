<template>
  <div id="background">
    <div class="container">
        <form action="">
          <h1>Login</h1>
          <div class="form">
              <div class="item">
                <label>用户名：</label><input type="text" name="username" v-model.trim="name" placeholder="请输入用户名">
                <!-- v-model把输入的值传输给name变量 -->
                <br/>
              </div>
              <div class="item">
                <label>密码：</label><input type="password" name="password" v-model.trim="password" placeholder="请输入密码">
                <br/>
              </div>   
              <!-- <div class="keep">
                <input @click="handlesave" id="yes" type="radio" value="0" >
                <label for="yes">保持登录状态</label>
              </div>           -->
          </div>          
        </form>
              <button  type="submit" @click.prevent="handlelogin">登录			</button>
              <!-- v-on点击按钮触发handlelogin方法 -->
              <button  @click.prevent="handleregister" >注册</button>
          <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      name:"",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      password:"",//密码
      s:"false",//false为不保存登录
    };
  },
  methods:{
    handlelogin:function()
    {
      if(this.name===localStorage['name'] && this.password===localStorage['password'])
       { 
         this.$router.replace('/home');//如果输入的名字以及密码正确路由跳转至个人页面
          alert('登录成功进入首页');
       } 
       else if(this.name==='')//名字为空
       {
         alert('用户名不为空');
       }
       else if(this.password==='')//密码为空
       {
         alert('密码不为空');
       }
      else{
        alert('账号不存在，请注册后登录');//查无此号
        }
    },
    handleregister:function()
    {
      this.$router.replace('/register')//点击注册按钮，跳转至注册页面
    },
    // handlesave:function(){
    //   this.s="true";//修改登录状态为true
    //   localStorage.setItem('s',this.s);
    //   console.log(localStorage.s);
    // }
  }
};
</script>


<style  scoped>
  #background{
    width: 100%;
    height: 100%;
    /* background: url("../assets/bg2.jpg"); */
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.container{
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* background:var(--color-tint); */
  background:#3081eb90;
  text-align: center;
  padding-top: 50px;
  

}
.container h1{
  color: aliceblue;
  margin-left: 20px;
}
.item {
  color: white;
  margin-left: 15%;
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
}
.item label{

  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input{
  margin-left: -4px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 10px/100% Verdana,Tahoma,sans-serif;
  width: 250px;
  height: 30px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button{
  position: relative;
  height: 33px;
  width: 100px;
  background: rgba(25, 10, 236, 0.425);
  border-radius: 10px;
  margin-top: 18px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
  margin-right: 10px;

}
.keep{
  color: white;
}
.keep input{
  width: 15px;
  height: 15px;
  margin-top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}



</style>
