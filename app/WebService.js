Ext.define('USIMobile.WebService', {
	singleton: true,

	constructor: function(config) {
  		this.initConfig(config);
  		return this;
	},

	config: { },
	
	//************************************  
	// Generic webservice request function
	//************************************  
	request: function(url, params, rmodel) {
		// prepare the parameters
		var url_encoded_params = '?';
		Ext.iterate(params, function(key, value){
				url_encoded_params += key+'='+value+'&';
		});
		// remove the last & char
		url_encoded_params = url_encoded_params.slice(0,-1);
		// build the url_request
		var url_request = url + url_encoded_params;
		// send the request for content
		var content_store = Ext.create('Ext.data.Store', {
				model: rmodel,
				proxy: {
						type: 'ajax',
						url: url_request,
						pageParam: false,
						startParam: false,
						limitParam: false,
						noCache: true,
						reader: {
								type: 'json',
								rootProperty: 'response',
						}
				}
		});

		// get the content
		return content_store.load({
				callback: function(records, operation, success) {
						// check if there are any exceptions 
						if( this.first() != undefined && this.first().raw.exception != undefined ) {
								Ext.Msg.alert(
										this.first().raw.error.title,
										this.first().raw.error.message
								);
						}
				}
		});
	},


	//***************************** 
	// Web Service Request Wrappers
	//***************************** 
	getUpdates: function() {
		var url = USIMobile.Config.getUpdatesUrl();
		// set parameters
		var params = new Object();
		// request
		var updates_store = this.request(url, params, 'USIMobile.model.Updates');
		return updates_store;
	},

	getCourses: function() {
		var url = USIMobile.Config.getCoursesUrl();
		// set parameters
		var params = new Object();
		// request
		var courses_store = this.request(url, params, 'USIMobile.model.Course');
		return courses_store;
	},

	getAcademicCalendar: function() {
		var url = USIMobile.Config.getAcademicCalendarUrl();
		// set parameters
		var params = new Object();
		// request
		var academiccalendar_store = this.request(url, params, 'USIMobile.model.AcademicCalendar');
		return academiccalendar_store;
	},

	getTeachingTimetables: function() {
		var url = USIMobile.Config.getTeachingTimetablesUrl();
		// set parameters
		var params = new Object();
		// request
		var teaching_timetables_store = this.request(url, params, 'USIMobile.model.TeachingTimetable');
		return teaching_timetables_store;
	},

	getExaminationTimetables: function() {
		var url = USIMobile.Config.getExaminationTimetablesUrl();
		// set parameters
		var params = new Object();
		// request
		var examination_timetables_store = this.request(url, params, 'USIMobile.model.ExaminationTimetable');
		return examination_timetables_store;
	},

	getPeople: function() {
		var url = USIMobile.Config.getPeopleUrl();
		// set parameters
		var params = new Object();
		// request
		var people_store = this.request(url, params, 'USIMobile.model.People');
		return people_store;
	},

	getShortNews: function() {
		var url = USIMobile.Config.getShortNewsUrl();
		// set parameters
		var params = new Object();
		// request
		var short_news_store = this.request(url, params, 'USIMobile.model.ShortNews');
		return short_news_store;
	},

	getDetailedNews: function(id) {
		var url = USIMobile.Config.getDetailedNewsUrl();
		// set parameters
		var params = new Object();
		params.id = id;
		// request
		var detailed_news_store = this.request(url, params, 'USIMobile.model.DetailedNews');
		return detailed_news_store;
	},

	getShortEventNews: function() {
		var url = USIMobile.Config.getShortEventNewsUrl();
		// set parameters
		var params = new Object();
		// request
		var short_event_news_store = this.request(url, params, 'USIMobile.model.ShortNews');
		return short_event_news_store;
	},

	getDetailedEventNews: function(id) {
		var url = USIMobile.Config.getDetailedEventNewsUrl();
		// set parameters
		var params = new Object();
		params.id = id;
		// request
		var detailed_event_news_store = this.request(url, params, 'USIMobile.model.DetailedNews');
		return detailed_event_news_store;
	},

	getShortCommunityNews: function() {
		var url = USIMobile.Config.getShortCommunityNewsUrl();
		// set parameters
		var params = new Object();
		// request
		var short_community_news_store = this.request(url, params, 'USIMobile.model.ShortNews');
		return short_community_news_store;
	},

	getDetailedCommunityNews: function(id) {
		var url = USIMobile.Config.getDetailedCommunityNewsUrl();
		// set parameters
		var params = new Object();
		params.id = id;
		// request
		var detailed_event_news_store = this.request(url, params, 'USIMobile.model.DetailedNews');
		return detailed_event_news_store;
	},

	getMenuMensa: function() {
		var url = USIMobile.Config.getMenuMensaUrl();
		// set parameters
		var params = new Object();
		// request
		var menumensa_store = this.request(url, params, 'USIMobile.model.MenuMensa');
		return menumensa_store;
	},

	getSportActivities: function() {
		var url = USIMobile.Config.getSportActivityUrl();
		// set parameters
		var params = new Object();
		// request
		var courses_store = this.request(url, params, 'USIMobile.model.SportActivity');
		return courses_store;
	},

	getServices: function() {
		var url = USIMobile.Config.getServicesUrl();
		// set parameters
		var params = new Object();
		// request
		var services_store = this.request(url, params, 'USIMobile.model.Service');
		return services_store;
	},

	searchBooks: function(data) {
		var url = USIMobile.Config.getSearchBooksUrl();
		// set parameters
		var params = new Object();
		if(data.usilib == true) {
			params.library = 'LUBUL';
			params.network = 'SBT';
		}
		params.query = data.pattern;
		// set the offset if needed
		if(data.offset != undefined) {
			params.offset = data.offset;
		}

		// request
		var result = this.request(url, params, 'USIMobile.model.SearchLibraryResult');
		return result;
	},

	searchJournals: function(data) {
		var url = USIMobile.Config.getSearchJournalsUrl();
		// set parameters
		var params = new Object();
		params.query = data.pattern;

		if(data.offset != undefined) {
			params.offset = data.offset;
		}
		// request
		var journals_store = this.request(url, params, 'USIMobile.model.SearchLibraryResult');
		return journals_store;
	},

});
