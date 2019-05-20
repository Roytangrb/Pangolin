const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./hkcustomdata/all_release_urls2.json'))
const base_url = 'https://www.customs.gov.hk'
const result = data.filter(item=>{
  return item.url !== base_url
})

fs.writeFileSync('./hkcustomdata/urls_nodummy.json', JSON.stringify(result, null, 2))
//dummy line breaks are eliminated using regex in the output file
//1979 -1980 url error manual fix