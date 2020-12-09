import { getDatasetValue } from '../../utils/commom';
import { Path, Router } from '../../router/index';
const getGoodData = getDatasetValue('good');

const splitArray = (arr = []) => {
  let evenArr = [];
  let oddArr = [];
  arr.forEach((item, index) => {
    index % 2 ?
      evenArr.push(item) :
      oddArr.push(item);

  });
  return [oddArr, evenArr];
};

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
    type: {
      type: String,
      value: '2' // 0: 水平滑动,  1：一行一列 2：一行两列 3,
    },
    goodList: {
      type: Array,
      value: []
    },

    feature: {
      type: Boolean,
      value: true,
    },
    showPrice: {
      type: Boolean,
      value: true,
    },
    showName: {
      type: Boolean,
      value: true,
    },

  },

  observers: {
    goodList: function() {
      this.init()
    }
  },
  data: {
    oddIndexOfgoodList: [],
    evenIndexOfgoodList: []
  },

  // 生命周期函数
  created() {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行

    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  ready() {
    this.init()
  },

  methods: {
    init() {
      if (this.data.type !== '2') return;
      let [oddIndexOfgoodList, evenIndexOfgoodList] = splitArray(this.data.goodList);

      this.setData({
        oddIndexOfgoodList,
        evenIndexOfgoodList
      });
    },
    onClick(e) {

      let good = getGoodData(e);
      console.log('good list', good);
      this.triggerEvent('onGoodClick', good);

      Router.push({
        url: Path.goodDetail
      })
    },
  }
});