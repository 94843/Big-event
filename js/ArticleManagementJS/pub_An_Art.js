$(function () {
  var layer = layui.layer
  var form = layui.form

  initCate()
  // 定义加载文章分类的方法
  function initCate() {
    $.ajax({
      method: "GET",
      url: "/my/article/cates",
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg("初始化文章分类失败！")
        }
        // 调用模板引擎，渲染分类的下拉菜单
        var htmlStr = template("tpl-cate", res)
        $("[name=cate_id]").html(htmlStr)
        // 一定要记得调用 form.render() 方法
        form.render()
      },
    })
  }
  //剪裁图片初始化
  initEditor()
  // 1. 初始化图片裁剪器
  var $image = $("#image")

  // 2. 裁剪选项
  var options = {
    aspectRatio: 400 / 280,
    preview: ".img-preview",
  }

  // 3. 初始化裁剪区域
  $image.cropper(options)

  //上传图片功能
  $("#pub-upload").hide()
  $("#xzfm").on("click", function () {
    $("#pub-upload").click()
  })
  $("#pub-form").on("change", function (e) {
    //获取用户选择的文件
    let cover = e.target.files
    // console.log(cover)
    if (cover.length == 0) {
      return layer.msg("未选择图片")
    }
    //获取第0项
    let coverImg = e.target.files[0]
    //转换路径
    let coverImgUrl = URL.createObjectURL(coverImg)
    console.log()
    //再页面中显示
    $("#image").cropper("destroy").attr("src", coverImgUrl).cropper(options)
  })
  //最后提交功能
  $("#pub-form").on("submit", function () {
    // console.log(1)
    e.preventDefault()
    // $.ajax({
    //   method: "POST",
    //   url: "/my/article/add",
    // })
  })
})
