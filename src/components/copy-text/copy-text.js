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
    text: {
      type: String,
      value: 'success'
    }
  },
  data: {},


  methods: {
    copy() {
      wx.setClipboardData({
        data: this.data.text,
        success(res) {
          // wx.getClipboardData({
          //   success (res) {
          //     console.log(res.data) // data
          //   }
          // })
        }
      })
    }
  }

});