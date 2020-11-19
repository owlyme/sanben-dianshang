// 全局app实例
import {chooseImage, Router} from '../../utils/sysApis';
import { getDataset } from '../../utils/commom';

const app = getApp();
 

Page({
  data: {
    showDrawer: false,
    showNav: true,
    imageSrc:[],
    detail: ''
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
    this.$refs.popupShare.open()
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
