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
    // 星星评分的属性设置
    rate: {
      type: Number,
      value: 0
    },
    // 由用户来定义星星的大小和文字的大小
    starSize: {
      type: Number,
      value: 24, //rpx
    },
    fontSize: {
      type: Number,
      value: 20
    },
    fontColor: {
      type: String,
      value: '#ccc'
    },
    iconType: {
      type: String,
      value: 'star' // zan
    },
    gutter: {
      type: Number,
      value: 8, //rpx
    }
  },
  observers: {
    rate() {
      this.init()
    }
  },
  data: {
    lights: [],
    halfs: [],
    grays: [],
  },
  ready() {
    this.init()
  },

  methods: {
    init() {
      var that = this;
      //接收父组件传入的值
      let rate = that.properties.rate || 0; //父组件传过来的评分共10分,根据评分判断星星数
      let intRate = parseInt(rate) //取整数,得到多少评分

      // 除出来有可能是浮点,所以需要求整数,1分等于0.5个星星,需要除以2,得到星星个数
      let light = parseInt(intRate / 2); //3个星星
      let half = intRate % 2; //求半灰星,对传入过来的评分模于2,得出半星

      let gray = 5 - light - half; //一共5个星星,总星减去高亮的星星再减去一半亮亮的星星得出灰星

      // 对传过来的数据进行遍历,页面显示 
      let lights = [],
        halfs = [],
        grays = [];
      for (let i = 1; i <= light; i++) {
        lights.push(i)
      }
      for (let i = 1; i <= half; i++) {
        halfs.push(i)
      }
      for (let i = 1; i <= gray; i++) {
        grays.push(i)
      }
      // 对传进来的评分做判断,如果为0,显示为评分,如果评分但是是整数要保留一位小数
      rate = rate && rate > 0 ? rate.toFixed(1) + '分' : '未评分';

      this.setData({
        lights,
        halfs,
        grays,
        rates: rate
      })
    },
    getLightPoints(e) {
      let index = e.currentTarget.dataset.index + 1
      this.setStar(index)
    },
    getHalfPoints(e) {
      let { lights } = this.data
      let index = e.currentTarget.dataset.index + 1

      this.setStar(lights.length + index / 2)
    },
    getGrayGray(e) {
      let { lights, halfs } = this.data
      let index = e.currentTarget.dataset.index + 1
      this.setStar(lights.length + halfs.length / 2 + index)
    },
    setStar(rate) {
      console.log(rate)
      this.triggerEvent('onChange', {
        rate
      })
    }
  }
});