// pages/async.js

// const regeneratorRuntime = require('../../libs/runtime-module.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log('接受的路由参数---paramA---',options.paramA)
    this.testing()
    this.promiseFn()
    await this.testAsync()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  testing() {
    console.log('test')
  },

  promiseFn() {
    this.testPromise().then((res) => {
      console.log(res)
    })
  },

  testPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Promise handle')
        resolve(123)
      }, 2000)
    })
  },

  async testAsync() {
    const result = await this.testPromise()
    console.log('async test--', result)
  }
})