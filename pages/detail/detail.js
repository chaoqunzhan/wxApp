// pages/detail/detail.js
const util = require('../../utils/util.js')
Page({

  /*** 页面的初始数据*/
  data: {
    flag: '../../images/football1.png',
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Wx/Wx/getDetail', //接口地址
      data: {id:options.id},
      header: {
        'content-type': 'application/json' // 默认值
      },
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        that.setData({
          infoApp: res.data
        })
        // wx.setNavigationBarTitle({                //title of now
        //   title: res.data.describe
        // })
      }
      
    })
  }

})