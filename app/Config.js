Ext.define('USIMobile.Config', {
	singleton : true,

	constructor: function(config) {
		// DRY config approach
		this.config.authenticationUrl = this.config.kurogoRestUrl + this.config.authenticationUrl;
		this.config.updatesUrl = this.config.kurogoRestUrl + this.config.updatesUrl;
		this.config.coursesUrl = this.config.kurogoRestUrl + this.config.coursesUrl;
		this.config.academicCalendarUrl = this.config.kurogoRestUrl + this.config.academicCalendarUrl;
		this.config.teachingTimetablesUrl = this.config.kurogoRestUrl + this.config.teachingTimetablesUrl;
		this.config.examinationTimetablesUrl = this.config.kurogoRestUrl + this.config.examinationTimetablesUrl;
		this.config.peopleUrl = this.config.kurogoRestUrl + this.config.peopleUrl;
		this.config.shortNewsUrl = this.config.kurogoRestUrl + this.config.shortNewsUrl;
		this.config.detailedNewsUrl = this.config.kurogoRestUrl + this.config.detailedNewsUrl;
		this.config.shortEventNewsUrl = this.config.kurogoRestUrl + this.config.shortEventNewsUrl;
		this.config.detailedEventNewsUrl = this.config.kurogoRestUrl + this.config.detailedEventNewsUrl;
		this.config.shortCommunityNewsUrl = this.config.kurogoRestUrl + this.config.shortCommunityNewsUrl;
		this.config.detailedCommunityNewsUrl = this.config.kurogoRestUrl + this.config.detailedCommunityNewsUrl;
		this.config.menuMensaUrl = this.config.kurogoRestUrl + this.config.menuMensaUrl;
		this.config.sportActivityUrl = this.config.kurogoRestUrl + this.config.sportActivityUrl;
		this.config.sportCheckMembershipUrl = this.config.kurogoRestUrl + this.config.sportCheckMembershipUrl;
		this.config.sportCheckSubscriptionUrl = this.config.kurogoRestUrl + this.config.sportCheckSubscriptionUrl;
		this.config.sportSubscribeUrl = this.config.kurogoRestUrl + this.config.sportSubscribeUrl;
		this.config.sportUnsubscribeUrl = this.config.kurogoRestUrl + this.config.sportUnsubscribeUrl;
		this.config.servicesUrl = this.config.kurogoRestUrl + this.config.servicesUrl;
		this.config.searchBooksUrl = this.config.kurogoRestUrl + this.config.searchBooksUrl;
		this.config.searchJournalsUrl = this.config.kurogoRestUrl + this.config.searchJournalsUrl;
		this.config.homeOrgsUrl = this.config.kurogoRestUrl + this.config.homeOrgsUrl;

  		this.initConfig(config);
  		return this;
	},

	config : {
		// url
		kurogoRestUrl: 'https://your_kurogo_installation_with_USIMobile_kurogo_code',
		checkLoginDataUrl: 'https://your_aai_protected_resource',
		authenticationUrl: 'aai/authenticate',
		updatesUrl: 'updates/check',
		coursesUrl: 'courses/get',
		academicCalendarUrl: 'academiccalendar/get',
		teachingTimetablesUrl: 'teachingtimetables/get',
		examinationTimetablesUrl: 'examinationtimetables/get',
		peopleUrl: 'usipeople/get',
		shortNewsUrl: 'usinews/get_list',
		detailedNewsUrl: 'usinews/get_item',
		shortEventNewsUrl: 'usieventnews/get_list',
		detailedEventNewsUrl: 'usieventnews/get_item',
		shortCommunityNewsUrl: 'usicommunitynews/get_list',
		detailedCommunityNewsUrl: 'usicommunitynews/get_item',
		menuMensaUrl: 'mensa/get_menu',
		sportActivityUrl: 'sport/get',
		sportCheckMembershipUrl: 'sport/check_membership',
		sportCheckSubscriptionUrl: 'sport/check_subscription',
		sportSubscribeUrl: 'sport/subscribe',
		sportUnsubscribeUrl: 'sport/unsubscribe',
		servicesUrl: 'services/get',
		searchBooksUrl: 'library/search_books',
		searchJournalsUrl: 'library/search_journals',
		alephUrl: 'http://aleph.sbt.ti.ch/F?func=item-global',
		swissBibUrl: 'http://www.swissbib.ch/m/index.php',
		homeOrgsUrl: 'aai/get_idps',
		// local paths
		fileCacheDir: 'USIMobile',
		verbose: false,
	}
});
