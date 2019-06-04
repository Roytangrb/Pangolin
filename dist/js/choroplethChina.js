//https://echarts.apache.org/examples/en/editor.html?c=map-usa

var map1 = echarts.init(document.getElementById('choropleth-map1'));
var map2 = echarts.init(document.getElementById('choropleth-map2'));
map1.showLoading();
map2.showLoading();

fetch('assets/chinageo.json')
  .then(res => res.json())
  .then(json => {
      render1(json)
      render2(json)
  })

function render1 (geo) {
    console.log(geo)
    map1.hideLoading();

    echarts.registerMap('China', geo, {});
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
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 58,
            inRange: {
                color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text:['High','Low'],           // 文本，默认为数值文本
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
                roam: true,
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


function render2 (geo) {
  map2.hideLoading();

  echarts.registerMap('China', geo, {});
  option = {
      title: {
          text: 'Designated Hospital Using Products from Pangolins',
          subtext: 'Total: 712 hospitals',
          sublink: '',
          left: 'right'
      },
      tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
              var value = (params.value + '').split('.');
              value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
              return params.seriesName + '<br/>' + params.name + ': ' + value;
          }
      },
      visualMap: {
          left: 'right',
          min: 0,
          max: 63,
          inRange: {
              color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text:['High','Low'],           // 文本，默认为数值文本
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
              roam: true,
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