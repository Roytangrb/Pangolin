const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const releases = JSON.parse(fs.readFileSync('./hkcustomdata/urls_nodummy.json'))
let index = 0;
let data = [];
let errorData = [];

function getArticle(){
  if (index === releases.length) {
    fs.writeFileSync('./hkcustomdata/all_data.json', JSON.stringify(data, null, 2))
    fs.writeFileSync('./hkcustomdata/all_data_errorlog.json', JSON.stringify(errorData, null, 2))
    return
  }

  let entry = releases[index]
  let _url = entry.url
  index++

  axios.get(_url)
    .then(response=> {
      let _article = extractArticle(response.data)
      data.push({
        ...entry,
        article: _article
      })
      console.log(index+' success')
      getArticle()
    })
    .catch(err=>{
      console.log(err)
      console.log(index+' error')
      errorData.push({
        ...entry
      })
      getArticle()
    }) 
}

function extractArticle(html){
  let article = ''
  const $ = cheerio.load(html)
  $('p').each((i, p)=>{
    article = article + $(p).text() + '\n'
  })
  return article
}

getArticle()