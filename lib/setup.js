var request = require('./request.js');
var Promise = require('bluebird');
var jsdom = require("jsdom");
var { JSDOM } = jsdom;

module.exports = function(code) {
	return request(code)
		.then((body) => {
			sails.log.error(body);
			return Promise.resolve();
		})
		.catch((error) => {
			sails.log.error(error);
			return Promise.reject();
		});
};