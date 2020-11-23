import { getDataset } from '../../utils/commom';
import Poster from '../miniprogram_dist/poster/poster.js';

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    type: {
      type: String,
      value: 'good' // good simple
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    show: false,
    list: [],
    posterConfig: {
      debug: false,
    }
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.init()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  created() {
   
  },
  ready() {},
  moved() {},
  detached() {},

  methods: {
    init() {
      let actions = this.actions = {
        wechat: {
          pic: './images/wechat.png',
          type: 'wechat',
          label: '微信好友'
        },
        pyq: {
          pic: './images/pyq.png',
          type: 'pyq',
          label: '朋友圈'
        },
        qq: {
          pic: './images/qq.png',
          type: 'qq',
          label: 'QQ好友'
        },
        xinlang: {
          pic: './images/xinlang.png',
          type: 'xinlang',
          label: '新浪微博'
        },
        copy: {
          pic: './images/copy-link.png',
          type: 'copy',
          label: '复制链接'
        },
        poster: {
          pic: './images/poster.png',
          type: 'poster',
          label: '生成海报'
        },
        save: {
          pic: './images/save.png',
          type: 'save',
          label: '保存图片'
        }
      }
  
      let list = []
      if (this.data.type === 'good') {
        list = [
          actions.wechat,
          actions.pyq,
          actions.qq,
          actions.xinlang,
          actions.copy,
          actions.poster,
        ]
      } else {
        list = [
          actions.wechat,
          actions.pyq,
          actions.qq,
          actions.xinlang,
        ]
      }
  
      this.setData({list})
    },
    show() {
      this.setData({
        show: !this.data.show
      })
    },
    onCloseDialog() {
      this.setData({
        show: !this.data.show
      })
    },
    action(e) {
      console.log( getDataset(e))
      let {type} = getDataset(e)

      switch (type) {
      case 'wechat':
        console.log(type);
        break;
      case 'pyq' :  
        console.log(type);
        break;
      case 'qq' :  
        console.log(type);
        break;
      case 'xinlang' :  
        console.log(type);
        break;
      case 'copy' :  
        console.log(type, Router.currentPath);
        break;
      case 'poster' :  
        console.log(type);
        this.createPoster()
        break;
      case 'save' :  
        console.log(type);
        this.afterSavePoster()
        break;
      }
     
    },


    createPoster() {      
      this.setData({ posterConfig: {
        width: 700,
        height: 500,
        debug: false,
        // backgroundColor	String	否	画布颜色
        // debug	Boolean	否	false隐藏canvas，true显示canvas，默认false
        // pixelRatio	Number	否	1为一般，值越大越清晰
        // preload	Boolean	否	true：图片资源预下载 默认false
        // hide-loading	Boolean	否	true：隐藏loading 默认false
        // blocks	Object Array（对象数组）	否	看下文
        texts: [{
          x: 200,
          y: 40,
          text: 'hello',
          fontSize: 40,
          color: '#333'
        }],
        images: [
          {
            x: 200,
            y: 50,
            url: '/images/no-coupon.png',
            width: 400,
            height: 400,
          }
        ]
      }}, () => {
        Poster.create(false,this); 
      });
    },
    onPosterSuccess(e) {
      const { detail } = e;
      console.log(e)
      this.posterUrl = detail
      wx.previewImage({
        current: detail,
        urls: [detail]
      })

      this.setData({list:  [
        this.actions.wechat,
        this.actions.pyq,
        this.actions.qq,
        this.actions.save,
      ]})
    },
    onPosterFail(e) {
      console.error(e)
    },
    afterSavePoster() {
      console.log(this.posterUrl)
      wx.saveImageToPhotosAlbum({
        filePath: this.posterUrl,
        success: (result) => {
          console.log(result)
          this.init()
        }
      })
    }
  }

});