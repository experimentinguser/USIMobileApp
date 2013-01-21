Ext.define('USIMobile.controller.AaiAccount', {
	extend: 'Ext.app.Controller',

	config: {
		models: [
			'USIMobile.model.AaiAccount',
		],

		refs: {
			form: '#aaiaccount_form',
			save: '#aaiaccount_form button[action=save]',
		},

		control: {
			form: {
				initialize: 'loadAccountData',
				show: 'loadHomeOrganisationValues',
			},
   			save: {
				tap: 'saveAccountData'
			},
		}
	},

	loadHomeOrganisationValues: function() {
		var homeOrgField = this.getForm().getItems().getAt(1).getItems().getAt(2);
		if(homeOrgField.getStore() == null) {
			var homeorgs_store = Ext.create('USIMobile.store.HomeOrgs');
			USIMobile.app.showLoadMask('Loading Home Organisations.');
			homeorgs_store.on('load', function(store){ USIMobile.app.hideLoadMask(); });
			homeorgs_store.load();
			homeOrgField.setStore(homeorgs_store);
		}
	},

	loadAccountData: function () {
		if(USIMobile.Session.getAaiAccountStore().getCount() > 0) {
			var form = this.getForm();	
			// Update the form with account data.
			form.setRecord( Ext.create('USIMobile.model.AaiAccount', USIMobile.Session.getAaiAccountStore().first().getData()) );
		}
	},

	saveAccountData: function () {
		var form = this.getForm();	
		// store account data
		USIMobile.Session.getAaiAccountStore().removeAll();
		USIMobile.Session.getAaiAccountStore().add(form.getValues());
		USIMobile.Session.getAaiAccountStore().sync();

		// set user accounttype setting
		USIMobile.Session.getSettingsStore().first().set('accountset', 'true');
		USIMobile.Session.getSettingsStore().sync();
		// Mask the form
		USIMobile.app.showLoadMask('Saving...');

		// Put it inside a timeout so it feels like it is going to a server.
		setTimeout(function() {
			// Unmask the formpanel
			//form.setMasked(false);
			USIMobile.app.hideLoadMask();
			location.reload();
		}, 1000);
	},

	init: function(app) { },
  
});
