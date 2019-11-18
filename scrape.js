var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.9news.com/weather')
  .wait('.current-weather__temp')
  .evaluate(function() {
    var temp = document.querySelector('.current-weather__temp')
    return temp.innerText
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

