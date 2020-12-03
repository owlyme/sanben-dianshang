import { Router, Path } from '../../router/index';
import {Toast, boundingClientRect} from '../../utils/sysApis';
import { getGoodCratList, deleteGoodInCart, saveGood } from "../../api/goodCrat"
import { storageKeyMap, getLocalStorage } from '../../utils/localStorage';

const App = getApp();
// 计算购物清单的统计值
function calcShoppingListTotal(shoppingList) {
  return shoppingList.reduce((acc, {price, number}) => ({
    price: acc.price + price * number,
    number: acc.number + number,
    goodCategoryNumber: acc.goodCategoryNumber + 1,
    discountedPrices: acc.discountedPrices
  }), {
    price: 0,
    number: 0,
    goodCategoryNumber: 0,
    discountedPrices: 0
  });
}
function isWaitingReselected(data) {
  return !data.status 
}
// 统一选择状态
function selectAll(orderList, checked) {
  orderList.forEach((item) => {
    item.checked = checked;
    item.shopList.forEach(({orderList})=> {
      orderList.forEach(item=> {
        item.checked = !isWaitingReselected(item) && (checked || false);
      });
    });
  });
  return orderList;
}
// 将列表扁平化
function getAllGood(orderList) {
  return orderList
    .reduce((acc, {shopList}) => [...acc, ...shopList], [])
    .reduce((acc, {orderList}) => [...acc, ...orderList.filter(i => !isWaitingReselected(i))], []);
}



Page({
  data: {
    scrollViewHeight: 600,
    showDiscountedPrices: false,
    isAllSelected: false,
    isEdit: false,
    address:'213213',
    shoppingList: [],
    showNav: false,
    backType: 'action',
    shoppingListTotal: {
      price: 0,
      number: 0,
      goodCategoryNumber: 0,
      discountedPrices: 0
    },
    goodTypeInCart: 0, // 购物车里所有的商品种类
    orderList: [],
   
  },
  onLoad() {
  
    this.setData({
      address: getLocalStorage(storageKeyMap.userInfo).shippingAddress
    })
    this.getGoodCratList()
  },
  getGoodCratList(type = 'add') {
    getGoodCratList().then(res => {
      if (res.code === 200) {
        let orderList = this.data.orderList.concat(res.data || [])
        this.setData({
          orderList
        })
        this.customData.allGoodInCartTypes = getAllGood(orderList).length;
        if (type === 'refresh') {
          wx.stopPullDownRefresh()
        }
      }
    })
  },
  onReady() {
    // Do something when page ready.
    this.getDom();
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    let submit = await boundingClientRect('#submit');
    let scrollViewHeight = App.globalData.windowHeight - res.target_top - submit.target_height;
    this.setData({
      scrollViewHeight
    });
  },
  onShow() {
    this.getAddress()
    // Do something when page show.
  },
  getAddress() {
    // consignee: '李四',
    // phone: '12345678915',
    // area:'北京市海淀区',
    // address: '苏家坨乡前沙涧村15号',
    // isDefault: 0,
    // id: 2
    const {area, address} = Router.getParams()
    if (area) {
      this.setData({address: area+ address})
    }
  },
  navBack() {
    let len = Router.history.length
    if (len > 1) {
      Router.push(Router.history[len-2])
    } 
    console.log('navBack')
  },

  onPullDownRefresh() {
    // Do something when pull down.
    this.getGoodCratList('refresh')
  },
  scrollToLower() {
    this.getGoodCratList('add')
  },
  setAddress() {
    Router.push(Path.myAddress)
  },
  toEdit() {
    this.setData({
      isEdit: !this.data.isEdit
    })
  },
  // 组件操作 单选删除
  onOrderChange(e) {
    console.log('onOrderChange', e);
    
    let {checked, orderList, actionType} = e.detail;
    let shoppingList = this.data.shoppingList;
    
    if (checked) {
      while(orderList.length) {
        let good = orderList.shift();
        let index = shoppingList.findIndex((item) => item.id === good.id);
        if (~index) {
          // 原商品存在的情况下
          shoppingList[index] = good;
        } else {
          // 原商品不存在的情况下
          shoppingList.push(good);
        }
      }
    } else {
      // 取消选中或删除
      shoppingList = shoppingList.filter(order => 
        !orderList.find((item) => item.id === order.id)
      )
    }

    let shoppingListTotal = calcShoppingListTotal(shoppingList)
    // 当删除一项时，总商品类型数量要减 1
    if (actionType === 'delete') {
      this.customData.allGoodInCartTypes--;
    }
    let isAllSelected = this.customData.allGoodInCartTypes <= shoppingListTotal.goodCategoryNumber;
    this.setData({
      isAllSelected,
      shoppingList,
      shoppingListTotal,
    })

  },
  // 全选
  selectedAll() {
    let {isAllSelected, orderList} = this.data;
    let shoppingList = this.data.shoppingList;
    
    if (!isAllSelected) { 
      shoppingList = getAllGood(orderList);
    } else {
      // 取消选中或删除
      shoppingList= [];
    }
    let shoppingListTotal = calcShoppingListTotal(shoppingList);
    this.setData({
      orderList: selectAll(orderList, !isAllSelected),
      shoppingList,
      shoppingListTotal,
      isAllSelected: !isAllSelected
    })
  },
  submit(e) {
    console.log(this.data.shoppingList)
  },
  // 移入收藏
  saveGood(e) {
    let shoppingList = this.data.shoppingList
    if (!shoppingList.length) {
      Toast.show('请选择要收藏的商品')
      return 
    } 
    saveGood({
      ids: shoppingList.map( i => i.id)
    }).then(res => {
      if (res.code === 200) {
        Toast.success('收藏成功')
      }
    })
  },
  // 删除
  removeGood() {
    let {shoppingList, orderList} = this.data;
    if (!shoppingList.length) {
      Toast.show('请选择要删除的商品')
      return 
    } 
    deleteGoodInCart({
      ids: shoppingList.map( i => i.id)
    }).then(res => {
      if (res.code === 200) {
        // 删除
        // 遍历 orderList
        orderList = orderList.filter(order => {
          // 遍历 orderList 每一项的 shopList
          order.shopList = order.shopList.filter(shop => {
            // 遍历 shopList 每一项的 orderList 属性
            shop.orderList = shop.orderList.filter(good =>
            // 判断 当前项是否删除
              !shoppingList.find((item) => item.id === good.id)
            )
            return shop.orderList.length;
          })
          return order.shopList.length;
        })
        let shoppingListTotal = calcShoppingListTotal([]);

        this.setData({
          orderList,
          shoppingList: [],
          shoppingListTotal,
        })
        Toast.success('删除成功')
      }
    })
  },
  // 优惠明细
  viewDiscountedPrices() {
    this.setData({
      showDiscountedPrices: true
    }) 
  },
  onCloseDialog() {
    this.setData({
      showDiscountedPrices: false
    }) 
  },
  // 
  customData: {
    allGoodInCartTypes: 0
  }
});

