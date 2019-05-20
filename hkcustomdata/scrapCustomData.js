const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const dir_url_tc = 'https://www.customs.gov.hk/tc/publication_press/press/index_archive.html'
const base_url = 'https://www.customs.gov.hk'
/* 
* @param {string} url
* @return {array} month_list {year: [string], month: [string], href: [string]}
*/
function getEachMonthList(url){
  let month_list = []
  axios.get(url)
    .then(response=> {
      month_list = extractMonthList(response.data)
      fs.writeFileSync('./hkcustomdata/month_list.json', JSON.stringify(month_list, null, 2))
      // getTitleDateText(month_list)
    })
    .catch(err=> {
      console.log(err)
    })
}

/* 
* @param {string} html
* @return {array} month_list {year: [string], month: [string], href: [string]}
*/
function extractMonthList(html){
  let data = []
  const $ = cheerio.load(html);
  $('div#content_area table').each((i, table)=> {
    let year = $('tr th', table).text()
    $('tr td a', table).each((i, month)=>{
      let month_text = $(month).text()
      let month_href = $(month).attr('href')
      data.push({
        year: year,
        month: month_text,
        href: base_url + month_href
      })
    })
  })
  return data
}

getEachMonthList(dir_url_tc)

