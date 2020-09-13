$(function () {
  var form = layui.form
  //获取并渲染用户信息
  function initUserInfo() {
    $.ajax({
      method: "get",
      url: "/my/userinfo",
      success: function (res) {
        form.val("initUser", res.data)
      },
    })
  }
  initUserInfo()

  //重置功能
  $("#btnReset").on("click", function (e) {
    // 阻止表单的默认重置行为
    e.preventDefault()
    initUserInfo()
  })

  //修改功能
  $(".layui-form").on("submit", function (e) {
    e.preventDefault()
    $.ajax({
      method: "post",
      url: "/my/userinfo",
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          layui.layer.msg(res.message)
        }
        layui.layer.msg(res.message)
        //成功后重新渲染页面
        window.parent.getUserInfo()
      },
    })
  })
})
