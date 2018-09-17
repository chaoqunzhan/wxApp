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

    thList: [{
        photoUrl: '../../images/about/bonner/bonner1.jpg',
        name: '展教员',
        college: '电子科学系',
        grade: '研一',
        No: '0001',
        Authen: '未',
        datetime: '2018-09-09'
      },
      {
        photoUrl: '../../images/about/bonner/bonner1.jpg',
        name: '展教员',
        college: '电子科学系',
        grade: '研一',
        No: '0001',
        Authen: '未',
        datetime: '2018-09-09'
      }
    ]
  }
})