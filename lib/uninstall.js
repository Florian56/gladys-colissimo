var queries = require('./queries.js');
var Config = require('./config.js');
var config = Config.config;

module.exports = function() {
	return gladys.utils.sql(queries.deleteAllEvents, [config.eventCode])
		.then(() => {
			gladys.utils.sql(queries.deleteEventType, [config.eventCode])
		});
};