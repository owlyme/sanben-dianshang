// 全局app实例
import {Router} from '../../router/index';
import {Modal, Toast }from '../../utils/sysApis'
import Base from '../../utils/base';

const app = getApp();
 

Page({
  data: {
    consignee:'',			//收货人
    phone:'',					//手机号
    area:'',					//地区
    address:'',			//详细地址
    isDefault: 0
  },
  onLoad(options) {
    console.log(options)
    if(options.id){ //如果是编辑收货地址
      this.setData({
        ...options
      })
    }
  },
  
  handleChange(e){
    this.setData({
      isDefault: e.detail.value ? 1 : 0
    })
  },
  back() {
    // Modal({
    //   title:'提示',
    //   content:'你确认放弃修改',
    //   success: (res) => {
    //     if(res.confirm){
    //      console.log("res")
    //     }
    //   }
    // })
  },
  validatoForm ()  {
    let {consignee,			//收货人
      phone,					//手机号
      area,					//地区
      address			//详细地址
    } = this.data

    let bool = true; 

    if(!consignee){
      bool = false;
      Toast.show({
        title: '输入收货人'
      });
    } else if(!Base.isPhone(phone)){
      bool = false;
      Toast.show({
        title: '输入正确的手机号'
      });
    } else if (!area || !address) {
      bool = false;
      Toast.show({
        title: '输入联系地址'
      });
    } 
    return bool;
  },
  save() {
    if (this.validatoForm()) {
      console.log(this.data)
      Toast.success({
        title: '添加成功'
      });
      Router.back()
    }
  },

  removeAddress() {
    Modal({
      title:'提示',
      content:'确认要删除该地址吗?',
      success: (res) => {
        if(res.confirm){
          console.log('res')
        }
      }
    })
  }, 
  clearConsignee() {
    this.setData({
      consignee : ''
    })
  },
  clearPhone() {
    this.setData({
      phone : ''
    })
  },
  customData: {}
});
