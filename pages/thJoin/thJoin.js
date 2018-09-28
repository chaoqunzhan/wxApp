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
        that.setData({
          authenFilePaths: res.tempFilePaths
        })
      }
    })
  },

  formSubmit: function (e) {
    // console.log('form携带数据为：', e.detail.value)
    // console.log("abs",this.data.tempFilePaths)
    var datetime = Date.now().toString()
    var formData = e.detail.value
    formData.datetime = datetime
    // formData.photoUrl = this.data.tempFilePaths          //上传照片的URL 
    // formData.authenUrl = this.data.authenFilePaths          //上传照片的URL 
    console.log("form",formData)
    var that = this

    wx.uploadFile({
      url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Teacher/Teacher/thJoin', //仅为示例，非真实的接口地址
      filePath: this.data.tempFilePaths[0],
      name: 'file',
      formData: formData,
      success(res) {
        const data = res.data
        //do something
      }
    })

    // wx.request({
    //   url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Th/Th/submitThJoin', //接口地址
    //   data: formData,
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },

    //   success: function (res) {
    //     // console.log(res)
    //   },
    // }),

      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })


  }

})