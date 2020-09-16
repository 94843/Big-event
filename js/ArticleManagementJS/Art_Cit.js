$(function () {
  //获取数据，渲染页面
  function loadArt() {
    $.ajax({
      method: "get",
      url: "/my/article/cates",
      success: function (res) {
        var htmlStr = template("tpl-table", res)
        $("tbody").html(htmlStr)
      },
    })
  }
  var layer = layui.layer
  var form = layui.form
  loadArt()
  //点击弹出层
  $("#btnAddCate").on("click", function () {
    // console.log(1)
    layer.open({
      type: 1,
      area: ["500px", "250px"],
      title: "添加文章分类",
      content: $("#dialog-add").html(),
    })
  })

  //调用接口完成添加
  $("body").on("submit", "#form-add", function (e) {
    e.preventDefault()
    $.ajax({
      method: "POST",
      url: "/my/article/addcates",
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          layer.msg(res.message)
        }
        loadArt()
        // layer.closeAll()
      },
    })
  })

  //删除功能
  // $("tbody").on("click", ".layui-btn-danger", function () {
  //   // console.log($(this).attr("dele_id"))
  //   let id = $(this).attr("dele_id")
  //   //询问
  //   layer.confirm("确定要删除么？", { icon: 3, title: "提示" }, function (
  //     index
  //   ) {
  //     //do something
  //     $.ajax({
  //       method: "GET",
  //       url: "/my/article/deletecate/" + id,
  //       success: function (res) {
  //         if (res.status !== 0) {
  //           layer.msg(res.message)
  //           return
  //         }
  //         layer.msg(res.message)
  //         //重新渲染页面
  //         loadArt()

  //         layer.close(index)
  //       },
  //     })
  //   })
  // })
  $("tbody").on("click", ".layui-btn-danger", function () {
    // console.log($(this).attr("dele_id"))
    let id = $(this).attr("dele_id")
    $.ajax({
      method: "GET",
      url: "/my/article/deletecate/" + id,
      success: function (res) {
        if (res.status !== 0) {
          layer.msg(res.message)
          return
        }
        layer.msg(res.message)
        //重新渲染页面
        loadArt()
      },
    })
  })
  //编辑功能
  //点击弹出修改框
  var indexEdit = null
  $("tbody").on("click", "#edit", function () {
    // console.log(1)
    indexEdit = layer.open({
      type: 1,
      area: ["500px", "250px"],
      title: "修改文章分类",
      content: $("#edit-add").html(),
    })
    //根据ID获取内容
    var id = $(this).attr("dele_id")
    $.ajax({
      method: "get",
      url: "/my/article/cates/" + id,
      success: function (res) {
        form.val("edit_forme", res.data)
      },
    })
  })

  $("body").on("submit", "#edit_form", function (e) {
    e.preventDefault()
    // console.log(1)
    $.ajax({
      method: "post",
      url: "/my/article/updatecate",
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg(res.message)
        }
        layer.msg(res.message)
        layer.close(indexEdit)
        loadArt()
      },
    })
  })
})
