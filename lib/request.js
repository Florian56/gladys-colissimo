var Promise = require('bluebird');
var request = require('request');
var Config = require('./config.js');
var config = Config.config;

module.exports = function(code) {
	return new Promise(function(resolve, reject) {
		var url = `${config.url}${code}`;

		request({url : url}, function(err, res, body) {
			if(err) {
				return reject(err);
			}
			
			if(res.statusCode !== 200) {
				return reject(new Error(`Status code failed : ${res.statusCode}`));
			}
			
			return resolve(body);
		});
	});
};