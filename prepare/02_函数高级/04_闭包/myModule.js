function myModule() {
  //私有数据
  var msg = 'My atguigu'
  //操作数据的函数
  function doSomething() {
    console.log('doSomething() '+msg.toUpperCase())  //转换成大写英文字母
  }
  function doOtherthing () {
    console.log('doOtherthing() '+msg.toLowerCase())   //转换成小写英文字母
  }

  //向外暴露对象(给外部使用的方法)
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }

 // return doSomething
}
