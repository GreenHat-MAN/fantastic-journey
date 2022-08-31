// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    name:'',
    content:'',
    count:10
  },
  // 获取留言信息
  getCon(e){
    this.setData({
      content:e.detail.value
    })
  },
  getName(e){
    this.setData({
      name:e.detail.value
    })
  },

  getContent(){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://47.92.127.166:3233/contentss',
      method:'GET',
      data:{},
      success:(res)=>{
        this.setData({
          list:res.data
        })
        // console.log(this.data.list);
        wx.showToast({
          title: 'ok',
        })
      },
      fail:(err)=>{
        wx.showToast({
          title: '请求失败',
        })
      }
    })
  },

  // 添加留言
  sendMess(e){
    let name=this.data.name
    let content = this.data.content
    if(name===''&&content===''){
      wx.showToast({
        title: '请输入内容',
      })
    }else{
      wx.request({
        url: 'http://47.92.127.166:3233/contentss',
        method:'POST',
        data:{
          name,
          content,
          time:new Date(),
          showId:'1000235'
        },
        success:(res)=>{
          this.setData({
            name:'',
            content:''
          })
          wx.showToast({
            title: '添加成功',
          })
          this.getContent()
        },
        fail:(resp)=>{
          wx.showToast({
            title: '添加失败',
          })
        }
      })
    }
  },

  // 删除留言
  delCon(e){
    // console.log(e.target.dataset.id);
    wx.request({
      url: 'http://47.92.127.166:3233/contentss/'+e.target.dataset.id,
      method:'DELETE',
      success:()=>{
        wx.showToast({
          title: '删除成功',
        })
        this.getContent()
      },
      fail:()=>{
        wx.showToast({
          title: '删除失败',
        })
      }
    })
  },
  // 修改留言
  updateCon(e){
    // console.log(e.target.dataset.info);
    wx.showModal({
      cancelColor: 'cancelColor',
      title:e.target.dataset.info.name,
      content:e.target.dataset.info.content,
      confirmText:'修改',
      cancelText:'取消',
      editable:true,
      success:(res)=>{
        if(res.content!=''){
          wx.request({
            url: 'http://47.92.127.166:3233/contentss/'+e.target.dataset.info.id,
            method:'PUT',
            data:{
              name:e.target.dataset.info.name,
              content:res.content,
              time:new Date()
            },
            success:()=>{
              wx.showToast({
                title: '修改成功',
                icon:'none'
              })
              this.getContent()
            }
          })
        }else{
          wx.showToast({
            title: '修改的数据不能为空',
            icon:'error'
          })
        }
      },
      fail:()=>{

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getContent()
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
    this.getContent()
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