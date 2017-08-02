var config = require('./config.js');
var request = require('request');
var Promise = require('bluebird');

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