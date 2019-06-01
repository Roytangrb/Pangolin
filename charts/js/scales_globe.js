var myChart = echarts.init(document.getElementById('scales_globe'));

fetch('../assets/data-1483975567865-BJOcimZIg.json')
  .then(res => res.json())
  .then(json => {
      render(json)
  })

function render(data) {
  console.log(data)
  function getAirportCoord(idx) {
      return [data.airports[idx][3], data.airports[idx][4]];
  }
  var routes = data.routes.map(function(airline) {
      return [
          getAirportCoord(airline[1]),
          getAirportCoord(airline[2])
      ];
  });

  myChart.setOption({
      backgroundColor: '#000',
      globe: {
          baseTexture: '../assets/data-1491837049070-rJZtl7Y6x.jpg',
          heightTexture: '../assets/data-1491889019097-rJQYikcpl.jpg',

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
              autoRotate: false
          }
      },
      series: {

          type: 'lines3D',

          coordinateSystem: 'globe',

          blendMode: 'lighter',

          lineStyle: {
              width: 1,
              color: 'rgb(50, 50, 150)',
              opacity: 0.1
          },

          data: routes
      }
  });
}