Ext.define('USIMobile.Config', {
	singleton : true,

	constructor: function(config) {
		// DRY config approach
		this.config.updatesUrl = this.config.kurogoRestUrl + this.config.updatesUrl;
		this.config.coursesUrl = this.config.kurogoRestUrl + this.config.coursesUrl;
		this.config.academicCalendarUrl = this.config.kurogoRestUrl + this.config.academicCalendarUrl;
		this.config.teachingTimetablesUrl = this.config.kurogoRestUrl + this.config.teachingTimetablesUrl;
		this.config.examinationTimetablesUrl = this.config.kurogoRestUrl + this.config.examinationTimetablesUrl;
		this.config.shortNewsUrl = this.config.kurogoRestUrl + this.config.shortNewsUrl;
		this.config.detailedNewsUrl = this.config.kurogoRestUrl + this.config.detailedNewsUrl;
		this.config.menuMensaUrl = this.config.kurogoRestUrl + this.config.menuMensaUrl;
		this.config.homeOrgsUrl = this.config.kurogoRestUrl + this.config.homeOrgsUrl;

  		this.initConfig(config);
  		return this;
	},

	config : {
		// url
		kurogoRestUrl: 'https://usimobile-dev.elearninglab.org/rest/',
		//kurogoRestUrl: 'http://localhost/kurogo/www/rest/',
		updatesUrl: 'updates/check',
		coursesUrl: 'courses/get',
		academicCalendarUrl: 'academiccalendar/get',
		teachingTimetablesUrl: 'teachingtimetables/get',
		examinationTimetablesUrl: 'examinationtimetables/get',
		shortNewsUrl: 'usinews/get_list',
		detailedNewsUrl: 'usinews/get_item',
		menuMensaUrl: 'mensa/get_menu',
		homeOrgsUrl: 'aai/get_idps',
		// local paths
		fileCacheDir: 'USIMobile',
		verbose: false,
	}
});
