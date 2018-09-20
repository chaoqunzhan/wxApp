//teacher.js
const util = require('../../utils/util.js')

Page({
  data: {
    indicatorDots: true,  //显示面板指示点
    dotsColor: '#aaa',
    autoplay: true,     //自动切换
    interval: 5000,    //自动切换时间间隔
    duration: 1000,    //滑动动画时长
    imgUrls: [
      '../../images/about/bonner/bonner1.jpg',   // 本地读取图片的方式
      '../../images/about/bonner/bonner2.jpg',
      '../../images/about/bonner/bonner3.jpg',
    ],
    flag: '../../images/football1.png',

  //   stuList: [{ id:"1", grade:"高一", gender:"男", subject:"数学", pay:"50", address:"hsudiah", demand:"siuidad"},
  //     { id: "1", grade: "高一", gender: "男", subject: "数学", pay: "50", address: "hsudiah", demand: "siuidad" }]
  },

  onLoad:
  function(){
    var that = this;
    wx.request({
      url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Teacher/Teacher/thList', //接口地址    
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          thList: res.data
        })
      }
    }),

    wx.request({
      url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Th/Th/stuList', //接口地址    
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var newStuList = res.data;
        that.setData({
          stuList: res.data
        })
      }
    })
  }

})