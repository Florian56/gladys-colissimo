var Promise = require('bluebird');
var queries = require('./queries.js');

module.exports = function(data) {
	var text = `${data.date} - ${data.statut} - ${data.localisation}`;
	
	return gladys.utils.sqlUnique(queries.getNotificationCount, [data.titre, text])
		.then(notificationCount => {
			if (notificationCount.nb === 0) {
				var notification = {
					user: 1,
					title: data.titre,
					text: text,
					icon: 'fa fa-home',
					iconColor: 'bg-light-blue',
					priority: 0
				};
				
				return gladys.notification.create(notification);
			}
			
			return Promise.resolve();
		});
};