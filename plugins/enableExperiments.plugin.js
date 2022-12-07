/**
 * @name EnableExperiments
 * @author haiku
 * @description Enables the Discord Experiments tab in settings.
 * @version 1.0.1
 */

module.exports = class enableExperiments {
    start() {
		// Called when the plugin starts.
		let wpRequire;
		window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
		const mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
		const usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
		const nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
		try {
    		nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})
		} catch (e) {}
		const oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
		usermod.exports.default.__proto__.getCurrentUser = () => ({hasFlag: () => true})
		nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
		usermod.exports.default.__proto__.getCurrentUser = oldGetUser
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}
