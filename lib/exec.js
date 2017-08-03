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
					name : 'Colissimo',
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
			sails.log.error(resultatParsing);
			sails.log.error(deviceAndDevicesType.types[0].id);
			
			return Promise.resolve();
		})
		.catch((error) => {
			sails.log.error(error);
			return Promise.reject();
		});
};