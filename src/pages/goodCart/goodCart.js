// 全局app实例
import {boundingClientRect} from '../../utils/sysApis'
import PagePathes from '../../router/index'
const App = getApp();

function calcShoppingListTotalPrice(shoppingList) {
  return shoppingList.reduce((acc, {price, number}) => acc + price * number, 0)
}
Page({
  data: {
    scrollViewHeight: 400,
    isAllSelected: false,
    isEdit: false,
    address:'213213',
    shoppingList: [],
    shoppingListTotalPrice: 0,
    orderList: [
      {
        brandName: '阿迪达斯',
        logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopList: [
          {
            shopName: '杭州大悦城店',
            orderList: [
              {
                id: 1,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              },
              {
                id: 2,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              }
            ]
          },
          {
            shopName: '杭州大悦城店1',
            orderList: [
              {
                id: 3,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              },
              {
                id: 4,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              }
            ]
          },
        ]
      },
      {
        brandName: '阿迪达斯',
        logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopList: [
          {
            shopName: '杭州大悦城店',
            orderList: [
              {
                id: 5,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              },
              {
                id: 6,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              }
            ]
          },
          {
            shopName: '杭州大悦城店1',
            orderList: [
              {
                id: 8,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              },
              {
                id: 9,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              }
            ]
          },
        ]
      }
    ]
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
    this.getDom()
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    let submit = await boundingClientRect('#submit');

    console.log(res);
    let scrollViewHeight = App.globalData.windowHeight - res.target_top - submit.target_height
    this.setData({
      scrollViewHeight
    });
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  scrollToLower() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  scrollToUpper() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  onScroll() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  setAddress() {

  },
  toEdit() {
    this.setData({
      isEdit: !this.data.isEdit
    }) 
  },
  onOrderChange(e) {
    console.log('onOrderChange', e)
    let {checked, orderList} = e.detail
    let shoppingList = this.data.shoppingList
    
    if (checked) {
      while(orderList.length) {
        let good = orderList.shift()
        let index = shoppingList.findIndex((item) => item.id === good.id)
        if (~index) {
          // 原商品存在的情况下
          shoppingList[index] = good
        } else {
          // 原商品不存在的情况下
          shoppingList.push(good)
        }
      }
    } else {
      // 取消选中或删除
      shoppingList = shoppingList.filter(order => 
        !orderList.find((item) => item.id === order.id)
      )
    }
    let shoppingListTotalPrice = calcShoppingListTotalPrice(shoppingList)
    this.setData({
      shoppingList,
      shoppingListTotalPrice,
    })
  },

  selectedAll() {
    this.setData({
      isAllSelected: !this.data.isAllSelected
    }) 
  },
  submit(e) {
    console.log(this.data.shoppingList)
  }
});

