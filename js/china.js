//https://echarts.apache.org/examples/en/editor.html?c=map-usa
const fillChinaNA = data => {
  const provinces = [{'name': '上海', 'value': 0},{'name': '云南', 'value': 0},{'name': '内蒙古', 'value': 0},{'name': '北京', 'value': 0},{'name': '吉林', 'value': 0},{'name': '四川', 'value': 0},{'name': '天津', 'value': 0},{'name': '宁夏', 'value': 0},{'name': '安徽', 'value': 0},{'name': '山东', 'value': 0},{'name': '山西', 'value': 0},{'name': '广东', 'value': 0},{'name': '广西', 'value': 0},{'name': '新疆', 'value': 0},{'name': '江苏', 'value': 0},{'name': '江西', 'value': 0},{'name': '河北', 'value': 0},{'name': '河南', 'value': 0},{'name': '浙江', 'value': 0},{'name': '海南', 'value': 0},{'name': '湖北', 'value': 0},{'name': '湖南', 'value': 0},{'name': '甘肃', 'value': 0},{'name': '福建', 'value': 0},{'name': '西藏', 'value': 0},{'name': '贵州', 'value': 0},{'name': '辽宁', 'value': 0},{'name': '重庆', 'value': 0},{'name': '陕西', 'value': 0},{'name': '青海', 'value': 0},{'name': '黑龙江', 'value': 0}]  
  return provinces.map(province=>(data.find(d=> province.name == d.name) || province))
}
const initChart = id => {
  const chart = echarts.init(document.getElementById(id))
  chart.showLoading()
  return chart
}

fetch('assets/chinageo.json')
  .then(res => res.json())
  .then(json => {
    echarts.registerMap('China', json, {});//register map as China

    //render Pharmaceutical Companies with Products from Pangolins
    renderChinaChoropleth({
      chart: initChart('med-comp'),
      title: 'Pharmaceutical Companies with Products from Pangolins',
      sub: 'Total: 301 Companies',
      data: [{'name': '上海', 'value': 4},{'name': '云南', 'value': 3},{'name': '内蒙古', 'value': 17},{'name': '北京', 'value': 17},{'name': '吉林', 'value': 58},{'name': '四川', 'value': 4},{'name': '天津', 'value': 17},{'name': '安徽', 'value': 3},{'name': '山东', 'value': 10},{'name': '山西', 'value': 18},{'name': '广东', 'value': 4},{'name': '广西', 'value': 1},{'name': '新疆', 'value': 1},{'name': '江苏', 'value': 3},{'name': '江西', 'value': 6},{'name': '河北', 'value': 22},{'name': '河南', 'value': 20},{'name': '浙江', 'value': 5},{'name': '湖北', 'value': 7},{'name': '湖南', 'value': 3},{'name': '甘肃', 'value': 5},{'name': '贵州', 'value': 7},{'name': '辽宁', 'value': 26},{'name': '重庆', 'value': 2},{'name': '陕西', 'value': 7},{'name': '青海', 'value': 3},{'name': '黑龙江', 'value': 28}],
      max: 58
    })

    renderChinaChoropleth({
      chart: initChart('hospital'),
      title: 'Designated Hospitals Using Products from Pangolins',
      sub: 'Total: 712 hospitals',
      data: [{'name': '上海', 'value': 17},{'name': '云南', 'value': 13},{'name': '内蒙古', 'value': 24},{'name': '北京', 'value': 19},{'name': '吉林', 'value': 32},{'name': '四川', 'value': 43},{'name': '天津', 'value': 7},{'name': '宁夏', 'value': 10},{'name': '安徽', 'value': 29},{'name': '山东', 'value': 27},{'name': '山西', 'value': 17},{'name': '广东', 'value': 31},{'name': '广西', 'value': 22},{'name': '新疆', 'value': 18},{'name': '江苏', 'value': 25},{'name': '江西', 'value': 35},{'name': '河北', 'value': 31},{'name': '河南', 'value': 63},{'name': '浙江', 'value': 18},{'name': '海南', 'value': 4},{'name': '湖北', 'value': 19},{'name': '湖南', 'value': 42},{'name': '甘肃', 'value': 16},{'name': '福建', 'value': 16},{'name': '西藏', 'value': 9},{'name': '贵州', 'value': 20},{'name': '辽宁', 'value': 25},{'name': '重庆', 'value': 13},{'name': '陕西', 'value': 40},{'name': '青海', 'value': 11},{'name': '黑龙江', 'value': 20}],
      max: 63
    })

    renderChinaChoropleth({
      chart: initChart('seizure-court-all-scale'),
      title: 'Intances of court judgement \nrelated to pangolin scale', 
      sub: '2017-2019 163 cases (40%)', 
      data: [{'name': '上海', 'value': 2}, {'name': '云南', 'value': 78}, {'name': '内蒙古', 'value': 1}, {'name': '北京', 'value': 1}, {'name': '吉林', 'value': 1}, {'name': '四川', 'value': 3}, {'name': '安徽', 'value': 6}, {'name': '山东', 'value': 1}, {'name': '广东', 'value': 19}, {'name': '广西', 'value': 6}, {'name': '江苏', 'value': 2}, {'name': '江西', 'value': 2}, {'name': '河北', 'value': 1}, {'name': '河南', 'value': 1}, {'name': '浙江', 'value': 22}, {'name': '湖北', 'value': 1}, {'name': '湖南', 'value': 5}, {'name': '福建', 'value': 5}, {'name': '西藏', 'value': 2}, {'name': '贵州', 'value': 1}, {'name': '辽宁', 'value': 2}, {'name': '重庆', 'value': 1}],
      max: 78
    })

    renderChinaChoropleth({
      chart: initChart('seizure-court-all-live'),
      title: 'Intances of court judgement \nrelated to live pangolin', 
      sub: '2017-2019 171 cases (42%)', 
      data: [{'name': '上海', 'value': 1}, {'name': '云南', 'value': 35}, {'name': '吉林', 'value': 1}, {'name': '广东', 'value': 33}, {'name': '广西', 'value': 26}, {'name': '江苏', 'value': 5}, {'name': '河北', 'value': 1}, {'name': '河南', 'value': 4}, {'name': '浙江', 'value': 40}, {'name': '海南', 'value': 2}, {'name': '湖南', 'value': 7}, {'name': '福建', 'value': 15}, {'name': '贵州', 'value': 1}],
      max: 40
    })

    renderChinaChoropleth({
      chart: initChart('seizure-court-all-dead'),
      title: 'Intances of court judgement \nrelated to dead pangolin', 
      sub: '2017-2019 143 cases (35%)', 
      data: [{'name': '云南', 'value': 26}, {'name': '吉林', 'value': 1}, {'name': '广东', 'value': 28}, {'name': '广西', 'value': 20}, {'name': '江苏', 'value': 4}, {'name': '江西', 'value': 1}, {'name': '河北', 'value': 2}, {'name': '河南', 'value': 2}, {'name': '浙江', 'value': 37}, {'name': '海南', 'value': 1}, {'name': '湖北', 'value': 1}, {'name': '湖南', 'value': 6}, {'name': '福建', 'value': 13}, {'name': '重庆', 'value': 1}],
      max: 37
    })

    renderChinaChoropleth({
      chart: initChart('seizure-consumption'),
      title: 'Intances of court judgement \nrelated to pangolin consumption',
      sub: 'Total: 91/406 Courts cases',
      data: [{'name': '上海', 'value': 1},{'name': '云南', 'value': 9},{'name': '广东', 'value': 19},{'name': '广西', 'value': 6},{'name': '江苏', 'value': 2},{'name': '江西', 'value': 1},{'name': '河南', 'value': 1},{'name': '浙江', 'value': 32},{'name': '海南', 'value': 1},{'name': '湖南', 'value': 12},{'name': '福建', 'value': 6},{'name': '重庆', 'value': 1}],
      max: 32,
    })

    renderChinaChoropleth({
      chart: initChart('seizure-medicine'),
      title: 'Intances of court judgement \nrelated to pangolin medecine',
      sub: 'Total: 36/406 Courts cases',
      data:[{'name': '上海', 'value': 1},{'name': '云南', 'value': 13},{'name': '北京', 'value': 1},{'name': '四川', 'value': 3},{'name': '安徽', 'value': 4},{'name': '广东', 'value': 8},{'name': '广西', 'value': 1},{'name': '江西', 'value': 3},{'name': '浙江', 'value': 1},{'name': '西藏', 'value': 1},],
      max: 13,
    })

    renderChinaChoropleth({
      chart: initChart('seizure-court-all'),
      title: 'Intances of court judgement',
      sub: 'Total: 406 Courts cases',
      //20180827 new 18 云南 11 上海 2 西藏 1 广西 1 广东 3
      data: [{'name': '天津', 'value': 0},{'name': '宁夏', 'value':  0},{'name': '新疆', 'value':  0},{'name': '甘肃', 'value':  0},{'name': '陕西', 'value':  0},{'name': '青海', 'value':  0},{'name': '黑龙江', 'value': 0},{'name': '山西', 'value':  0},{'name': '上海', 'value': 4},{'name': '云南', 'value': 121},{'name': '内蒙古', 'value': 3},{'name': '北京', 'value': 2},{'name': '吉林', 'value': 1},{'name': '四川', 'value': 3},{'name': '安徽', 'value': 7},{'name': '山东', 'value': 1},{'name': '广东', 'value': 59},{'name': '广西', 'value': 46},{'name': '江苏', 'value': 9},{'name': '江西', 'value': 6},{'name': '河北', 'value': 3},{'name': '河南', 'value': 8},{'name': '浙江', 'value': 74},{'name': '海南', 'value': 2},{'name': '湖北', 'value': 3},{'name': '湖南', 'value': 24},{'name': '福建', 'value': 23},{'name': '西藏', 'value': 2},{'name': '贵州', 'value': 2},{'name': '辽宁', 'value': 2},{'name': '重庆', 'value': 1}],
      max: 121,    
    })

    renderChinaChoropleth({
      chart: initChart('seizure-locations'),
      title: 'Seizures locations',
      sub: 'Total: 144 Seizures',
      data: [{'name': '云南', 'value':  65},{'name': '内蒙古', 'value': 2},{'name': '吉林', 'value':  1},{'name': '四川', 'value':  2},{'name': '安徽', 'value':  2},{'name': '广东', 'value':  17},{'name': '广西', 'value':  16},{'name': '江西', 'value':  1},{'name': '河北', 'value':  1},{'name': '浙江', 'value':  18},{'name': '湖北', 'value':  4},{'name': '湖南', 'value':  5},{'name': '甘肃', 'value':  0},{'name': '福建', 'value':  8},{'name': '辽宁', 'value':  1},{'name': '重庆', 'value':  1}],
      max: 65
    })

    renderChinaChoropleth({
      chart: initChart('seizure-item-worth'),
      title: 'Worth of Pangolin Seizures (in CNY)',
      sub: 'Total: 65 valid cases',
      data: [{"name": "安徽", "value": 12446},{"name": "福建", "value": 11690},{"name": "广东", "value": 243152 + 3572464},{"name": "广西", "value": 2093},{"name": "河北", "value": 26720},{"name": "湖北", "value": 5888},{"name": "湖南", "value": 139020},{"name": "辽宁", "value": 1336},{"name": "内蒙古", "value": 668},{"name": "云南", "value": 2966379},{"name": "浙江", "value": 19385}],
      max: 243152 + 3572464, // added a missed guangdong case, more to come
    })

    fetch('assets/scale-stock-2008-2015.json')
      .then(res => res.json())
      .then(data => {
        renderChinaChoropleth({
          chart: initChart('scale-stock'),
          title: 'Control volumes of pangolin scales usage (kg)',
          sub: 'State Forestry Administration (2008 - 2015)',
          data: data.map(d=>({
            name: d.province,
            value: d['2014-2015']
          })),
          max: 35548.21,
        })
      })

    fetch('assets/lnglat_hospital.json')
      .then(res => res.json())
      .then(data => {
        renderChinaScatter({
          chart: initChart('hospital-scatter'),
          title: 'Designated Hospitals Using Products from Pangolins',
          sub: 'Total: 712 hospitals',
          data: data
        })
      })

    renderChinaChoroplethMultiSeries({
      chart: initChart('seizure-locations-by-part'),
      title: 'Seizures locations By Form',
      sub: '',
      series: [
          {
            name: 'dead',
            data: fillChinaNA([
              {"name": "福建", "value": 1}, 
              {"name": "广东", "value": 5}, 
              {"name": "广西", "value": 2}, 
              {"name": "云南", "value": 3}
            ])
          },
          {
            name: 'frozen',
            data: fillChinaNA([
              {"name": "福建", "value": 2},
              {"name": "广东", "value": 1},
              {"name": "广西", "value": 6},
              {"name": "河北", "value": 1},
              {"name": "湖北", "value": 1},
              {"name": "湖南", "value": 3},
              {"name": "江西", "value": 1},
              {"name": "云南", "value": 4},
              {"name": "浙江", "value": 6}
            ])
          },
          {
            name: 'live',
            data: fillChinaNA([
              {"name": "福建", "value": 2},
              {"name": "广东", "value": 10},
              {"name": "广西", "value": 8},
              {"name": "湖北", "value": 1},
              {"name": "湖南", "value": 2},
              {"name": "云南", "value": 11},
              {"name": "浙江", "value": 6}
            ])
          },
          {
            name: 'parts',
            data: fillChinaNA([
              {"name": "安徽", "value": 2}, 
              {"name": "重庆", "value": 1}, 
              {"name": "福建", "value": 3}, 
              {"name": "广东", "value": 6}, 
              {"name": "广西", "value": 4}, 
              {"name": "湖北", "value": 2}, 
              {"name": "湖南", "value": 1}, 
              {"name": "吉林", "value": 1}, 
              {"name": "辽宁", "value": 1}, 
              {"name": "内蒙古", "value": 2}, 
              {"name": "四川", "value": 2}, 
              {"name": "云南", "value": 50}, 
              {"name": "浙江", "value": 9}
            ])
          }
      ],
      max: 50
    })

    renderChinaChoroplethMultiSeries({
      chart: initChart('seizure-locations-by-term'),
      title: 'Seizures locations By Term',
      sub: '',
      series: [
          {
            name: 'scale',
            data:fillChinaNA([
              {"name": "安徽", "value": 2},
              {"name": "重庆", "value": 1},
              {"name": "福建", "value": 3},
              {"name": "广东", "value": 5},
              {"name": "广西", "value": 3},
              {"name": "湖北", "value": 2},
              {"name": "四川", "value": 2},
              {"name": "云南", "value": 48},
              {"name": "浙江", "value": 6}
            ])
          },
          {
            name: 'meat',
            data: fillChinaNA([
              {"name": "重庆", "value": 1},
              {"name": "福建", "value": 1},
              {"name": "广东", "value": 1},
              {"name": "广西", "value": 1},
              {"name": "吉林", "value": 1},
              {"name": "云南", "value": 2},
              {"name": "浙江", "value": 3}
            ])
          },
          {
            name: 'products',
            data: fillChinaNA([
              {"name": "湖南", "value": 1},
              {"name": "云南", "value": 1},
              {"name": "浙江", "value": 1}
            ])
          },
          {
            name: 'claw',
            data: fillChinaNA([
              {"name": "内蒙古", "value": 2},
              {"name": "云南", "value": 1}
            ])
          },
          {
            name: 'skin',
            data: fillChinaNA([
              {"name": "辽宁", "value": 1},
              {"name": "云南", "value": 3}
            ])
          }
      ],
      max: 48
    })

    renderBar({
      chart: initChart('seizure-da-bar')
    })
})

function renderChinaScatter (obj) {
    //https://echarts.baidu.com/blog/2016/04/28/echarts-map-tutorial.html
    var {chart, title, sub, data} = obj
    chart.hideLoading();
  
    option = {
        title: {
            text: title,
            subtext: sub,
            sublink: '',
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                return params.name
            }
        },
        toolbox: {
            show: false,
        },
        geo: {
            map: 'China',
            itemStyle: {					// 定义样式
                normal: {					// 普通状态下的样式
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {					// 高亮状态下的样式
                    areaColor: '#2a333d'
                }
            },
        },

        series: [{
            name: 'hospital',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            data: data
        }]
    };
  
    chart.setOption(option);
};

function renderChinaChoroplethMultiSeries (obj) {
  var {chart, title, sub, series, max} = obj
  chart.hideLoading();

  var serie_template = {
    type: 'map',
    map: 'China',
    showLegendSymbol: false,
  }

  option = {
      title: {
          text: title,
          subtext: sub,
          sublink: '',
          left: 'right'
      },
      tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
              return params.name + ': ' + params.value;
          }
      },
      visualMap: {
          left: 'right',
          min: 0,
          max: max,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['Max','Min'],           // 文本，默认为数值文本
          calculable: true
      },
      toolbox: {
          show: false,
      },
      legend: {
        data: series.map(s=>s.name),
        left: 'left',
        orient: 'vertical',
        selectedMode: 'single',
      },
      // series: {
      //   name: 
      //   data:
      // }
      series: series.map(s=> ({
        ...s,
        ...serie_template
      }))
  };

  chart.setOption(option);
};

function renderChinaChoropleth (obj) {
  var {chart, title, sub, data, max} = obj
  chart.hideLoading();

  option = {
      title: {
          text: title,
          subtext: sub,
          sublink: '',
          left: 'right'
      },
      tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
              return params.name + ': ' + params.value;
          }
      },
      visualMap: {
          left: 'right',
          min: 0,
          max: max,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['Max','Min'],           // 文本，默认为数值文本
          calculable: true
      },
      toolbox: {
          show: false,
      },
      series: [
          {
              name: '',
              type: 'map',
              map: 'China',
              itemStyle:{
                  emphasis:{label:{show:true}}
              },
              data: fillChinaNA(data)
          }
      ]
  };

  chart.setOption(option);
};

function renderBar(obj) {
  var {chart} = obj

  var option = {
    title: {
      text: 'Seizures Detection Agents',
      subtext: 'Total: 134 cases',
      sublink: '',
      left: 'right'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
          return params.name + ': ' + params.value;
      }
    },
    xAxis: {
      type: 'category',
      data: ['police',
      'forest \npolice',
      'frontier \ninspection \nstation',
      'border \ndefence \nforce',
      'market \nsupervision \nadministration',
      'customs',
      'airport \nsecurity',
      'traffic n\police']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [62, 46, 13, 7, 2, 2, 1, 1],
      type: 'bar'
    }]
  };
  chart.setOption(option);
  chart.hideLoading()
}