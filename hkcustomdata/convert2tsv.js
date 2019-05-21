const fs = require('fs')

const json = JSON.parse(fs.readFileSync('./hkcustomdata/all_data.json', 'utf-8')) 
let tsv = 'year\tmonth\tdate\ttitle\turl\tarticle\n'
for (let i = 0; i < json.length; i++){
  let cur = json[i]
  tsv = tsv + `${cur.year}\t${cur.month}\t${cur.date}\t${cur.title}\t${cur.url}\t${cur.article}\n`
}

fs.writeFileSync('./hkcustomdata/all_data.tsv', tsv)