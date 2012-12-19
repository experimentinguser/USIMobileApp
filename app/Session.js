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
		updatesStore: null,
		coursesStore: null,
		shortNewsStore: null,
		detailedNewsStore: null,
		teachingTimetablesStore: null,
		examinationTimetablesStore: null,
		menuMensaStore: null,
	}
	
});
