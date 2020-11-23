// 全局app实例
import {chooseImage} from '../../utils/sysApis';
import { getDataset } from '../../utils/commom';
import { Router } from '../../router/index';

const app = getApp();
 

Page({
  data: {
    showDrawer: false,
    showNav: true,
    imageSrc:[],
    detail: '',

    money: 40,
    step: 2,
    shopLogo:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    shopName: '阿迪达斯',
    good: {
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '鞋子',
      model: '黑色',
    },
  },
  onLoad() {
    // Do some initialize when page load.
  },
  selectReason() {
    console.log('selectReason')
  },
  submit(){
    console.log(this.data)
    this.open()
  },
  confirmSelect() {
    console.log('confirmSelect')
  },
  removePic(e) {
    let  imageSrc = this.data.imageSrc
    imageSrc.splice(getDataset(e).index, 1)
    this.setData({
      imageSrc
    });
  },
  // 上传
  handleUpload(){
    chooseImage().then(res => {
      console.log(res)
      this.data.imageSrc.push(res)
      this.setData({
        imageSrc: this.data.imageSrc
      });
    });
  },
  // 预览图片
  handlePreviewImage(e){
    var current = e.target.dataset.src
    // 预览图片
    //  uni.previewImage({
    //      current: current,
    //      urls: this.imageSrc
    //  });
  },
  open() {
    this.setData({
      showDrawer: true,
      showNav: false
    })
  },
  onDrawerClose() {
    this.setData({
      showDrawer: false,
      showNav: true
    })
    Router.back()
  },
  customData: {}
});
