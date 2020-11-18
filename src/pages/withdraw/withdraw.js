// 全局app实例
import PagePathes from '../../router/index'
import Base from '../../utils/base';
import { Toast, Router } from '../../utils/sysApis';
import {getDataset} from "../../utils/commom"
const app = getApp();
console.log(app);

const  bankList = [
  {
    bankLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    bankName: "中国农业银行 ",
    name: '纪良庆',
    tailNumber: '0247',
    bankNumber: '4644405247'
  },
  {
    bankLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    bankName: "中国农业银行 ",
    name: '纪良庆',
    tailNumber: '0247',
    bankNumber: '46444024dff7'
  },
  {
    bankLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    bankName: "中国农业银行 ",
    name: '纪良庆',
    tailNumber: '0247',
    bankNumber: '46444023347'
  }
]
Page({
  data: {
    showDrawer: false,
    showNav: true,
    withdrawStatus: 'fail', 
    balance: 3000, // 当前余额
    name: '',
    cardNum: '',
    bank: '',
    phone: '',
    money:'',
    bankList: []
  },
  onLoad() {
    // Do some initialize when page load.
    this.setTailNumber(bankList)
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  setTailNumber (bankList) {
    this.setData({
      bankList: (bankList || []).map(item => ({
        ...item,
        tailNumber: item.bankNumber.substr(item.bankNumber.length-4)
      }))
    })
  },
  validatoForm (name, cardNum, bank, phone, money)  {
    let bool = true;
    let title = ''
    if (!name) {
      bool = false;
      title = '持卡人本人姓名'
    } else if (!cardNum) {
      bool = false;
      title = '持卡人本人银行卡号'
    } else if (!bank) {
      bool = false;
      title = '选择银行'
    } else if(!Base.isPhone(phone)){
      bool = false;
      title = '输入正确的手机号'
    } else if (!money) {
      bool = false;
      title = '输入金额'
    }

    if (!bool) {
      Toast.show({
        title
      });
    }
    return bool;
  },
  handleSubmit() {
    let {name, cardNum, bank, phone, money} = this.data
    if (this.validatoForm(name, cardNum, bank, phone, money)) {
      console.log(this.data)
      this.setData({
        withdrawStatus: "success"
      })
      this.open()
    }
    
    this.open()
  },
  
  toSelectedBank() {

  },

  withdrawAll() {
    this.setData({
      money: this.data.balance
    })
  },
  clearMoney() {
    this.setData({
      money: ''
    })
  },
  selectedBankCard(e) {
    let {bankNumber, bankName} = getDataset(e).bank
    console.log('selectedBankCard', e)
    this.setData({
      cardNum: bankNumber,
      bank: bankName,
    })
  },
  // 抽屉
  open() {
    this.setData({
      showDrawer: true,
      showNav: false
    })
  },
  onDrawerClose() {
    this.setData({
      showDrawer: false,
      showNav: true
    })
    Router.back()
  },
  customData: {}
});
