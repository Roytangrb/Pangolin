//https://gallery.echartsjs.com/editor.html?c=xrJ5YWDj7M
var myChart = echarts.init(document.getElementById('scales_globe'));

fetch('assets/scales.json')
  .then(res => res.json())
  .then(json => {
      render(json)
  })

function render(data) {  
  var routes_import = data.import.map(d => d.route)
  var routes_export = data.export.map(d => d.route)

  myChart.setOption({
      backgroundColor: '#b7c0ce',
      globe: {
          baseTexture: 'assets/baseTexture.jpg',
          heightTexture: 'assets/heightTexture.jpg',

          shading: 'lambert',

          light: {
              ambient: {
                  intensity: 0.4
              },
              main: {
                  intensity: 0.4
              }
          },

          viewControl: {
              distance: 200,
              alpha: 0,
              beta: 90,
              autoRotate: true
          }
      },
      series: [{

          type: 'lines3D',

          coordinateSystem: 'globe',
          
          effect: {
            show: true
          },

          blendMode: 'lighter',

          lineStyle: {
              width: 6,
              color: 'rgb(50, 50, 150)',
              opacity: 0.2
          },

          data: routes_import
      },{
          type: 'lines3D',

          coordinateSystem: 'globe',

          blendMode: 'lighter',
          
          effect: {
            show: true
          },
          
          lineStyle: {
            width: 6,
            color: 'rgb(50, 50, 150)',
            opacity: 0.2
          },

          data: routes_export
      }]
  });
}