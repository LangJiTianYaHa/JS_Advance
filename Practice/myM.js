/**
 * Created by PC on 2021/3/28.
 */
function myM() {
  //私有数据
  var msg = 'My atguigu'
  //操作数据的函数
  function doSomething() {
    console.log("doSomething"+msg.toUpperCase())   //转换成大写
  }
  function doOtherthing() {
    console.log("doOtherthing"+msg.toLowerCase())   //转换成小写
  }
  
  //向外暴露函数
  return {
    doSomething:doSomething,
    doOtherthing:doOtherthing
  }
  
}