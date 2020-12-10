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
    value: { // 活动截止时间
      type: [Number, String],
      value: '2020-11-06 00:00:00',
    },
    unstart: {
      type: Boolean,
      value: true,
    },
    activeStatus: {
      type: String,
      value: 'unstart', // started, end,
    },
    startTime: {
      type: String,
      value: null,
    },
  },
  data: {
    times: [{
      value: '00',
      text: '天',
    },
    {
      value: '00',
      text: ':',
    },
    {
      value: '00',
      text: ':',
    },
    {
      value: '00',
      text: '',
    },
    ],
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.countTime()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      // clearTimeout(this.timer);
    },
  },
  created() {},
  ready() {},
  moved() {},


  methods: {
    countTime() {
      //设置截止时间
      let deadLine = this.data.value || Date.now();
      //获取当前时间
      let date = new Date();
      let now = date.getTime();

      if (typeof deadLine === 'string' && !/[\/:]/.test(deadLine)) {
        deadLine = Number(deadLine);
      }
      let endDate = new Date(deadLine);
      let end = endDate.getTime();
      //时间差
      let leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      let dhms = ['00', '00', '00', '00'];
      if (leftTime >= 0) {
        let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        let m = Math.floor((leftTime / 1000 / 60) % 60);
        let s = Math.floor((leftTime / 1000) % 60);
        dhms = [
          d < 10 ? '0' + d : d,
          h < 10 ? '0' + h : h,
          m < 10 ? '0' + m : m,
          s < 10 ? '0' + s : s,
        ];
      }

      if (dhms.join('') === '00000000' && deadLine) {
        this.triggerEvent('active-end');
        return;
      }

      this.setData({
        times: this.data.times.map((item, index) => ({
          ...item,
          value: dhms[index]
        }))
      })

      //递归每秒调用countTime方法，显示动态时间效果
      this.timer = setTimeout(() => {
        this.countTime()
      }, 1000);
    },
  }

});