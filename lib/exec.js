var Promise = require('bluebird');
var parseData = require('./parseData.js');
var request = require('./request.js');
var createNotification = require('./createNotification.js');

module.exports = function(code) {
	return request(code)
		.then(body => parseData(body))
		.then(resultParsing => {
			sails.log.info(`[Colissimo] Réception d'informations valides pour le code ${code} : ${resultParsing.date} - ${resultParsing.statut} - ${resultParsing.localisation}`);
			return createNotification(resultParsing);
		})
		.catch(error => {
			sails.log.error(`[Colissimo] Erreur pour le code ${code} : ${error}`);
			return Promise.reject(error);
		});
};