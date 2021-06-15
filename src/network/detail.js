import{request} from './request'

export function getDetail(iid){
    return request({
        url:'./detail',
        params: {
            iid
        }
    })
}


// ES6写法,封装成一个对象/组件
// DetailBaseInfo 基本信息
export class Goods{
    constructor(ItemInfo, columns,services){
        this.title = ItemInfo.title
        this.desc = ItemInfo.desc
        this.newPrice = ItemInfo.price
        this.oldPrice = ItemInfo.oldPrice
        this.discount = ItemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = ItemInfo.lowNowPrice
    }
}

//店铺信息
export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }

}
// 参数信息
export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }