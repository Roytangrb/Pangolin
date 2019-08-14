var daBar = echarts.init(document.getElementById('seizure-da-bar'))
daBar.showLoading()

renderDaBar()

function renderDaBar() {
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
	daBar.setOption(option);
	daBar.hideLoading()
}