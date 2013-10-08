//モジュール読み込み
var http = require('http');
var to_json = require('xmljson').to_json;

//モジュールエキスポート
var xml2json = exports;

//メソッド定義
xml2json.convert = function(req, res){

	var xml = '';

	res.header('Content-Type', 'text/javascript; charset=UTF-8');

	http.get('http://rss.allabout.co.jp/aa/latest/ch/netpc/', function(response) {

		response.setEncoding('utf8');
		response.on('data', function(str) {
			xml += str;

			to_json(xml, function (error, data) {

				res.render('xml2json', { str: JSON.stringify(data) });

			});
		});
	}).on("error", function(e){
		console.log(e.message);
	});	
}