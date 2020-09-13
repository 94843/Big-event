$.ajax({
  method: "get",
  url: "/my/article/cates",
  success: function (res) {
    console.log(res.data)
    var htmlStr = template("tpl-table", res)
    $("tbody").html(htmlStr)
  },
})
