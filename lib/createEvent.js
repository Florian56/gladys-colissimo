var Promise = require('bluebird');
var queries = require('./queries.js');
var Config = require('./config.js');
var config = Config.config;

module.exports = function(code, data) {
	var description = `${data.titre} : ${data.date} - ${data.statut} - ${data.localisation}`;
	
	return gladys.utils.sqlUnique(queries.getEventCount, [code, description])
		.then((eventCount) => {
			if (eventCount.nb === 0) {
				var newEvent = {
					code : config.eventCode,
					value : description
				};
				
				return gladys.event.create(newEvent);
			}
			
			return Promise.resolve();
		})
};