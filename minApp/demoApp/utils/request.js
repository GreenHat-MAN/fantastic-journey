

export const Ajax=function({url,type='GET',data={},header}){

    return new Promise((resovle,reject)=>{
          wx.request({
            url,
            method:type,
            data,
            header,
            success:(res)=>{
              resovle(res.data)
            },
            fail:(err)=>{
              reject(err) 
              wx.showToast({
                  title: '网络异常',
                })
            }
          })
    })
}