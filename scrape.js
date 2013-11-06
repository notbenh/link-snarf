var request = require('request');
var cheerio = require('cheerio');

request('http://blog.notbenh.info', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('a').each(function(i, element){
      console.log($(this).attr('href'));
    });
  }
});
