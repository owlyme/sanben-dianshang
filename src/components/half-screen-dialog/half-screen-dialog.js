Component({
  options: {
    styleIsolation: 'apply-shared',
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
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
    show: {
      type: Boolean,
      value: false
    },
    header: {
      type: String,
      value: '标题'
    },
    btnText: {
      type: String,
      value: '确认'
    },
    hiddenBtn: {
      type: Boolean,
      value: false
    },
    hiddenClose: {
      type: Boolean,
      value: false
    }
  },

  data: {},


  methods: {
    init() {

    },
    onDrawerClose(e) {
      this.setData({
        show: false
      })
      this.triggerEvent('onClose')
    },
  }

});