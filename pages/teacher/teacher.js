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
        // console.log(res.data)
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
        // console.log(res.data)
        var newStuList = res.data
        newStuList.forEach(function(item){
          var newGender = parseInt(item.gender)
          var newGrade = parseInt(item.grade)
          if (newGender == 0){                   //转换gender为男女
            item.gender = '男生'
          }else{
            item.gender = '女生'
          }
          switch (newGrade) {                    //转换grade为具体年级
            case 0: item.grade = '高三'; break;
            case 1: item.grade = '高二'; break;
            case 2: item.grade = '高一'; break;
            case 3: item.grade = '初三'; break;
            case 4: item.grade = '初二'; break;
            case 5: item.grade = '初一'; break;
            case 6: item.grade = '考研'; break;
            case 7: item.grade = '小学'; break;
            case 8: item.grade = '其他'; break;
          }
        })
        // console.log(newStuList)
        that.setData({
          stuList: res.data
        })
      }
    })
  }

})