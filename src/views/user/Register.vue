<template>
  <div id="background">
      <div id="contain">
        <h1>Register</h1>
        <div class="form">
          用户名：<input type="text" v-model.trim="name"><br/>
          密码：<input type="password" v-model.trim="password"><br/>
          邮箱：<input type="email" v-model.trim="mail" @blur="check"><br/>
          手机号：<input type="tel" v-model.trim="tel"><br/>
        </div>
        <button @click.prevent="handlefinish">提交</button>
      </div>
    </div>
</template>

<script>
export default {
    name:'register',
    props: {
    msg: String
  },
  data(){
    return{
      name:"",
      password:"",
      mail:"",
      tel:"",
      verify:""

  };
  },methods:{
    check(){
         var verify = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
                if (!verify.test(this.mail)) {
                    // alert('格式错误,重新输入')
        this.$toast.show("格式错误,重新输入",2000)
                    
                } else{
                    // alert('格式正确，进行下一步操作')
        this.$toast.show("格式正确，进行下一步操作",2000)

                }      
    },
  //点击完成按钮触发handlefinish
    handlefinish:function()
    {
      if(localStorage['name']===this.name)
      {
        // alert("用户名已存在");//如果用户名已存在则无法注册
        this.$toast.show("用户名已存在",2000)

      }
      else if(this.name==='')
      {
        // alert("用户名不能为空");
        this.$toast.show("用户名不能为空",2000)
        
      }
      // else if(/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(this.mail)){
      //   alert("邮箱格式错误，需包含@")
      // }
      else{//将新用户信息存储到localStorage
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        localStorage.setItem('mail',this.mail);
        localStorage.setItem('tel',this.tel);
        localStorage.setItem('s',"false");
        // alert("注册成功");
        this.$toast.show("注册成功",2000)
        this.$router.replace('/Login');//完成注册后跳转至登录页面
      }
    }
  }
};
</script>

<style scoped>
 #background{
   width: 100%;
    height: 100%;
    /* background: url("../assets/bg2.jpg"); */
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    
}
#contain{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#a6c9f890;;
  text-align: center;
 
}
#contain h1{
color: rgb(133, 138, 141);
}
.form{
  
color: rgb(133, 138, 141);
  margin-left: 10%;
  margin-top: 60px;
  font-size: 20px;
  text-align: left;
}

input,textarea{
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
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;

}

</style>
