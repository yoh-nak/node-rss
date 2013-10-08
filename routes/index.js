
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.xml2json = function(req, res){

	var xml2json = require('../models/xml2json');

	xml2json.convert(req, res);

};