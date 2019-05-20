const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const month_list = JSON.parse(fs.readFileSync('./hkcustomdata/month_list.json'))
const base_url = 'https://www.customs.gov.hk'
let data = [];
let index = 0;
let errorData = [];
/* 
* @param {array} month_list
* @return {array} data {..month_list, title, date, content}
*/
function getTitleDateText(){
  //recur base case
  if (index === month_list.length) {
    fs.writeFileSync('./hkcustomdata/all_release_urls2.json', JSON.stringify(data, null, 2))
    fs.writeFileSync('./hkcustomdata/all_release_urls_error2.json', JSON.stringify(errorData, null, 2))
    return
  }

  let entry = month_list[index]
  index++

  axios.get(entry.href)
    .then(response=>{
      //push successful scrapped data
      let records_in_month = extractDateTitle(response.data)
      records_in_month.map((record)=>{
        data.push({
          year: entry.year,
          month: entry.month,
          ...record
        })
      })
      console.log(index+' success')
      getTitleDateText()
    })
    .catch(err=>{
      console.log(index+' error')
      errorData.push({
        ...entry
      })
    }) 
}

/* 
* @param {string} html
* @return {array} record {title, date, url}
*/
function extractDateTitle(html){
  let records = []
  const $ = cheerio.load(html);
  const table = $('table.altbg')[0]
  $('tbody tr', table).each((i, record)=>{
    let record_date = ''
    let record_title = ''
    let record_url = ''
    $('td', record).each((i, item)=>{// item date and title td
      if (i===0){ //date
        record_date = $(item).text()
      } else {
        record_title = $('a', item).text()
        record_url = $('a', item).attr('href')
      }
    })
    records.push({
      date: record_date,
      title: record_title,
      url: base_url + record_url
    })
  })
  return records
}

getTitleDateText()