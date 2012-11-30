Ext.define('USIMobile.controller.Init', {
	extend: 'Ext.app.Controller',
	
	config: {
		models: [
			'USIMobile.model.ShortNews',
			'USIMobile.model.DetailedNews',
		],

		stores: [
			'USIMobile.store.Settings',
			'USIMobile.store.MenuMensa',
			'USIMobile.store.AaiAccount',
			'USIMobile.store.ShortNews',
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
		USIMobile.Session.setAaiAccountStore(aai_account_store);

		// create the menumensa store
		var menumensa_account_store = Ext.create('USIMobile.store.MenuMensa'); 
		menumensa_account_store.load();
		USIMobile.Session.setMenuMensaStore(menumensa_account_store);

		// create the Short News account store
		var short_news_account_store = Ext.create('USIMobile.store.ShortNews'); 
		short_news_account_store.load();
		USIMobile.Session.setShortNewsStore(short_news_account_store);

		// create the Detailed News account store
		var detailed_news_account_store = Ext.create('USIMobile.store.DetailedNews'); 
		detailed_news_account_store.load();
		USIMobile.Session.setDetailedNewsStore(detailed_news_account_store);
	}
});
