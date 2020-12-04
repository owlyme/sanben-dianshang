import { Router } from '../../router/index'
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
    postImg: '',
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

      this.setData({ list })
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
      console.log(getDataset(e))
      let { type } = getDataset(e)

      switch (type) {
        case 'wechat':
          console.log(type);
          break;
        case 'pyq':
          console.log(type);
          break;
        case 'qq':
          console.log(type);
          break;
        case 'xinlang':
          console.log(type);
          break;
        case 'copy':
          console.log(type, Router.currentPath);
          break;
        case 'poster':
          console.log(type);
          this.createPoster()
          break;
        case 'save':
          console.log(type);
          this.afterSavePoster()
          break;
      }

    },
    createMulitLine(args) {
      // 小写 0.53
      // 大写 0.7029
      // 汉字 1
      // 数字 0.585
      let { width, ...others } = args
      let p = {
        ...others
      }
      width = width / 2

      let fontSize = others.fontSize / 2
      let res = ['']
      let resIndex = 0
      let textWidth = 0

      for (let i = 0, len = p.text.length; i < len; i++) {
        let s = p.text[i]
        if (textWidth >= width) {
          resIndex++
          textWidth = 0
          res[resIndex] = ''
        }

        if (/[A-Z]/.test(s)) {
          textWidth += fontSize * 0.7029
        } else if (/[a-z]/.test(s)) {
          textWidth += fontSize * 0.54
        } else if (/\d/.test(s)) {
          textWidth += fontSize * 0.585
        } else {
          textWidth += fontSize
        }
        res[resIndex] += s
      }
      let arr = res.map((i, index) => ({
        ...p,
        y: p.y + fontSize * 2.2 * (index + 1),
        text: i
      }))

      return arr
    },

    createPoster() {
      this.setData({
        posterConfig: {
          width: 224 * 2,
          height: 400 * 2,
          debug: false,
          backgroundColor: '#ffffff',
          pixelRatio: 6,
          // preload	Boolean	否	true：图片资源预下载 默认false
          // hide-loading	Boolean	否	true：隐藏loading 默认false
          // blocks	Object Array（对象数组）	否	看下文

          texts: [
            ...this.createMulitLine({
              x: 12 * 2,
              y: 220 * 2,
              width: 200 * 2,
              text: 'Adidas阿迪达斯旗舰店官网外套男装新年秋季防风衣加绒运动夹克',
              fontSize: 12 * 2,
              color: '#333',
            }),
            {
              x: 12 * 2,
              y: 268 * 2,
              text: '￥199.99',
              fontSize: 16 * 2,
              color: '#FF402B'
            },
            ...this.createMulitLine({
              x: 92 * 2,
              y: 360 * 2,
              text: '长按图片，识别二维码查看商品详情',
              fontSize: 10 * 2,
              color: '#999999',
              width: 100 * 2,
            }),
          ],
          images: [{
              x: 12 * 2,
              y: 12 * 2,
              url: '/images/no-coupon.png',
              width: 200 * 2,
              height: 200 * 2,
              borderRadius: 4 * 2
            },
            {
              x: 12 * 2,
              y: 316 * 2,
              url: '/images/no-coupon.png',
              width: 72 * 2,
              height: 72 * 2,
            }
          ]
        }
      }, () => {
        Poster.create(false, this);
      });
    },
    onPosterSuccess(e) {
      const { detail } = e;
      console.log(e)
      this.posterUrl = detail
      this.setData({
          postImg: detail
        })
        // wx.previewImage({
        //   current: detail,
        //   urls: [detail]
        // })

      this.setData({
        list: [
          this.actions.wechat,
          this.actions.pyq,
          this.actions.qq,
          this.actions.save,
        ]
      })
    },
    onPosterFail(e) {
      console.error(e)
    },
    afterSavePoster() {
      wx.saveImageToPhotosAlbum({
        filePath: this.posterUrl,
        success: (result) => {
          console.log(result)
          this.init()
          this.setData({
            postImg: ''
          })
        }
      })
    },
    cancel() {
      this.onCloseDialog()
    }
  }

});