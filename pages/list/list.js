//list.js
const util = require('../../utils/util.js')

Page({
  data: {
    appList: [],
    lastid: 0,
    moreHidden:true,
  },

  loadData: function(lastid){
    wx.showLoading({                //加载中提示
      title: '加载中',       
    })
    var limit = 5
    var that = this
    wx.request({
      url: 'https://www.cqz21.top/weicms/index.php?s=/addon/Wx/Wx/getList', //接口地址
      data: {limit: limit, lastid: lastid},
      header: {
        'content-type': 'application/json' // 默认值
      },
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if(!res.data){
          wx.showToast({
            title: '没有更多',
            icon: 'none',
            duration: 1200
          })                    //设置弹窗提示
          that.setData({ moreHidden: true, })        //display moreHidden
          return false
        }

        var len = res.data.length
        that.setData({lastid:res.data[len-1].id})    //获取当前加载的最后ID
        var dataArr = that.data.appList
        var newData = dataArr.concat(res.data)
        that.setData({
          appList: newData
        })
        that.setData({ moreHidden: false, })        //display moreHidden
        wx.hideLoading()                            //hidden loading
      },
    })
    
  },

  loadMore: function(event){
    var id = event.currentTarget.dataset.lastid
    this.loadData(id);
    wx.getNetworkType({
      success: function (res) {        // return networkType
        var networkType = res.networkType
        console.log(networkType)
        if (networkType != 'wifi'&&id==10) {    //网络友好提示
          wx.showModal({
            title: '提示',
            content: '您当前处于非WiFi状态，将产生流量费用',
            showCancel:false,
            success: function (res) {
              if (res.confirm) {
                // console.log('用户点击确定')
              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },

  onLoad: function () {
    var that = this
    that.loadData(0);
    // wx.setNavigationBarTitle({      //title of now
    //   title: '一起赢赏金'
    // })
  },

})


