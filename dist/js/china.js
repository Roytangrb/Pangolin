//https://echarts.apache.org/examples/en/editor.html?c=map-usa
const initChart = id => {
  const chart = echarts.init(document.getElementById(id))
  chart.showLoading()
  return chart
}
var map1 = initChart('choropleth-map1')
var map2 = initChart('choropleth-map2')
var hosScatter = initChart('scatter')
var consumption = initChart('seizure-consumption')
var courtAll = initChart('seizure-court-all')
var seizureLoc = initChart('seizure-locations')
var seizureLocByParts = initChart('seizure-locations-by-part')
var seizureLocByTerms = initChart('seizure-locations-by-term')
var seizureItemWorth = initChart('seizure-item-worth')

fetch('assets/chinageo.json')
  .then(res => res.json())
  .then(json => {
      echarts.registerMap('China', json, {});//register map as China
      render1()
      render2()
      fetchScatterData()
      renderConsumption()
      renderAllCourtLoc()
      renderSeizureLoc()
      renderSeizureLocByParts()
      renderSeizureLocByTerms()
      renderSeizureItemWorth()
  })

function fetchScatterData(){
    fetch('assets/lnglat_hospital.json')
      .then(res => res.json())
      .then(data => {
        renderHosScatter(data)
      })
}

function render1 () {
    map1.hideLoading();
    option = {
        title: {
            text: 'Pharmaceutical Companies with Products from Pangolins',
            subtext: 'Total: 301 Companies',
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
            max: 58,
            inRange: {
                color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text:['Max','Min'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: false,
            //orient: 'vertical',
            // left: 'left',
            // top: 'top',
            // feature: {
            //     dataView: {readOnly: false},
            //     restore: {},
            //     saveAsImage: {}
            // }
        },
        series: [
            {
                name: '',
                type: 'map',
                map: 'China',
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                data:[
                  {'name': '上海', 'value': 4},
                  {'name': '云南', 'value': 3},
                  {'name': '内蒙古', 'value': 17},
                  {'name': '北京', 'value': 17},
                  {'name': '吉林', 'value': 58},
                  {'name': '四川', 'value': 4},
                  {'name': '天津', 'value': 17},
                  {'name': '安徽', 'value': 3},
                  {'name': '山东', 'value': 10},
                  {'name': '山西', 'value': 18},
                  {'name': '广东', 'value': 4},
                  {'name': '广西', 'value': 1},
                  {'name': '新疆', 'value': 1},
                  {'name': '江苏', 'value': 3},
                  {'name': '江西', 'value': 6},
                  {'name': '河北', 'value': 22},
                  {'name': '河南', 'value': 20},
                  {'name': '浙江', 'value': 5},
                  {'name': '湖北', 'value': 7},
                  {'name': '湖南', 'value': 3},
                  {'name': '甘肃', 'value': 5},
                  {'name': '贵州', 'value': 7},
                  {'name': '辽宁', 'value': 26},
                  {'name': '重庆', 'value': 2},
                  {'name': '陕西', 'value': 7},
                  {'name': '青海', 'value': 3},
                  {'name': '黑龙江', 'value': 28}
                ]
            }
        ]
    };

    map1.setOption(option);
};

function render2 () {
  map2.hideLoading();

  option = {
      title: {
          text: 'Designated Hospitals Using Products from Pangolins',
          subtext: 'Total: 712 hospitals',
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
          max: 63,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['Max','Min'],           // 文本，默认为数值文本
          calculable: true
      },
      toolbox: {
          show: false,
          //orient: 'vertical',
          // left: 'left',
          // top: 'top',
          // feature: {
          //     dataView: {readOnly: false},
          //     restore: {},
          //     saveAsImage: {}
          // }
      },
      series: [
          {
              name: '',
              type: 'map',
              map: 'China',
              itemStyle:{
                  emphasis:{label:{show:true}}
              },
              data:[
                {'name': '上海', 'value': 17},
                {'name': '云南', 'value': 13},
                {'name': '内蒙古', 'value': 24},
                {'name': '北京', 'value': 19},
                {'name': '吉林', 'value': 32},
                {'name': '四川', 'value': 43},
                {'name': '天津', 'value': 7},
                {'name': '宁夏', 'value': 10},
                {'name': '安徽', 'value': 29},
                {'name': '山东', 'value': 27},
                {'name': '山西', 'value': 17},
                {'name': '广东', 'value': 31},
                {'name': '广西', 'value': 22},
                {'name': '新疆', 'value': 18},
                {'name': '江苏', 'value': 25},
                {'name': '江西', 'value': 35},
                {'name': '河北', 'value': 31},
                {'name': '河南', 'value': 63},
                {'name': '浙江', 'value': 18},
                {'name': '海南', 'value': 4},
                {'name': '湖北', 'value': 19},
                {'name': '湖南', 'value': 42},
                {'name': '甘肃', 'value': 16},
                {'name': '福建', 'value': 16},
                {'name': '西藏', 'value': 9},
                {'name': '贵州', 'value': 20},
                {'name': '辽宁', 'value': 25},
                {'name': '重庆', 'value': 13},
                {'name': '陕西', 'value': 40},
                {'name': '青海', 'value': 11},
                {'name': '黑龙江', 'value': 20}
              ]
          }
      ]
  };

  map2.setOption(option);
};

function renderHosScatter (data) {
    //https://echarts.baidu.com/blog/2016/04/28/echarts-map-tutorial.html
    hosScatter.hideLoading();
  
    option = {
        title: {
            text: 'Designated Hospitals Using Products from Pangolins',
            subtext: 'Total: 712 hospitals',
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
  
    hosScatter.setOption(option);
};

function renderConsumption () {
    //https://echarts.baidu.com/blog/2016/04/28/echarts-map-tutorial.html
    consumption.hideLoading();
  
    option = {
        title: {
            text: 'Intances of court judgement \nrelated to pangolin consumption',
            subtext: 'Total: 91 Courts cases',
            sublink: '',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                return params.name + ': ' + params.value;
            }
        },
        toolbox: {
            show: false,
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 32,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['Max','Min'],           // 文本，默认为数值文本
          calculable: true
      },
      series: [
          {
              name: '',
              type: 'map',
              map: 'China',
              itemStyle:{
                  emphasis:{label:{show:true}}
              },
              data:[
                  {'name': '内蒙古', 'value': 0},
                  {'name': '北京', 'value': 0},
                  {'name': '吉林', 'value': 0},
                  {'name': '四川', 'value': 0},
                  {'name': '天津', 'value': 0},
                  {'name': '宁夏', 'value': 0},
                  {'name': '安徽', 'value': 0},
                  {'name': '山东', 'value': 0},
                  {'name': '山西', 'value': 0},
                  {'name': '新疆', 'value': 0},
                  {'name': '河北', 'value': 0},
                  {'name': '湖北', 'value': 0},
                  {'name': '甘肃', 'value': 0},
                  {'name': '西藏', 'value': 0},
                  {'name': '贵州', 'value': 0},
                  {'name': '辽宁', 'value': 0},
                  {'name': '陕西', 'value': 0},
                  {'name': '青海', 'value': 0},
                  {'name': '黑龙江', 'value': 0},
                  {'name': '上海', 'value': 1},
                  {'name': '云南', 'value': 9},
                  {'name': '广东', 'value': 19},
                  {'name': '广西', 'value': 6},
                  {'name': '江苏', 'value': 2},
                  {'name': '江西', 'value': 1},
                  {'name': '河南', 'value': 1},
                  {'name': '浙江', 'value': 32},
                  {'name': '海南', 'value': 1},
                  {'name': '湖南', 'value': 12},
                  {'name': '福建', 'value': 6},
                  {'name': '重庆', 'value': 1}
              ]
          }
      ]
    };
  
    consumption.setOption(option);
};

function renderAllCourtLoc (data) {
    //https://echarts.baidu.com/blog/2016/04/28/echarts-map-tutorial.html
    courtAll.hideLoading();
  
    option = {
        title: {
            text: 'Intances of court judgement',
            subtext: 'Total: 388 Courts cases',
            sublink: '',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                return params.name + ': ' + params.value;
            }
        },
        toolbox: {
            show: false,
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 110,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['Max','Min'],           // 文本，默认为数值文本
          calculable: true
      },
      series: [
          {
              name: '',
              type: 'map',
              map: 'China',
              itemStyle:{
                  emphasis:{label:{show:true}}
              },
              data:[
                {'name': '天津', 'value': 0},
                {'name': '宁夏', 'value':  0},
                {'name': '新疆', 'value':  0},
                {'name': '甘肃', 'value':  0},
                {'name': '陕西', 'value':  0},
                {'name': '青海', 'value':  0},
                {'name': '黑龙江', 'value': 0},
                {'name': '山西', 'value':  0},
                 {'name': '上海', 'value': 2},
                 {'name': '云南', 'value': 110},
                 {'name': '内蒙古', 'value': 3},
                 {'name': '北京', 'value': 2},
                 {'name': '吉林', 'value': 1},
                 {'name': '四川', 'value': 3},
                 {'name': '安徽', 'value': 7},
                 {'name': '山东', 'value': 1},
                 {'name': '广东', 'value': 56},
                 {'name': '广西', 'value': 45},
                 {'name': '江苏', 'value': 9},
                 {'name': '江西', 'value': 6},
                 {'name': '河北', 'value': 3},
                 {'name': '河南', 'value': 8},
                 {'name': '浙江', 'value': 74},
                 {'name': '海南', 'value': 2},
                 {'name': '湖北', 'value': 3},
                 {'name': '湖南', 'value': 24},
                 {'name': '福建', 'value': 23},
                 {'name': '西藏', 'value': 1},
                 {'name': '贵州', 'value': 2},
                 {'name': '辽宁', 'value': 2},
                 {'name': '重庆', 'value': 1}
              ]
          }
      ]
    };
  
    courtAll.setOption(option);
};

function renderSeizureLoc () {
  seizureLoc.hideLoading();

  option = {
      title: {
          text: 'Seizures locations',
          subtext: 'Total: 144 Seizures',
          sublink: 'Source: court judgements from 2017-2019',
          left: 'left'
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
          max: 65,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['Max','Min'],           // 文本，默认为数值文本
          calculable: true
      },
      toolbox: {
          show: false,
          //orient: 'vertical',
          // left: 'left',
          // top: 'top',
          // feature: {
          //     dataView: {readOnly: false},
          //     restore: {},
          //     saveAsImage: {}
          // }
      },
      series: [
          {
              name: 'all',
              type: 'map',
              map: 'China',
              itemStyle:{
                  emphasis:{label:{show:true}}
              },
              data:[
                {'name': '上海', 'value':  0},
                {'name': '云南', 'value':  65},
                {'name': '内蒙古', 'value': 2},
                {'name': '北京', 'value':  0},
                {'name': '吉林', 'value':  1},
                {'name': '四川', 'value':  2},
                {'name': '天津', 'value': 0},
                {'name': '宁夏', 'value':  0},
                {'name': '安徽', 'value':  2},
                {'name': '山东', 'value':  0},
                {'name': '山西', 'value':  0},
                {'name': '广东', 'value':  17},
                {'name': '广西', 'value':  16},
                {'name': '新疆', 'value':  0},
                {'name': '江苏', 'value':  0},
                {'name': '江西', 'value':  1},
                {'name': '河北', 'value':  1},
                {'name': '河南', 'value':  0},
                {'name': '浙江', 'value':  18},
                {'name': '海南', 'value': 0},
                {'name': '湖北', 'value':  4},
                {'name': '湖南', 'value':  5},
                {'name': '甘肃', 'value':  0},
                {'name': '福建', 'value':  8},
                {'name': '西藏', 'value': 0},
                {'name': '贵州', 'value':  0},
                {'name': '辽宁', 'value':  1},
                {'name': '重庆', 'value':  1},
                {'name': '陕西', 'value':  0},
                {'name': '青海', 'value':  0},
                {'name': '黑龙江', 'value': 0}
              ]
          },
      ]
  };

  seizureLoc.setOption(option);
};

function renderSeizureLocByParts () {
  seizureLocByParts.hideLoading();

  option = {
      title: {
          text: 'Seizures locations By Form',
          subtext: '',
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
          max: 50,
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
        data: ['dead','frozen', 'live', 'parts'],
        left: 'left',
        orient: 'vertical',
        selectedMode: 'multiple',
        selected: {
          'dead': true,'frozen': false, 'live': false, 'parts': false
        }
      },
      series: [
          {
              name: 'dead',
              type: 'map',
              map: 'China',
              showLegendSymbol: false,
              data:[
                {"name": "福建", "value": 1}, 
                {"name": "广东", "value": 5}, 
                {"name": "广西", "value": 2}, 
                {"name": "云南", "value": 3}
              ]
          },
          {
            name: 'frozen',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
              {"name": "福建", "value": 2},
              {"name": "广东", "value": 1},
              {"name": "广西", "value": 6},
              {"name": "河北", "value": 1},
              {"name": "湖北", "value": 1},
              {"name": "湖南", "value": 3},
              {"name": "江西", "value": 1},
              {"name": "云南", "value": 4},
              {"name": "浙江", "value": 6}
            ]
          },
          {
            name: 'live',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
              {"name": "福建", "value": 2},
              {"name": "广东", "value": 10},
              {"name": "广西", "value": 8},
              {"name": "湖北", "value": 1},
              {"name": "湖南", "value": 2},
              {"name": "云南", "value": 11},
              {"name": "浙江", "value": 6}
            ]
          },
          {
            name: 'parts',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
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
            ]
          }
      ]
  };

  seizureLocByParts.setOption(option);
};

function renderSeizureLocByTerms () {
  seizureLocByTerms.hideLoading();

  option = {
      title: {
          text: 'Seizures locations By Term',
          subtext: '',
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
          max: 48,
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
        data: ['scale','meat', 'products', 'claw', 'skin'],
        left: 'left',
        orient: 'vertical',
        selectedMode: 'multiple',
        selected: {
          'scale': true,'meat': false, 'products': false, 'claw': false, 'skin': false
        }
      },
      series: [
          {
              name: 'scale',
              type: 'map',
              map: 'China',
              showLegendSymbol: false,
              data:[
                {"name": "安徽", "value": 2},
                {"name": "重庆", "value": 1},
                {"name": "福建", "value": 3},
                {"name": "广东", "value": 5},
                {"name": "广西", "value": 3},
                {"name": "湖北", "value": 2},
                {"name": "四川", "value": 2},
                {"name": "云南", "value": 48},
                {"name": "浙江", "value": 6}
              ]
          },
          {
            name: 'meat',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
              {"name": "重庆", "value": 1},
              {"name": "福建", "value": 1},
              {"name": "广东", "value": 1},
              {"name": "广西", "value": 1},
              {"name": "吉林", "value": 1},
              {"name": "云南", "value": 2},
              {"name": "浙江", "value": 3}
            ]
          },
          {
            name: 'products',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
              {"name": "湖南", "value": 1},
              {"name": "云南", "value": 1},
              {"name": "浙江", "value": 1}
            ]
          },
          {
            name: 'claw',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
              {"name": "内蒙古", "value": 2},
              {"name": "云南", "value": 1}
            ]
          },
          {
            name: 'skin',
            type: 'map',
            map: 'China',
            showLegendSymbol: false,
            data: [
              {"name": "辽宁", "value": 1},
              {"name": "云南", "value": 3}
            ]
          }
      ]
  };

  seizureLocByTerms.setOption(option);
};

function renderSeizureItemWorth () {
    seizureItemWorth.hideLoading();
    option = {
        title: {
            text: 'Worth of Pangolin Seizures (in CNY)',
            subtext: 'Total: 65 valid cases',
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
            max: 2966379,
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
                data:[
                  {"name": "安徽", "value": 12446},
                  {"name": "福建", "value": 11690},
                  {"name": "广东", "value": 243152},
                  {"name": "广西", "value": 2093},
                  {"name": "河北", "value": 26720},
                  {"name": "湖北", "value": 5888},
                  {"name": "湖南", "value": 139020},
                  {"name": "辽宁", "value": 1336},
                  {"name": "内蒙古", "value": 668},
                  {"name": "云南", "value": 2966379},
                  {"name": "浙江", "value": 19385}
                ]
            }
        ]
    };

    seizureItemWorth.setOption(option);
};