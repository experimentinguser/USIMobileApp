Ext.define('USIMobile.controller.UsageAgreement', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			agree: '#usageagreement_panel button[action=agree]',
			disagree: '#usageagreement_panel button[action=disagree]'
		},
		control: {
		   agree:  {
				tap: 'registerAgreement'
		   },
		   disagree: {
		   		tap: 'registerDisagreement'
		  }
		}
	},

	registerAgreement: function() {
		console.log('user agreed');
		USIMobile.Session.getSettingsStore().load();
		USIMobile.Session.getSettingsStore().first().set('usageagreement', true);
		USIMobile.Session.getSettingsStore().sync();
		location.reload();
	},

	registerDisagreement: function() {
		console.log('user disagreed');
	},
	
});
