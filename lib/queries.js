module.exports = {
	getNotificationCount : `
		SELECT COUNT(*) nb
		FROM notification
		WHERE title = ?
		AND text = ?`,
	
	deleteAlarm : `
		DELETE
		FROM event
		WHERE eventtype IN (
			SELECT id
			FROM eventtype
			WHERE code = ?
		)`,
	
	deleteScript : `
		DELETE
		FROM eventtype
		WHERE code = ?`,
	
	deleteScenario : `
		DELETE
		FROM eventtype
		WHERE code = ?`,
	
	deleteAllNotifications : `
		DELETE
		FROM eventtype
		WHERE code = ?`
};