//aboutMe.js
const util = require('../../utils/util.js')

Page({
  data: {
    indicatorDots: true,  //显示面板指示点
    dotsColor:'#aaa',
    autoplay: true,     //自动切换
    interval: 5000,    //自动切换时间间隔
    duration: 1000,    //滑动动画时长
    imgUrls: [
      '../../images/about/bonner/bonner1.jpg',   // 本地读取图片的方式
      '../../images/about/bonner/bonner2.jpg',
      '../../images/about/bonner/bonner3.jpg',
    ],

    flag:'../../images/football1.png',
    
    intro:'小时候喜欢简易的图形组合，后来喜欢上了PS的照片合成,现在在网页上堆砌图形和文字，可以说有个兴趣从未改变！后来喜欢上了PS的照片合成,现在在网页上堆砌图形和文字，可以说',
    conIndicatorDots:false,
    conAutoplay:false,
    conInterval:false,
    conDuration: 1000,    //滑动动画时长
    conImgUrls: [
      '../../images/about/contact/blogBg.jpg',   // 本地读取图片的方式
      '../../images/about/contact/wxBg.jpg',
      '../../images/about/contact/qqBg.jpg',
      '../../images/about/contact/weiboBg.jpg',
    ],


    address:'福建省厦门市思明区思明南路422号',
    youbian:'361005',
    phone:'18900220573',

    perFlag1:'前端',
    perFlag2: '小程序',
    perFlag3: 'PhotoShop',
    perFlag4: 'NMR',
    perFlag5: 'Football',
  }
})