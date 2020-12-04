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
    number: {
      type: [Number, String],
      value: 0.00
    },
    showDecimal: {
      type: Boolean,
      value: true
    },
    plane: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#FF3232'
    },
    moneySize: {
      type: Number,
      value: 12
    },
    numberSize: {
      type: Number,
      value: 16
    },
    decimalPartSize: {
      type: [Number, String],
      value: 12
    }
  },

  observers: {
    number: function() {
      this.init()
    }
  },
  data: {
    intPart: 0,
    decimalPart: '00'
  },

  // 生命周期函数
  created() {},
  attached() {
    this.init()
  },
  methods: {
    init() {
      let [intPart, decimalPart = '00'] = String(this.data.number || 0).split('.');

      this.setData({
        intPart,
        decimalPart
      });
    }
  }
});