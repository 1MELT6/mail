<template>
  <div>
 <form name="order_form" id="order_form" url="/tools/submit_ajax.ashx?action=order_save">  
    <h3 class="bar_tit">1、收货信息</h3>  
    <div class="form_box">  
      <dl>  
        <dt>收货人姓名：</dt>  
        <dd><input name="accept_name" id="accept_name" type="text" class="input txt wide" value="发vdxgsd" datatype="s2-20" sucmsg=" "><span class="Validform_checktip">*收货人姓名</span></dd>  
      </dl>  
      <dl>  
        <dt>收货地址：</dt>  
        <dd><input name="address" id="address" type="text" class="input txt" value="广东省佛山市" datatype="*2-100" sucmsg=" " style="width:300px;"><span class="Validform_checktip">*收货人的详细地址</span></dd>  
      </dl>  
      <dl>  
        <dt>邮政编码：</dt>  
        <dd><input name="post_code" id="post_code" type="text" class="input txt"><span class="Validform_checktip">所在地区的邮政编码，非必填</span></dd>  
      </dl>  
      <dl>  
        <dt>手机号码：</dt>  
        <dd><input name="mobile" id="mobile" type="text" class="input txt" value="13256202154" datatype="m" sucmsg=" "><span class="Validform_checktip">*收货人的手机号码</span></dd>  
      </dl>  
      <dl>  
        <dt>联系电话：</dt>  
        <dd><input name="telphone" id="telphone" type="text" class="input txt" value=""><span class="Validform_checktip">收货人的联系电话，非必填</span></dd>  
      </dl>  
    </div>  
      
    <div class="line20"></div>  
    <h3 class="bar_tit">2、支付方式</h3>  
    <ul class="item_box">  
       <!--取得一个DataTable-->  
        
      <li>  
          
        <label><input name="payment_id" type="radio" onclick="PaymentAmountTotal(this);" value="1"><input name="payment_price" type="hidden" value="0.00">货到付款  
          
        <em>手续费：0.00元</em></label>  
      </li>  
        
      <li>  
          
        <label><input name="payment_id" type="radio" onclick="PaymentAmountTotal(this);" value="2"><input name="payment_price" type="hidden" value="0.00">账户余额  
          
        <em>手续费：0.00元</em></label>  
      </li>  
        
      <li>  
          
        <label><input name="payment_id" type="radio" onclick="PaymentAmountTotal(this);" value="3"><input name="payment_price" type="hidden" value="0.00">支付宝  
          
        <em>手续费：0.00元</em></label>  
      </li>  
        
      <li>  
          
        <label><input name="payment_id" type="radio" onclick="PaymentAmountTotal(this);" value="4" datatype="*" sucmsg=" "><input name="payment_price" type="hidden" value="0.00">财付通  
          
        <em>手续费：0.00元</em><span class="Validform_checktip"></span></label>  
      </li>  
        
    </ul>  
      
    <div class="line20"></div>  
    <h3 class="bar_tit">3、配送方式</h3>  
    <ul class="item_box">  
       <!--取得一个DataTable-->  
        
      <li>  
          
        <label><input name="express_id" type="radio" onclick="FreightAmountTotal(this);" value="1"><input name="express_price" type="hidden" value="20.00">顺丰快递  
          
        <em>费用：20.00元</em></label>  
      </li>  
        
      <li>  
          
        <label><input name="express_id" type="radio" onclick="FreightAmountTotal(this);" value="2" datatype="*" sucmsg=" "><input name="express_price" type="hidden" value="14.00">韵达快递  
          
        <em>费用：14.00元</em><span class="Validform_checktip"></span></label>  
      </li>  
        
    </ul>  
      
    <div class="line20"></div>  
    <h3 class="bar_tit">4、商品清单</h3>  
    <table width="938" border="0" align="center" cellpadding="8" cellspacing="0" class="cart_table">  
      <tbody><tr>  
        <th width="64"></th>  
        <th align="left">商品名称</th>  
        <th width="110" align="center">颜色</th>  
        <th width="80" align="center">积分</th>  
        <th width="80" align="center">单价</th>  
        <th width="80" align="center">数量</th>  
        <th width="80" align="center">优惠</th>  
        <th width="100" align="center">金额小计</th>  
        <th width="100" align="center">积分小计</th>  
      </tr>  
        
      <tr>  
        <td><a target="_blank" href="/goods/show-63.html"><img src="/upload/201505/04/201505041444321122.jpg" class="img"></a></td>  
        <td><a target="_blank" href="/goods/show-63.html">卡帝仕正品超薄运动手表防水手表户外手表大表盘男表时装表</a></td>  
        <!--颜色-->  
        <td align="center"><input name="goods_color" type="hidden" value=""></td>  
  
        <td align="center">  
            
          +  
            
          10  
        </td>  
        <td align="center">￥5500.00<input name="goods_price" type="hidden" value="5500.00"></td>  
        <td align="center">1</td>  
        <td align="center">￥<label name="discount_amount">5500</label></td>  
        <td align="center"><font color="#FF0000" size="2">￥<label name="real_amount">5500</label></font></td>  
        <td align="center">  
          <font color="#FF0000" size="2">  
              
            +  
              
            <label name="point_count">10</label>  
            </font>  
        </td>  
        <td><input id="car_id" name="car_id" type="hidden" value="63"></td>  
      </tr>  
        
    </tbody></table>  
      
    <div class="line20"></div>  
    <h3 class="bar_tit">5、结算信息</h3>  
    <div>  
      <div class="left">  
        <h4>订单留言<span>字数控制在100个字符内</span></h4>  
        <textarea name="message" class="input" style="width:250px;height:35px;"></textarea>  
      </div>  
        
      <div class="right" style="text-align:right;line-height:40px;">  
        商品件数：<font color="#FF0000">1</font> 件     总积分：<font color="#FF0000">10</font> 分     商品金额：<font color="#FF0000">￥<label id="goods_amount">5500</label></font>   +   运费：<font color="#FF0000">￥<label id="express_fee">0.00</label></font>   +   支付手续费：<font color="#FF0000">￥<label id="payment_fee">0.00</label></font>  
          
        <br>  
        <b class="font18">应付总金额：<font color="#FF0000">￥<label id="order_amount">5500</label></font></b>  
      </div>  
    </div>  
  
    <div class="line20"></div>  
    <div class="right">  
      <a class="btn" href="/shopping/cart.html">返回修改</a>  
        
      <input id="btnSubmit" name="btnSubmit" type="submit" value="确认提交" class="btn btn-success marL10">  
        
    </div>  
    <div class="clear"></div>  
    </form>  

  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
    background-color: lightgray;
    height:100%;
    -webkit-display:flex;
    display:flex;
    -webkit-align-items:center;
    align-items:center;
    -webkit-justify-content:center;
    justify-content:center;
    position: relative;
  }
  .title{
    position: absolute;left: 22%;top: 3%;
  }
  div.box_1{
    background-color: white;width: 60%;left: 50%;margin-top: 6%;margin-bottom: 5%;
  }
  .title_1{
    font-size: 15px;font-weight: bold;margin-top: 30px;margin-left: 30px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .box_2{
    width: 90%;height: 100%; border:1px solid #F0F0F0;margin-left: 30px;margin-top: 5px;
  }
  .box_2 >>> .el-form-item__label{
    font-size: 13px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-form >>> .el-input__inner{
    height: 35px;
  }
  .el-input{
    width: 40%;height: 15px;
  }
  .box_2 >>> .el-form-item{
    margin-bottom: 15px;
  }
  .input{
    margin-left: 7%;margin-top: 30px;margin-bottom: 30px;
  }
  .btn{
    text-align: center;margin-top: 30px;margin-bottom: 30px;
  }
  .box_2 >>> .el-form-item__error{
    font-size: 5px;padding-top: 0;
  }
  .box_2 >>> .el-input__inner{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .icon{
    width: 6%;vertical-align:middle;
  }
</style>