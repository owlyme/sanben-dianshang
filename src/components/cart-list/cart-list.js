import { Path, Router } from '../../router/index';
import { getDataset } from '../../utils/commom';
import { Toast } from '../../utils/sysApis';

import { deleteGoodInCart, saveGood, getShopCouponList } from '../../api/goodCrat'

function checkedAll(data, checked) {
  data.checked = checked;
  data.shopList.forEach(shop => {
    shop.orderList.forEach(order => {
      order.checked = !isWaitingReselected(order) && checked
    })
  });
  return data
}

function isWaitingReselected(data) {
  return !data.status
}

function getAllGood(arr) {
  return arr.reduce((acc, shop) => [...acc, ...shop.orderList.filter(i => !isWaitingReselected(i))], [])
}
const createCurrentCoverIndex = (shopIndex, orderIndex) => shopIndex + '-' + orderIndex


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    data: {
      type: Object,
      value: {
        brandName: '阿迪达斯',
        id: 1,
        logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopList: [{
          shopName: '杭州大悦城店',
          orderList: [{
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
          orderList: [{
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
  data: {
    show: false,
    isAllSelected: false,
    activeCoverIndex: '',
    couponList: [
      // {
      //   id: 1,
      //   goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      //   type: 0, // 0平台， 1店铺
      //   typeText: '平台礼品券',
      //   remindText: ' 部分个人护理商品',
      //   expired: '2020-12-30 23:59:59',
      //   status: 1, // 1 待领取 2 待使用
      //   couponMoney: 50,
      //   availableMoney: 200,
      //   remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      // }
    ]
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
    // 预览商店首页
    viewShop() {
      Router.push({
        url: Path.shopIndex
      })
    },
    // 预览商店列表
    viewShopAll(e) {
      let dataset = getDataset(e)
      console.log('viewShop', dataset)
      Router.push({
        url: Path.shopAll
      })
    },
    // 选择优惠券
    selectCoupon(e) {
      console.log('selectCoupon', )
      getShopCouponList({
        shopId: this.data.id
      }).then(res => {
        if (res.code === 200) {
          this.setData({
            couponList: res.data,
            show: true
          })
        }
      })
    },
    onCloseDialog() {
      this.setData({
        show: false
      })
    },
    onGetCoupon(e) {
      console.log('onGetCoupon', e)
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
      let { shop, order, shopIndex, orderIndex } = getDataset(e)
      console.log('selectedSingle', dataset)
      if (isWaitingReselected(order)) return
      let data = this.data.data
      let checked = data.shopList[shopIndex].orderList[orderIndex].checked || false
      data.shopList[shopIndex].orderList[orderIndex].checked = !checked



      data.checked = getAllGood(data.shopList).every((i) => i.checked)

      this.setData({
        data
      })

      this.onChange(order, !checked, !checked ? 'selected' : 'cancel')
    },

    // 显示遮罩层
    showCover(e) {
      let dataset = getDataset(e)
      console.log('showCover', dataset)
      let { shop, order, shopIndex, orderIndex } = getDataset(e)
      this.setData({
        activeCoverIndex: createCurrentCoverIndex(shopIndex, orderIndex)
      })

    },
    // 隐藏遮罩层
    hiddenCover() {
      this.setData({
        activeCoverIndex: ''
      })
    },
    // 跳转商品详情页面
    viewGoodDetail(e) {
      let { shopIndex, orderIndex } = getDataset(e)

      if (createCurrentCoverIndex(shopIndex, orderIndex) === this.data.activeCoverIndex) return;
      console.log('reselect', e)
      Router.push({
        url: Path.goodDetail
      })

      this.setData({
        activeCoverIndex: ''
      })
    },
    // 移入收藏
    saveGood(e) {
      let dataset = getDataset(e)
      console.log('saveGood', dataset)
      this.setData({
        activeCoverIndex: ''
      })
      this.triggerEvent('onSave', {...dataset })

      saveGood({
        ids: [dataset.order.id]
      }).then(res => {
        if (res.code === 200) {
          Toast.success('收藏成功')
        }
      })
    },
    // 删除
    removeGood(e) {
      let dataset = getDataset(e)
      console.log('removeGood', dataset)
      let data = this.data.data
      let { shop, order, shopIndex, orderIndex } = getDataset(e)

      deleteGoodInCart({
        ids: [order.id]
      }).then(res => {
        if (res.code === 200) {
          shop.orderList.splice(orderIndex, 1)
          data.shopList[shopIndex] = shop
          this.setData({
            data,
            activeCoverIndex: ''
          })
          this.onChange(order, false, 'delete')
          Toast.success('删除成功')
        }
      })

    },
    // 修改订单规格
    swicthOrderModel(e) {
      let dataset = getDataset(e)
      console.log('swicthOrderModel', dataset)
    },

    onGoodNumberChange(e) {
      let dataset = getDataset(e);
      console.log('onGoodNumberChange', dataset);
      let data = this.data.data;
      let { shop, order, shopIndex, orderIndex } = getDataset(e);
      order.number = e.detail;
      shop.orderList[orderIndex] = order;
      data.shopList[shopIndex] = shop;
      this.setData({
        data
      })
      if (order.checked) {
        this.onChange(order, true)
      }
    },
    reselect(e) {
      let dataset = getDataset(e)
      console.log('reselect', dataset)
      let data = this.data.data
      Router.push({
        url: Path.goodDetail
      })
    },

    // 商品的任一属性变化时
    onChange(order, checked, actionType) {
      let orderList = Array.isArray(order) ? order : [order]
      this.triggerEvent('onChange', { orderList, checked, actionType })
    },

  }

});