Ext.define('USIMobile.Config', {
	singleton : true,

	constructor: function(config) {
		// DRY config approach
		this.config.shortNewsUrl = this.config.kurogoRestUrl + this.config.shortNewsUrl;
		this.config.detailedNewsUrl = this.config.kurogoRestUrl + this.config.detailedNewsUrl;

  		this.initConfig(config);
  		return this;
	},

	config : {
		// url
		kurogoRestUrl: 'https://usimobile-dev.elearninglab.org/rest/',
		shortNewsUrl: 'usinews/get_list',
		detailedNewsUrl: 'usinews/get',
		homeOrgsUrl: 'https://usimobile-dev.elearninglab.org/rest/aai/get_idps',
		// local paths
		fileCacheDir: 'USIMobile',
	}
});
