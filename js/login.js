$(function () {
  //切换登陆注册盒子
  $('.gogo').on('click', function () {
    $('.login-box').hide().siblings().show()
  })
  $('.come').on('click', function () {
    $('.reg-box').hide().siblings().show()
  })
  //表单验证，正则
  var form = layui.form
  form.verify({
    username: function (value, item) {
      if (!new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$').test(value)) {
        return '用户名不能有特殊字符'
      }
      if (/(^\_)|(\__)|(\_+$)/.test(value)) {
        return "用户名首尾不能出现下划线'_'"
      }
      if (/^\d+\d+\d$/.test(value)) {
        return '用户名不能全为数字'
      }
    },
    pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
  })
  //调用注册接口，注册账号
  $('#reg-btn').on('click', function (e) {
    e.preventDefault()
    let uname = $('#uname').val().trim()
    let passw = $('#passw').val().trim()
    console.log(uname, passw)
    if (passw != $('#confirm-pwd').val()) {
      alert('两次密码不一致')
      $('#confirm-pwd').val('')
      return
    } else {
      //向接口发起请求
      $.post(
        'http://ajax.frontend.itheima.net/api/reguser',
        { username: uname, password: passw },
        function (res) {
          console.log(res)
          if (res.status !== 0) {
            return layer.msg(res.message)
          }
          $('.come').click()
          return layer.msg('注册成功，请登录')
        }
      )
    }
  })
  //注册功能结束

  //登陆账号
  $('#login-btn').on('click', function (e) {
    e.preventDefault()
    // console.log(1)
    let data = $('#login').serialize()
    // let uname=$('#l-name').val()
    // let passw=$('#l-pass').val()
    console.log(data)
    $.post('http://ajax.frontend.itheima.net/api/login', data, function (res) {
      console.log(res)
      if (res.status !== 0) {
        return layer.msg('该用户不存在或账号密码有误')
      }
      layer.msg('登陆成功，nb！！！')
      location.href = './index.html'
    })
  })
})
