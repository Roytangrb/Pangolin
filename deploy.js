const ghpages = require('gh-pages');
const fs = require('fs')

fs.copyFile('./README.md', './dist/tHVzFgDQ18lvaol7/README.md', (err) => {
  if (err) throw err;
  console.log('README.md was copied to dist');
  ghpages.publish('dist',()=>{});
});