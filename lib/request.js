var Promise = require('bluebird');
var request = require('request');
var config = require('./config.js').config;

module.exports = function(code) {
	return new Promise((resolve, reject) => {
		var url = `${config.url}${code}`;

		request({url : url}, (err, res, body) => {
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