// pages/mine/mine.js
import {Ajax} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toLogin(){
    wx.getUserProfile({
      desc: 'desc',
      success:(userInfo)=>{
        console.log(userInfo);
      }
    })
  },

  async getUser(){
    let res = await Ajax({
      url:'http://47.92.127.166:3233/login'
    })
    console.log(res);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUser()
    console.log('onload');
    // 正常情况下onload比onready要快,但是request请求数据时不起作用
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      this.getUser()
      console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // pages生命周期页面加载时顺序为:onLoad--->onShow---->onReady
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

  }
})