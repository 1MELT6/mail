<template>
  <div id="pay">
    <form action="">
      <div class="base">
        <h2>用户订单基本信息：</h2>
        <p>用户名: {{ name }}</p>
        <p>电话号码: {{ tel }}</p>
        <p>邮箱: {{ mail }}</p>
        <p>商品详情(尚未细分)</p> 
        <p>{{$store.getters.cartList}}</p>
      </div>
      <h3>支付方式</h3>
      <ul class="item_box">
        <!--取得一个DataTable-->

        <li>
          <label
            ><input
              name="payment_id"
              type="radio"
              onclick="PaymentAmountTotal(this);"
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
              onclick="PaymentAmountTotal(this);"
              value="3"
            /><input name="payment_price" type="hidden" value="0.00" />支付宝

            <em>手续费：0.00元</em></label
          >
        </li>
      </ul>
      <h3 class="bar_tit">配送方式</h3>
      <ul class="item_box">
        <!--取得一个DataTable-->

        <li>
          <label
            ><input
              name="express_id"
              type="radio"
              onclick="FreightAmountTotal(this);"
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
              onclick="FreightAmountTotal(this);"
              value="2"
              datatype="*"
              sucmsg=" " /><input
              name="express_price"
              type="hidden"
              value="14.00" />韵达快递
            <em>费用：14.00元</em><span class="Validform_checktip"></span
          ></label>
        </li>
      </ul>
      <h3 class="bar_tit">结算信息</h3>
      <div>
        <div class="left">
          <h4>订单留言<span>字数控制在100个字符内</span></h4>
          <textarea
            name="message"
            class="input"
            style="width: 250px; height: 35px"
          ></textarea>
        </div>

        <div class="right" style="text-align: right; line-height: 40px">
          商品件数：<font color="#FF0000">1</font> 件 商品金额：<font
            color="#FF0000"
            >￥<label id="goods_amount">5500</label></font
          >
          + 运费：<font color="#FF0000"
            >￥<label id="express_fee">0.00</label></font
          >
          + 支付手续费：<font color="#FF0000"
            >￥<label id="payment_fee">0.00</label></font
          >
          <br />
          <b class="font18"
            >应付总金额：
              ￥<label id="order_amount">100</label></font
            ></b
          >
        </div>
      </div>

      <div class="line20"></div>
      <div class="right">
        <input
          id="btnSubmit"
          name="btnSubmit"
          type="submit"
          value="确认提交"
          class="btn btn-success marL10"
        />
      </div>
      <div class="clear"></div>
    </form>
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
    getInfo() {
      return this.$store.getters.cartList.title;
    },
  },
};
</script>

<style>
#pay {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #3081eb90;
}

.base h2 {
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}

.base p {
  padding-bottom: 5px;
}
</style>