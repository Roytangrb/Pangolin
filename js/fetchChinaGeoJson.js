const fs = require('fs')
const fetch = require('node-fetch')
fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/china.json')
  .then(res=>res.json())
  .then(json=>{
    fs.writeFile('./chinageo.json', JSON.stringify(json), function(){
      console.log('success')
    })
  })
  .catch(err=>{
    console.log(err)
  })

