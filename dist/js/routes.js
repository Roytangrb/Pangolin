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
	        type: 'linesGL',

	        coordinateSystem: 'geo',

	        blendMode: 'lighter',

	        dimensions: ['value'],

	        data: new Float64Array(),
	        polyline: true,
	        large: true,

	        lineStyle: {
	            color: 'orange',
	            opacity: 0.3
	        }
	    }]
	}
  chinaRoutes.setOption(option);
}