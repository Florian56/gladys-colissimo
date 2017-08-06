module.exports = {
	getEventCount : `
		SELECT COUNT(*) nb
		FROM event
			ON event.eventtype = eventtype.id
		WHERE eventtype.code = ?
		AND event.value = ?`,
	
	deleteAllEvents : `
		DELETE
		FROM event
		WHERE eventtype IN (
			SELECT id
			FROM eventtype
			WHERE code = ?
		)`,
	
	deleteEventType : `
		DELETE
		FROM eventtype
		WHERE code = ?`
};
