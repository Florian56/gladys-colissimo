var config = require('./config.js').config;

module.exports = function() {
	var alarm = {
		name : 'Colissimo',
		dayOfWeek : -1,
		cronRule : '0 * * * *',
		active : 1,
		user : 1
	};
	
	var script = {
		name : 'Colissimo',
		text :
			`
			var numeros = ['numero1', 'numero2'];
			
			Promise.mapSeries(numeros, numero => gladys.modules.colissimo.exec(numero));
			`,
		user : 1
	};
	
	return gladys.script.create(script)
		.then(scriptInfos => [gladys.alarm.create(alarm), scriptInfos])
		.spread((alarmInfos, scriptInfos) => gladys.scenario.import({
			trigger : {
				title : 'Colissimo',
				condition_template : `alarm == ${alarmInfos.id}`,
				active : 1,
				code : 'alarm',
				user : 1
			},
			conditions : [],
			actions : {
				code : 'script.exec',
				params : {id : scriptInfos.id}
			}
		}));
};