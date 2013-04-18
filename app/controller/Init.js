Ext.define('USIMobile.controller.Init', {
	extend: 'Ext.app.Controller',
	
	config: {
		models: [ ],

		stores: [
			'USIMobile.store.Settings',
			'USIMobile.store.Updates',
			'USIMobile.store.Courses',
			'USIMobile.store.AcademicCalendar',
			'USIMobile.store.People',
			'USIMobile.store.TeachingTimetables',
			'USIMobile.store.ExaminationTimetables',
			'USIMobile.store.ShortNews',
			'USIMobile.store.DetailedNews',
			'USIMobile.store.ShortEventNews',
			'USIMobile.store.DetailedEventNews',
			'USIMobile.store.ShortCommunityNews',
			'USIMobile.store.DetailedCommunityNews',
			'USIMobile.store.MenuMensa',
			'USIMobile.store.SportActivity',
			'USIMobile.store.Services',
		],

		refs: {
			
		},
		control: {
			
		}
	},
	
	init: function() {
		USIMobile.log = function(message) { console.log('>>>>> USIMobile LOG MESSAGE :: ' + message); }
		// create settings store
		var settings_store = Ext.create('USIMobile.store.Settings');

		settings_store.load({
			callback: function(records, operation, success) {
				if( records.length == 0 ) { // initialize usersettings
					var settings_init_data = Ext.create('USIMobile.model.Settings');	
					this.setData(settings_init_data);
					this.sync();
				}
			}
		});
		USIMobile.Session.setSettingsStore(settings_store);

		// create the updates
		var updates_store = Ext.create('USIMobile.store.Updates'); 
		updates_store.load();
		USIMobile.Session.setUpdatesStore(updates_store);

		// create the Courses store
		var courses_store = Ext.create('USIMobile.store.Courses'); 
		USIMobile.Session.setCoursesStore(courses_store);

		// create the academiccalendar store
		var academiccalendar_store = Ext.create('USIMobile.store.AcademicCalendar'); 
		USIMobile.Session.setAcademicCalendarStore(academiccalendar_store);

		// create the Courses store
		var people_store = Ext.create('USIMobile.store.People'); 
		USIMobile.Session.setPeopleStore(people_store);

		// create the Teaching Timetables store
		var teaching_timetables_store = Ext.create('USIMobile.store.TeachingTimetables'); 
		USIMobile.Session.setTeachingTimetablesStore(teaching_timetables_store);

		// create the Examination Timetables store
		var examination_timetables_store = Ext.create('USIMobile.store.ExaminationTimetables'); 
		USIMobile.Session.setExaminationTimetablesStore(examination_timetables_store);

		// create the Short News store
		var short_news_store = Ext.create('USIMobile.store.ShortNews'); 
		USIMobile.Session.setShortNewsStore(short_news_store);

		// create the Detailed News store
		var detailed_news_store = Ext.create('USIMobile.store.DetailedNews'); 
		USIMobile.Session.setDetailedNewsStore(detailed_news_store);

		// create the Short Event News store
		var short_event_news_store = Ext.create('USIMobile.store.ShortEventNews'); 
		USIMobile.Session.setShortEventNewsStore(short_event_news_store);

		// create the Detailed Event News store
		var detailed_event_news_store = Ext.create('USIMobile.store.DetailedEventNews'); 
		USIMobile.Session.setDetailedEventNewsStore(detailed_event_news_store);

		// create the Short Community News store
		var short_community_news_store = Ext.create('USIMobile.store.ShortCommunityNews'); 
		USIMobile.Session.setShortCommunityNewsStore(short_community_news_store);

		// create the Detailed Community News store
		var detailed_community_news_store = Ext.create('USIMobile.store.DetailedCommunityNews'); 
		USIMobile.Session.setDetailedCommunityNewsStore(detailed_community_news_store);

		// create the menumensa store
		var menumensa_store = Ext.create('USIMobile.store.MenuMensa'); 
		USIMobile.Session.setMenuMensaStore(menumensa_store);

		// create the sportactivity store
		var sportactivity_store = Ext.create('USIMobile.store.SportActivity');
		USIMobile.Session.setSportActivityStore(sportactivity_store);

		// create the Services store
		var services_store = Ext.create('USIMobile.store.Services');
		USIMobile.Session.setServicesStore(services_store);
		
		/*********************************
		 * DEBUG/LOG MESSAGES
		 *********************************/
		if(USIMobile.Config.getVerbose()) {
			settings_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> settings_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			aai_account_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> aai_account_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> user: '+record.get('username'));
					});
				});

			updates_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> updates_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});
				
			courses_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> courses_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			people_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> people_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			academiccalendar_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> academiccalendar_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			teaching_timetables_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> teaching_timetables_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> faculty: '+record.get('faculty'));
					});
				});

			examination_timetables_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> examination_timetables_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> faculty: '+record.get('faculty'));
					});
				});

			short_news_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> short_news_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			detailed_news_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> detailed_news_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			menumensa_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> menumensa_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			sportactivity_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> sportactivity_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});

			services_store.on(
				'write',
				function(store, operation) {
					USIMobile.log('=> services_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
					Ext.iterate(operation.getRecords(), function(record){
						console.log(' --> data: ');
						console.log(record.getData());
					});
				});
		}
	}
});
