var cheerio = require('cheerio');
var request = require('request')
url = 'http://www.banggood.com/DOOGEE-VALENCIA-2-Y100-Pro-5-inch-4G-LTE-MTK6735-Quad-core-Smartphone-p-979299.html?bid=11760'
request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			var nombre,cats = [], link;
			nombre = $('[itemprop="name"]').html()
			link = $('[property="og:url"]').attr('content')
			catsLinks = $('[typeof="v:Breadcrumb"] a')
			catsLinks.splice( 0, 1 );
			for (index = 0; index < catsLinks.length; ++index) {
				cats.push(catsLinks[index]['children'][0]['data']);
			}
			console.log(nombre,cats,link);
		}
	})