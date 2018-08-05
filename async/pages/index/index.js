//index.js
//获取应用实例

Page({
  data: {
  },
  onLoad() {
    console.log('index')
    wx.navigateTo({
      // url: '../async/async?paramA=666'
      url: '../com/com'
    })
  }
})
