//https://echarts.apache.org/examples/zh/editor.html?c=geo-lines

const initChart = id => {
  const chart = echarts.init(document.getElementById(id))
  chart.showLoading()
  return chart
}

const chinaFromto = initChart('seizure-china-from-to')
const scalesInExport = initChart('cites-scale-import-export')

fetch('assets/worldgeo.json')
  .then(res => res.json())
  .then(json => {
      echarts.registerMap('World', json, {});//register map as World
      render()
  })

function render(){
	fetch('assets/china-from-to-coords.json')
		.then(res => res.json())
		.then(json => {
      renderchinaFromto(json)
		})

	fetch('assets/scales.json')
		.then(res => res.json())
		.then(json => {
			renderScaleInExport(json)
		})
}

function renderchinaFromto(data){
	chinaFromto.hideLoading()

	option = {
			title: {
        text: 'Reported starting points and destination of pangolin illegal trades',
        subtext: '',
        sublink: '',
        left: 'right',
        textStyle: {
        	color: '#fff',
        }
      },
	    backgroundColor: '#111',
	    tooltip : {
        trigger: 'item'
	    },
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
	            opacity: 0.3,
	            width: 2,
	            curveness: 0.2,
	        },
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0,
	            // symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
	            // symbolSize: 15
	        },
	        // polyline: true, //for more than two end points in a path
	        data: data
	    }]
	}
  chinaFromto.setOption(option);
}


function renderScaleInExport(data){
	scalesInExport.hideLoading()

	var quantity_scale = quantity => {
		//original scale = (0, 3500]
		//width scale = [1px, 15px]
		let width = quantity / 3500 * 10
		return width < 1 ? 1 : width
	}

	option = {
			title: {
        text: 'Reported scales import and export paths (Cites all years)',
        subtext: '',
        sublink: '',
        left: 'right',
        textStyle: {
        	color: '#fff',
        }
      },
	    backgroundColor: '#111',
	    tooltip : {
        trigger: 'item'
	    },
	    geo: {
	        // center: [103.81907349, 36.5617654559],
	        zoom: 2,
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
	    legend: {
	    	data: ['import','export'],
        left: 'left',
        orient: 'vertical',
        selectedMode: 'single',
        selected: {},
        textStyle: {
        	color: '#fff',
        }
	    },
	    series: [{
	    	name: 'import',
        type: 'lines',
        blendMode: 'lighter',
        lineStyle: {
            color: 'orange',
            opacity: 0.2,
            width: 2,
            curveness: 0.2,
        },
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            // symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            // symbolSize: 15
        },
        data: data.import.map(d=>({
        	coords: d.route,
        	lineStyle: {width: quantity_scale(d.quantity)}
        }))
	    }, {
	    	name: 'export',
	    	type: 'lines',
        blendMode: 'lighter',
        lineStyle: {
            color: 'green',
            opacity: 0.2,
            width: 2,
            curveness: 0.2,
        },
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            // symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            // symbolSize: 15
        },
        data: data.export.map(d=>({
        	coords: d.route,
        	lineStyle: {width: quantity_scale(d.quantity)}
        }))
    }]
	}
  scalesInExport.setOption(option);
}