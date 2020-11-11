import PagePathes from '../../router/index'
import { getDataset } from '../../utils/commom';

function checkedAll(data, checked) {
  data.checked = checked;
  data.shopList.forEach(shop => {
    shop.orderList.forEach(order => {
      order.checked = checked
    })
  }
  );
  return data
}

function getAllGood(arr) {
  return arr.reduce((acc, shop) => [...acc, ...shop.orderList], [])
}

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    data: {
      type: Object,
      value: {
        brandName: '阿迪达斯',
        logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopList: [
          {
            shopName: '杭州大悦城店',
            orderList: [
              {
                id: 12,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              },
              {
                id: 12,
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
                id: 12,
                number: 12,
                pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
                model: '红白字母',
                price: 10,
                totalPrice: 120,
                name: '阿迪达斯官网 adidas 5T Nec…'
              },
              {
                id: 12,
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
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    isAllSelected: false,
    showCoverIndex: ''
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  created() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    init() {
      
    },
    // 全选
    selectedAll(e) {
      let dataset = getDataset(e)
      console.log('selectedAll', dataset)
      let data = this.data.data
      let checked = data.checked
      this.setData({
        data: checkedAll(data, !checked)
      })
     

      let allOrder = getAllGood(data.shopList)
     
      this.onChange(allOrder, !checked, !checked ? 'selectedAll' : 'cancelAll')
    },
    // 单选
    selectedSingle(e) {
      let dataset = getDataset(e)
      console.log('selectedSingle', dataset)
      let data = this.data.data
      let {shop, order, shopIndex, orderIndex} = getDataset(e)
      let checked = data.shopList[shopIndex].orderList[orderIndex].checked || false
      data.shopList[shopIndex].orderList[orderIndex].checked = !checked

      data.checked = getAllGood(data.shopList).every((i) => i.checked)
      
      this.setData({
        data
      })

      this.onChange(order, !checked, !checked ? 'selected' : 'cancel')
    },
    hiddenCover() {
      this.setData({
        showCoverIndex: ''
      })
    }, 
    // 显示遮罩层
    showCover(e) {
      let dataset = getDataset(e)
      console.log('showCover', dataset)
      let {shop, order, shopIndex, orderIndex} = getDataset(e)
      this.setData({
        showCoverIndex: shopIndex + '-' + orderIndex
      })
    },
    // 移入收藏
    saveGood(e) {
      let dataset = getDataset(e)
      console.log('saveGood', dataset)
      this.setData({
        showCoverIndex: ''
      })
    },
    // 删除
    removeGood(e) {
      let dataset = getDataset(e)
      console.log('removeGood', dataset)
      let data = this.data.data
      let {shop, order, shopIndex, orderIndex} = getDataset(e)
      shop.orderList.splice(orderIndex, 1)
      data.shopList[shopIndex] = shop
      this.setData({
        data,
        showCoverIndex: ''
      })

      this.onChange(order, false, 'delete')
    },
    // 修改订单规格
    swicthOrderModel(e) {
      let dataset = getDataset(e)
      console.log('swicthOrderModel', dataset)
    },
    // 预览商店
    viewShop(e) {
      let dataset = getDataset(e)
      console.log('viewShop', dataset)
    },
    // 商品的任一属性变化时
    onChange(order, checked, actionType) {
      let orderList = Array.isArray(order) ? order : [order]
      this.triggerEvent('onChange', {orderList, checked, actionType })
    }
  }

});