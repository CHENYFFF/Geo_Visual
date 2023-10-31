var chartDom = document.getElementById('countrybar');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    y:'bottom'
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    axisLabel:{//修改坐标系字体颜色
        // rotate:40,
        fontFamily: "Comic Sans MS",
        fontSize:15,
        show:true,
        // textStyle:{
        //   color:"#000000"
        // }
        },
  },
  xAxis: {
    inverse:true,
    type: 'category',
    axisLabel:{//修改坐标系字体颜色
        // rotate:40,
        fontFamily: "Comic Sans MS",
        fontSize:15,
        rotate:40,
        show:true,
        textStyle:{
          color:"#000000"
        }
        },
    data: ['America',' France',' Japan',' Italy',' Canada',' Germany',' United Kingdom',' Korea',' China',' Australia',' Greece',' Switzerland',' Austria',' Norway',' Sweden',' Belgium',' Netherlands',' Finland',' Mexico',' Soviet Union',' Spain',' Brazil',' Yugoslavia',' Russia']
  },
  series: [
    {
      name: 'Summer',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        color:'#000000',
        
        fontSize:13,

      },
      emphasis: {
        focus: 'series'
      },
      data: [4,2,2,1,1,2,3,1,1,2,2,,,,1,1,1,1,1,1,1,1,,],
      itemStyle:{
        normal:{
            color:'#E9967A'
        }
    },
    },
    {
      name: 'Winter',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [4,3,2,2,2,1,,1,1,,,2,2,2,,,,,,,,,1,1],
      itemStyle:{
        normal:{
            color:'	#4682B4'
        }
    }
    }
  ]
};

option && myChart.setOption(option);
