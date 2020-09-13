var myChart = echarts.init(document.getElementById('histogram'))
// var mypie = echarts.init(document.getElementById('pie'))

// 指定图表的配置项和数据
var option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
    },
  ],
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option)
// optionPie = {
//   tooltip: {
//     trigger: 'item',
//     formatter: '{a} <br/>{b}: {c} ({d}%)',
//   },
//   legend: {
//     orient: 'vertical',
//     left: 10,
//   },
//   series: [
//     {
//       name: '访问来源',
//       type: 'pie',
//       radius: ['50%', '70%'],
//       avoidLabelOverlap: false,
//       label: {
//         show: false,
//         position: 'center',
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: '30',
//           fontWeight: 'bold',
//         },
//       },
//       labelLine: {
//         show: false,
//       },
//       data: [
//         { value: 335 },
//         { value: 310 },
//         { value: 234 },
//         { value: 135 },
//         { value: 1548 },
//       ],
//     },
//   ],
// }
// mypie.setOption(optionPie)
