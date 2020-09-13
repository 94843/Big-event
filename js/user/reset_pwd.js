//校验表单
// let form = layui.form
// form.verify({
//   pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
//   samePwd: function (value) {
//     if (value === $("[name=oldPwd]").val()) {
//       return "新旧密码不能相同！"
//     }
//   },
//   rePwd: function (value) {
//     if (value !== $("[name=newPwd]").val()) {
//       return "两次密码不一致！"
//     }
//   },
// })
//获取用户输入内容并调用接口
//表单提交事件
$("#modify_pwd").on("submit", function (e) {
  e.preventDefault()
  // console.log(1)
  // let data = {
  //   oldPwd: $("#modify_pwd[name=oldPwd]").val(),
  //   newPwd: $("#modify_pwd[name=newPwd]").val(),
  // }
  // console.log(data)

  //获取表单内容
  let data = $(this).serialize()
  console.log(data)
  //发送ajax请求
  $.ajax({
    method: "post",
    data: data,
    url: "/my/updatepwd",
    success: function (res) {
      // console.log(res)
      if (res.status !== 0) {
        layui.layer.msg(res.message)
        return
      }
      layui.layer.msg(res.message)
      //清空表单内容
      $("#modify_pwd")[0].reset()
    },
  })
})
