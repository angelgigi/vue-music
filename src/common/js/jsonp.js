import originJsonp from 'jsonp'

export default function jsonp(url,data,option){ //url拼好
    //url += (url.indexOf('?') < 0 ? '?' : '&')+param(data)
    url += (url.indexOf('?') < 0 ? '?':'&')
    //url拼接 判断第一个是否是？，不是的话添加？
    
    return new Promise((resolve,reject) =>{
      originJsonp(url,option,(err,data) =>{
        if(!err){
          resolve(data) //成功函数
        }else{
          reject(err) //失败函数
        }
      })
    })
}

//data传到URL里
function param(data){
  let url = ''
  for (var k in data){
        let value = data[k] !== undefined ? data[k] :''
        url += `&${k} = ${encodeURIComponent(value)}` //es6语法
        //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
  }
  return url ? url.substring(1) : '' //删掉第一个&
}
