module.exports = function(sails) {
    return {
		uninstall : require('./lib/uninstall.js'),
		exec : require('./lib/exec.js')
    };
};