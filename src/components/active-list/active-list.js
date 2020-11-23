import {Path, Router} from '../../router/index';
import { getDatasetValue,  } from '../../utils/commom';


const getType = getDatasetValue('type')
Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {},
  data: {
    active: [
      {
        type: 'signIn',
        text: '签到有奖',
        icon: './images/qiandao.png'
      },
      {
        type: 'coupon',
        text: '优惠领券',
        icon: './images/youhuiquan.png'
      },
      {
        type: '3',
        text: '幸运抽奖',
        icon: './images/choujiang.png'
      },
      {
        type: '',
        text: '品牌特卖',
        icon: './images/temai.png'
      },
      {
        type: '',
        text: '积分兑换',
        icon: './images/duihuanjifen.png'
      },
      {
        type: '',
        text: '发现好货',
        icon: './images/haohuo.png'
      },
      {
        type: '',
        text: '新品首发',
        icon: './images/xinpin.png'
      },
      {
        type: '',
        text: '众筹活动',
        icon: './images/zhongchouhuodong.png'
      },
      {
        type: '',
        text: '超值拼团',
        icon: './images/pingtuan.png'
      },
      {
        type: '',
        text: '超值中心',
        icon: './images/chongzhi.png'
      },
    ]
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
  created() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    onActiveClick(e) {
      let type = getType(e)
      console.log(e, type)
      switch(type){
      case 'signIn': 
        Router.push(Path.signIn)
        break;
      case 'coupon': 
        Router.push(Path.coupon)
        break;
      default: 
        return   
      }
    }
  }

});