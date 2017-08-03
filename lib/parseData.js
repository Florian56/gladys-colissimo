var Promise = require('bluebird');
var jsdom = require("jsdom");
var { JSDOM } = jsdom;

module.exports = function(body) {
	var { document } = (new JSDOM(body)).window;
	
	return Promise.resolve(document.querySelector("p.sr-only").textContent);
};