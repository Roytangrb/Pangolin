//https://echarts.apache.org/examples/zh/editor.html?c=geo-lines

const initChart = id => {
  const chart = echarts.init(document.getElementById(id))
  chart.showLoading()
  return chart
}

const chinaRoutes = initChart('seizure-china-routes')

fetch('assets/worldgeo.json')
  .then(res => res.json())
  .then(json => {
      echarts.registerMap('World', json, {});//register map as World
      renderChinaRoutes()
  })

function renderChinaRoutes(){
	chinaRoutes.hideLoading()

	option = {
	    progressive: 20000,
	    backgroundColor: '#111',
	    geo: {
	        center: [103.81907349, 36.5617654559],
	        zoom: 4,
	        map: 'World',
	        roam: true,
	        silent: true,
	        itemStyle: {
	            normal: {
	                color: 'transparent',
	                borderColor: 'rgba(255,255,255,0.3)',
	                borderWidth: 1
	            }
	        }
	    },
	    series: [{
	        type: 'lines',
	        blendMode: 'lighter',
	        lineStyle: {
	            color: 'orange',
	            opacity: 0.3
	        },
	        symbol: ['none', 'arrow'],
	        symbolSize: 10,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0,
	            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
	            symbolSize: 15
	        },
	        data: [{
	        	fromName: 'random1',
	        	toName: 'random2',
	        	coords: [[103.81907349, 36.5617654559],[100.4454754, 21.95735901]],	
	        }],
	    }]
	}
  chinaRoutes.setOption(option);
}