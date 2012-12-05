Ext.define('USIMobile.controller.Init', {
	extend: 'Ext.app.Controller',
	
	config: {
		models: [ ],

		stores: [
			'USIMobile.store.Settings',
			'USIMobile.store.AaiAccount',
			'USIMobile.store.Updates',
			'USIMobile.store.MenuMensa',
			'USIMobile.store.ShortNews',
			'USIMobile.store.DetailedNews',
			'USIMobile.store.TeachingTimetables',
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
		// -log-
		settings_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> settings_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> data: ');
					console.log(record.getData());
				});
			});

		settings_store.load({
			callback: function(records, operation, success) {
				if( records.length == 0 ) { // initialize usersettings
					var settings_init_data = Ext.create('USIMobile.model.Settings', {
						usageagreement: false,
						accounttype: '',
						storeaccount: false
					});	
					this.setData(settings_init_data);
					this.sync();
				}
			}
		});
		
		USIMobile.Session.setSettingsStore(settings_store);

		// create the AAI account store
		var aai_account_store = Ext.create('USIMobile.store.AaiAccount'); 
		aai_account_store.load();
		// -log-
		aai_account_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> aai_account_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> user: '+record.get('username'));
				});
			});
		USIMobile.Session.setAaiAccountStore(aai_account_store);

		// create the updates
		var updates_store = Ext.create('USIMobile.store.Updates'); 
		updates_store.load();
		// -log-
		updates_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> updates_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> data: ');
					console.log(record.getData());
				});
			});
		USIMobile.Session.setUpdatesStore(updates_store);


		// create the menumensa store
		var menumensa_store = Ext.create('USIMobile.store.MenuMensa'); 
		menumensa_store.load();
		// -log-
		menumensa_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> menumensa_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> data: ');
					console.log(record.getData());
				});
			});
		USIMobile.Session.setMenuMensaStore(menumensa_store);

		// create the Short News store
		var short_news_store = Ext.create('USIMobile.store.ShortNews'); 
		short_news_store.load();
		// -log-
		short_news_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> short_news_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> data: ');
					console.log(record.getData());
				});
			});

		USIMobile.Session.setShortNewsStore(short_news_store);

		// create the Detailed News store
		var detailed_news_store = Ext.create('USIMobile.store.DetailedNews'); 
		detailed_news_store.load();
		// -log-
		detailed_news_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> detailed_news_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> data: ');
					console.log(record.getData());
				});
			});
		USIMobile.Session.setDetailedNewsStore(detailed_news_store);

		// create the Teaching Timetables store
		var teaching_timetables_store = Ext.create('USIMobile.store.TeachingTimetables'); 
		teaching_timetables_store.load();
		// -log-
		teaching_timetables_store.on(
			'write',
			function(store, operation) { 
				USIMobile.log('=> teaching_timetables_store operation: action='+operation.getAction()+'; success: '+operation.wasSuccessful());
				Ext.iterate(operation.getRecords(), function(record){
					console.log(' --> faculty: '+record.get('faculty'));
				});
			});
		USIMobile.Session.setTeachingTimetablesStore(teaching_timetables_store);
	}
});
