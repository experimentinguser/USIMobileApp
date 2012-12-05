Ext.define('USIMobile.Config', {
	singleton : true,

	constructor: function(config) {
		// DRY config approach
		this.config.updatesUrl = this.config.kurogoRestUrl + this.config.updatesUrl;
		this.config.menuMensaUrl = this.config.kurogoRestUrl + this.config.menuMensaUrl;
		this.config.shortNewsUrl = this.config.kurogoRestUrl + this.config.shortNewsUrl;
		this.config.detailedNewsUrl = this.config.kurogoRestUrl + this.config.detailedNewsUrl;
		this.config.teachingTimetablesUrl = this.config.kurogoRestUrl + this.config.teachingTimetablesUrl;
		this.config.homeOrgsUrl = this.config.kurogoRestUrl + this.config.homeOrgsUrl;

  		this.initConfig(config);
  		return this;
	},

	config : {
		// url
		//kurogoRestUrl: 'https://usimobile-dev.elearninglab.org/rest/',
		kurogoRestUrl: 'http://localhost/kurogo/www/rest/',
		updatesUrl: 'updates/check',
		menuMensaUrl: 'mensa/get_menu',
		shortNewsUrl: 'usinews/get_list',
		detailedNewsUrl: 'usinews/get_item',
		teachingTimetablesUrl: 'teachingtimetables/get',
		homeOrgsUrl: 'aai/get_idps',
		// local paths
		fileCacheDir: 'USIMobile',
	}
});
