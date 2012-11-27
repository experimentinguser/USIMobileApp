Ext.define('USIMobile.Session', {
	singleton : true,

	constructor: function(config) {
  		this.initConfig(config);
  		return this;
	},

	config : {
		username: '',
		course: null,
		settingsStore: null,
		aaiAccountStore: null,
		shortNewsStore: null,
		detailedNewsStore: null,
	}
	
});
