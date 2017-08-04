var Promise = require('bluebird');
var parseData = require('./parseData.js');
var request = require('./request.js');

module.exports = function(code) {
	return request(code)
		.then((body) => {
			return parseData(body);
		})
		.then((resultatParsing) => {
			var device = {
				device : {
					identifier : '0',
					name : 'Colissimo',
					protocol : 'colissimo',
					service : 'colissimo'
				},
				types : [{
					name : resultatParsing.titre,
					type : 'colissimo',
					identifier : code,
					sensor : true,
					min : 0,
					max : 0
				}]
			};
			
			return [resultatParsing, gladys.device.create(device)];
		})
		.spread((resultatParsing, deviceAndDevicesType) => {
			var data = {
				value : resultatParsing.date + ' - ' + resultatParsing.statut + ' - ' + resultatParsing.localisation,
				devicetype : deviceAndDevicesType.types[0].id
			};
			sails.log.info(JSON.stringify(data));
			return Promise.resolve();
			//return gladys.deviceState.create(data);
		})
		.catch((error) => {
			sails.log.error(error);
			return Promise.reject(error);
		});
};