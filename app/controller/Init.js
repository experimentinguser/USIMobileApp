Ext.define('USIMobile.controller.Init', {
	extend: 'Ext.app.Controller',
	
	config: {
		models: [
			'USIMobile.model.Settings',
		],

		stores: [
			'USIMobile.store.Settings',
			'USIMobile.store.AaiAccount',
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
	}
});
