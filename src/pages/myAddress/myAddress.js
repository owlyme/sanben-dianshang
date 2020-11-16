// 全局app实例
import { Router } from '../../utils/sysApis'
import PagePathes from "../../router/index"
import { getDataset } from '../../utils/commom'

Page({
  data: {
    addressList: [{
      consignee: '张三',
      phone: '12345678915',
      area:'北京市海淀区',
      address: '苏家坨乡前沙涧村15号',
      isDefault: 1,
      id: 1
    }, {
      consignee: '李四',
      phone: '12345678915',
      area:'北京市海淀区',
      address: '苏家坨乡前沙涧村15号',
      isDefault: 0,
      id: 2
    }],
    type:''
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
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
  editAddress(e) {
    console.log('编辑收货地址')
    //编辑收货地址
    Router.push({
      url: PagePathes.editorAddress,
      query: getDataset(e).info
    })
  
  },

  addAddress() {
    console.log('添加收货地址')

    //添加收货地址
    Router.push({
      url: PagePathes.editorAddress
    })
  },

  customData: {}
});
