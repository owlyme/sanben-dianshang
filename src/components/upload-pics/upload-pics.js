import {chooseImage} from '../../utils/sysApis';
import { getDataset } from '../../utils/commom';


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    images: {
      type: Array,
      value: []
    },
    max: {
      type: Number,
      value: 4
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {},

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
    removePic(e) {
      let index = getDataset(e).index
      this.data.images.splice(index, 1)
      this.triggerEvent('onChange', this.data.images)
    },
    // 上传
    handleUpload(){
      chooseImage().then(res => {
        let images = this.data.images
        images = images.concat(res)
        this.setData({
          images
        });
        this.triggerEvent('onChange', images)
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
  }

});