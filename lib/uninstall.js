var queries = require('./queries.js');
var config = require('./config.js').config;

module.exports = function() {
	return gladys.utils.sql(queries.deleteAllEvents, [config.eventCode])
		.then(() => gladys.utils.sql(queries.deleteEventType, [config.eventCode]));
};