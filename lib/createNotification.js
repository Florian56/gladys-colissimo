var Promise = require('bluebird');
var queries = require('./queries.js');
var config = require('./config.js').config;

module.exports = function(code, data) {
	var text = `Le statut du colissimo ${code} a changé : ${data.statut} Sa nouvelle localisation est : ${data.localisation}`;
	
	return gladys.utils.sqlUnique(queries.getNotificationCount, [data.titre, text])
		.then(notificationCount => {
			if (notificationCount.nb === 0) {
				var notification = {
					user: 1,
					title: data.titre,
					text: text,
					link: config.nom,
					icon: 'fa fa-home',
					iconColor: 'bg-light-blue',
					priority: 0
				};
				
				return gladys.notification.create(notification);
			}
			
			return Promise.resolve();
		});
};