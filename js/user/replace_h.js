let layer = layui.layer
// 1.1 获取裁剪区域的 DOM 元素
var $image = $("#image")
// 1.2 配置选项
const options = {
  // 纵横比
  aspectRatio: 1,
  // 指定预览区域
  preview: ".img-preview",
}

// 1.3 创建裁剪区域
$image.cropper(options)
//隐藏上传按钮
$("#file").hide()
//点击事件
$("#upload_h").on("click", function () {
  $("#file").click()
})
//给表单绑定change事件
$("#file").on("change", function (e) {
  //获取选择的文件
  let fileImg = e.target.files
  if (fileImg.length == 0) {
    return layer.msg("未选择文件")
  }
  console.log(fileImg)
  //拿到选择的文件
  let file = e.target.files[0]
  console.log(file)
  //转路径形式
  let imgUrl = URL.createObjectURL(file)
  console.log(imgUrl)
  //cropper()为croppper里面的方法
  $("#image").cropper("destroy").attr("src", imgUrl).cropper(options)
  //销毁原来的图           更改src值           重新刷新页面
})
//点击上传到服务器
$("#determine").on("click", function () {
  //拿到用户上传到页面中的图片
  var dataUrl = $("#image")
    .cropper(
      //利用cropper方法创建一个画布
      "getCroppedCanvas",
      {
        width: 100,
        height: 100,
      }
    )
    .toDataURL("image/png") //将画布上的内容转换为base64格式的字符串，只有这样才能传到后台服务器
  // console.log(dataUrl)
  //调用接口
  $.ajax({
    method: "POST",
    url: "/my/update/avatar",
    data: {
      avatar: dataUrl,
    },
    success: function (res) {
      if (res.status !== 0) {
        layer.msg(res.message)
        return
      }
      layer.msg(res.message)
      //成功后重新获取用户信息并重新渲染页面中左上角的头像
      window.parent.getUserInfo()
    },
  })
})
