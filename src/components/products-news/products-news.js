Component({
  options: {
    styleIsolation: 'apply-shared',
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
    title: {
      type: String,
      value: "使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别。",
    },
    pic: {
      type: String,
      value: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
    },
    imgSize: {
      type: Number,
      value: 34,
    },
    color: {
      type: String,
      value: "#333333",
    },
    fontSize: {
      type: Number,
      value: 12,
    },
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {},



});