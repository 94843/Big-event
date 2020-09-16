$(function () {
  // console.log(1)
  //定义数据
  var q = {
    pagenum: 1, // 页码值，默认请求第一页的数据
    pagesize: 2, // 每页显示几条数据，默认每页显示2条
    cate_id: "", // 文章分类的 Id
    state: "", // 文章的发布状态
  }
  //调用函数
  initTable()

  // 获取文章列表数据的方法
  function initTable() {
    //发起请求
    $.ajax({
      method: "GET",
      url: "/my/article/list",
      data: q, //携带数据
      success: function (res) {
        // console.log(res.data)
        if (res.status !== 0) {
          return layer.msg("获取文章列表失败！")
        }
        // 使用模板引擎渲染页面的数据
        var htmlStr = template("tpl-table", res)
        $("tbody").html(htmlStr)
      },
    })
  }
})
