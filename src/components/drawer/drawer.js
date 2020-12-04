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
    show: {
      type: Boolean,
      value: false
    },
    position: {
      type: String,
      value: 'right', // right center bottom 
    },
    style: {
      type: String,
      value: '', // left
    }
  },
  observers: {
    // show: function() {
    //   this.show()
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
    show() {

    },
    onMaskClick() {
      this.setData({
        show: false
      })
      this.triggerEvent('onClose')
    }
  }
});