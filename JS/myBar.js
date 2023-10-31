// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('bar'));

// 指定图表的配置项和数据
var option = {
title: {
text: ""
},
  grid: {
    left: 10,
    containLabel: true,
    bottom: 5,
    top: 40,
    right: 30
  },
    tooltip: {},
    legend: {
    data: ['举办国']
    },
    yAxis: {
      inverse: true,
      data: ['Europe', 'North America', 'Asia', 'Oceania', 'South America', 'Africa'],
      
      axisLabel:{//修改坐标系字体颜色
        // rotate:40,
        fontFamily: "Comic Sans MS",
        fontSize:15,
        show:true,
        textStyle:{
          color:"#000000"
        }
        },
    },
    xAxis: {
      
      axisLabel:{//修改坐标系字体颜色
        show:true,
        fontFamily: "Comic Sans MS",
        fontSize:13,//调整坐标轴字体大小
        textStyle:{
          color:"#000000"
        }
        },
    },
    series: [
    {
    name: '总举办次数',
    type: 'bar',
    colorBy:'data',//change color
    color: [
      '#B22222',
        '#CD5C5C',
        '#F08080',
        '#FFA07A',
        '#FFDAB9',
        '#FAF0E6'
      ],
    data: [30, 12, 8, 2, 1, 0]
    }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


