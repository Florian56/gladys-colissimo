var Config = require('./config.js');
var config = Config.config;

module.exports = function() {
	var eventType = {
		code : config.eventCode,
		name : config.eventName,
		category : config.eventCategory,
		description : config.eventDescription
	};
	
	return gladys.eventType.create(eventType);
};