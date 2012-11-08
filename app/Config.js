Ext.define('USIMobile.Config', {
	singleton : true,

	constructor: function(config) {
		// DRY config approach
  		this.initConfig(config);
  		return this;
	},

	config : {
		homeOrgsUrl : 'https://usimobile-dev.elearninglab.org/rest/aai/get_idps',
	}
});
