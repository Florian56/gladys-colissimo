var config = require('./config.js').config;

module.exports = function() {
	var alarm = {
		name : config.nom,
		dayofweek : -1,
		cronrule : '0 * * * *',
		autoWakeUp : 0,
		active : 1,
		user : 1
	};
	
	var script = {
		name : config.nom,
		user : 1,
		text :
`var numeros = ['numero1', 'numero2'];

numeros.forEach(numero => gladys.modules.colissimo.exec(numero));`
	};
	
	return gladys.script.create(script)
		.then(scriptInfos => [gladys.alarm.create(alarm), scriptInfos])
		.spread((alarmInfos, scriptInfos) => gladys.scenario.import({
			trigger : {
				title : config.nom,
				condition_template : `alarm == ${alarmInfos.id}`,
				active : 1,
				code : 'alarm',
				user : 1
			},
			conditions : [],
			actions : [{
				code : 'script.exec',
				params : {id : scriptInfos.id}
			}]
		}));
};