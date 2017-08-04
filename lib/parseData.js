var Promise = require('bluebird');
var jsdom = require("jsdom");
var { JSDOM } = jsdom;

module.exports = function(body) {
	var { document } = (new JSDOM(body)).window;
	
	var resultsSuivi = document.querySelector("div.results-suivi");
	if (resultsSuivi != null) {
		var titre = resultsSuivi.querySelector("h2").textContent;
		var date = resultsSuivi.querySelector("tbody>tr>td:nth-child(1)>p").textContent;
		var statut = resultsSuivi.querySelector("tbody>tr>td:nth-child(2)>p").textContent;
		var localisation = resultsSuivi.querySelector("tbody>tr>td:nth-child(3)>p").textContent;
		
		return Promise.resolve({
			titre : titre,
			date : date,
			statut : statut,
			localisation : localisation
		});
	}
	else {
		var errorContainer = document.querySelector("div#webservices-errors-container");
		var error = errorContainer.querySelector("div.media-body>p").textContent;
		
		return Promise.reject(error);
	}
};