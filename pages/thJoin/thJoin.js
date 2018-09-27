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
  },

  chPhoto: function() {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },

  chCard: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const authenFilePaths = res.tempFilePaths
        // console.log(tempFilePaths)
        that.setData({
          authenFilePaths: res.tempFilePaths
        })
      }
    })
  },

  formSubmit: function (e) {
    // console.log('form携带数据为：', e.detail.value)
    var datetime = Date.now();
    console.log('datetime', datetime)
    var formData = e.detail.value
    // console.log('form：', formData)

    var that = this
    wx.request({
      url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Th/Th/submitTeach', //接口地址
      data: formData,
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        console.log(res)
      },
    }),

      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })


  }

})