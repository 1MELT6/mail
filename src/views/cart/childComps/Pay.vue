<template>
  <div id="pay">
    
      <div class="sh">
        <h2 style=" text-align:center;">用户订单基本信息</h2></br>
        <p>用户名: {{ name }}</p>
        <p>电话号码: {{ tel }}</p>
        <p>邮箱: {{ mail }}</p>
        <!-- <p>商品详情(尚未细分)</p>  -->
        <!-- <p>{{$store.getters.cartList}}</p> -->
      </div>
     
     <div class="shh">
      <ul class="it">
      <h3 >支付方式</h3>
       <li>
          <label
            ><input
              name="payment_id"
              type="radio"
           
              value="1"
            /><input name="payment_price" type="hidden" value="0.00" />货到付款
            <em>手续费：0.00元</em></label
          >
        </li>
        <li>
          <label
            ><input
              name="payment_id"
              type="radio"
              value="3"
            /><input name="payment_price" type="hidden" value="0.00" />支付宝

            <em>手续费：0.00元</em></label
          >
        </li>
      </ul></br>
      
      <ul class="itt">
        <h3 class="bar_tit">配送方式</h3>
        <!--取得一个DataTable-->

        <li>
          <label
            ><input
              name="express_id"
              type="radio"
              value="1"
            /><input name="express_price" type="hidden" value="20.00" />顺丰快递

            <em>费用：20.00元</em></label
          >
        </li>

        <li>
          <label
            ><input
              name="express_id"
              type="radio"
              value="2"
              datatype="*"
              sucmsg=" " /><input
              name="express_price"
              type="hidden"
              value="14.00" />韵达快递
            <em>费用：14.00元</em></label>
        </li>
      </ul></br>
      <h3 class="bar_tit">结算信息</h3>
      <div class="bas">
        

        <div class="ri" >
          商品件数：<font color="#FF0000">0</font> 件 <br />
           商品金额：<font color="#FF0000" >￥<label id="goods_amount">0.00 <br /></label></font>
          + 运费：<font color="#FF0000" >￥<label id="express_fee">0.00 <br /></label></font>
          + 支付手续费：<font color="#FF0000" >￥<label id="payment_fee">0.00 <br /></label></font >
          <b class="font18"
            >应付总金额：
              ￥<label id="order_amount" style="color:#F00">0.00</label> </font
            ></b
          >
        </div>
      </div>
        <div >
          <h4>订单留言</h4>
          <textarea
            name="message"
            class="input"
            style="width: 250px; height: 35px"
          ></textarea>
        </div>
      <!-- <div class="line20"></div> -->
      <button class="bu">确认提交</button>
       <button @click="bk" class="buu" >返回购物车</button>
       
      </div>
      </div>
     
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    },
  },
  data() {
    return {
      //获取用户信息
      name: localStorage.getItem("name"),
      mail: localStorage.getItem("mail"),
      tel: localStorage.getItem("tel"),
    };
  },
  methods: {
   bk(){
     this.$router.push('./cart')
   }
}
  
}
</script>

<style>
#pay {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin:0 auto;
  background:  #a6c9f890;
  padding:10px 30px;
  
}
.ri{
  padding-left: 15px;
}
.base h2 {
  padding-top: 10px;
  /* padding-bottom: 20px; */
  text-align: center;
  padding-left: 15px;
}
.it{
    list-style: none; /*去掉小圆点*/
    padding-top: 140px;
}
 .itt{
    list-style: none; /*去掉小圆点*/
 } 
.sh{  
  /* padding-top: 10px; */
  float:left;
   background: #f7f7f7; 
   width:260px;
   height:130px;
   margin:0 auto;
   border-radius:10px;
   padding-left: 10px;
}  
.sh:hover{
	  -webkit-box-shadow: #ccc 0px 10px 10px;  
   -moz-box-shadow: #ccc 0px 10px 10px;  
   box-shadow: #ccc 0px 10px 10px;  }
 .bu{
	            background-color:#ffffff;
	            color:rgb(235, 25, 247);
	            width: 80px;
	            height: 30px;
	            border:0;
	            font-size: 16px;
	            box-sizing: content-box;				
                border-radius: 5px;
            }
  .bu:hover{
	            background-color: #badaba;
            }
  .buu{
	            background-color:var(--color-tint);
	            color:white;
	            width: 80px;
	            height: 30px;
              margin-left:20px;
	            border:0;
	            font-size: 16px;
	            box-sizing: content-box;				
                border-radius: 5px;
            }
  .buu:hover{
	            background-color: #a54b4a;
            }

</style>