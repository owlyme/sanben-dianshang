import { getDatasetValue } from '../../utils/commom';
import { Toast } from '../../utils/sysApis';
import { sign, getSign } from '../../api/sign';

const getSignData = getDatasetValue('sign');
const weekDayListTemp = [{
    dayText: '周一',
    day: 1,
    status: 1, // 0: 未签到， 1: 已签到
    score: 10
  },
  {
    dayText: '周二',
    day: 2,
    status: 0, // 0: 未签到， 1: 已签到
    score: 10
  },
  {
    dayText: '周三',
    day: 3,
    status: 0, // 0: 未签到， 1: 已签到
    score: 10
  },
  {
    dayText: '周四',
    day: 4,
    status: 0, // 0: 未签到， 1: 已签到
    score: 10
  },
  {
    dayText: '周五',
    day: 5,
    status: 0, // 0: 未签到， 1: 已签到
    score: 10
  },
  {
    dayText: '周六',
    day: 6,
    status: 0, // 0: 未签到， 1: 已签到
    score: 10
  },
  {
    dayText: '周日',
    day: 7, // 0
    status: 0, // 0: 未签到， 1: 已签到
    score: 10,
  }
];
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
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    signedDays: 22,
    currentDay: 0,
    weekDayList: [],
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setWeekDaysListText();
      this.getSignInfo();
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
    init() {

    },
    // 设置显示文字
    setWeekDaysListText() {
      let currentDay = (new Date).getDay() || 7;
      let weekDayList = weekDayListTemp.map(i => ({
        ...i,
        dayText: currentDay === i.day ? '今天' : i.dayText
      }));
      this.setData({
        weekDayList,
        currentDay
      });
    },
    // 获取签到详情
    getSignInfo() {
      getSign().then(() => {

      });
    },
    toSign(e) {
      let signData = getSignData(e);
      // dayText: "周三", day: 3, status: 1, score: 10
      let { currentDay } = this.data;
      // currentDay = currentDay || 7;
      if (currentDay > signData.day) {
        Toast.show('不可以补签！');
      } else if (currentDay < signData.day) {
        Toast.show('未到签到时间！');
      } else if (currentDay === signData.day) {
        if (signData.status) {
          Toast.show('您已签到！');
        } else {
          this.postSign(signData);
        }
      }
    },
    postSign(data) {
      sign().then(res => {
        Toast.success('签到成功！');
        // 修改状态
        let { weekDayList } = this.data;
        weekDayList[data.day - 1].status = 1;
        this.setData({
          weekDayList
        });
      });
    },
  }

});