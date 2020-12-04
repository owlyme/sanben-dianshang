import { getDatasetValue } from '../../utils/commom';
const getIndex = getDatasetValue('index');
const getItem = getDatasetValue('item');

Component({
  options: {
    styleIsolation: 'apply-shared',
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
    autoplay: {
      type: Boolean,
      value: false
    },
    circular: {
      type: Boolean,
      value: false
    },
    interval: {
      type: Number,
      value: 3000
    },
    duration: {
      type: Number,
      value: 1000
    },
    bannerList: {
      type: Array,
      value: [{
        pic: '',
      }]
    },
    ratio: {
      type: [Number, String],
      value: '33.33%'
    },
    dotsType: {
      type: [String],
      value: 'default' // right bottom
    },

  },
  data: {
    // bannerList: [
    //   {
    //     id: 12,
    //     pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    //     name: 'adidas'
    //    },
    //    {
    //     id: 13,
    //     pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    //     name: 'adidas'
    //    }
    // ],
    swiperCurrent: 0
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
  ready() {

  },


  methods: {
    swiperChange(e) {
      let swiperCurrent = e.detail.current
      this.setData({
        swiperCurrent,
      })
      this.triggerEvent('swiperChange', { swiperCurrent })
    },
    onDotTap(e) {
      // this.setData({autoplay:false});
      // const {index} = e.mark;
      // //设置滚动
      // this.setData({swiperCurrent:index,autoplay:true});
    },
    onItemClick(e) {
      const index = getIndex(e);
      const item = getItem(e);
      this.triggerEvent('onItemClick', { index, item })
    }
  }

});