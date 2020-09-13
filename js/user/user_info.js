$(function () {
  //封装请求获取用户信息的函数
  // $.get('http://ajax.frontend.itheima.net/my/userinfo', function (res) {
  //   console.log(res)
  // })
  var form = layui.form
  $.ajax({
    method: 'get',
    url: '/my/userinfo',
    // headers: {
    //   Authorization: localStorage.getItem('token') || '',
    // },
    success: function (res) {
      // console.log(res.data)
      form.val('initUser', res.data)
    },
  })
})
