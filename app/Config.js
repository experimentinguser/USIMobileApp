Ext.define('USIMobile.Config', {
	singleton : true,

	constructor: function(config) {
		// DRY config approach
		this.config.updatesUrl = this.config.kurogoRestUrl + this.config.updatesUrl;
		this.config.coursesUrl = this.config.kurogoRestUrl + this.config.coursesUrl;
		this.config.academicCalendarUrl = this.config.kurogoRestUrl + this.config.academicCalendarUrl;
		this.config.teachingTimetablesUrl = this.config.kurogoRestUrl + this.config.teachingTimetablesUrl;
		this.config.examinationTimetablesUrl = this.config.kurogoRestUrl + this.config.examinationTimetablesUrl;
		this.config.peopleUrl = this.config.kurogoRestUrl + this.config.peopleUrl;
		this.config.shortNewsUrl = this.config.kurogoRestUrl + this.config.shortNewsUrl;
		this.config.detailedNewsUrl = this.config.kurogoRestUrl + this.config.detailedNewsUrl;
		this.config.menuMensaUrl = this.config.kurogoRestUrl + this.config.menuMensaUrl;
		this.config.sportActivityUrl = this.config.kurogoRestUrl + this.config.sportActivityUrl;
		this.config.homeOrgsUrl = this.config.kurogoRestUrl + this.config.homeOrgsUrl;

  		this.initConfig(config);
  		return this;
	},

	config : {
		// url
		kurogoRestUrl: 'http://your_moodle_installation_with_uniappws/rest/',
		updatesUrl: 'updates/check',
		coursesUrl: 'courses/get',
		academicCalendarUrl: 'academiccalendar/get',
		teachingTimetablesUrl: 'teachingtimetables/get',
		examinationTimetablesUrl: 'examinationtimetables/get',
		peopleUrl: 'usipeople/get',
		shortNewsUrl: 'usinews/get_list',
		detailedNewsUrl: 'usinews/get_item',
		menuMensaUrl: 'mensa/get_menu',
		sportActivityUrl: 'sport/get',
		homeOrgsUrl: 'aai/get_idps',
		// local paths
		fileCacheDir: 'USIMobile',
		verbose: false,
	}
});
