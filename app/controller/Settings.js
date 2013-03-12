Ext.define('USIMobile.controller.Settings', {
	extend: 'Ext.app.Controller',

	config: {
		models: [
			'USIMobile.model.Settings',
		],

		refs: {
			form: '#settings',
		},

		control: {
			form: {
				initialize: 'loadAccountData',
				show: 'loadHomeOrganisationValues',
				hide: 'saveSettings',
			},
		}
	},

	init: function(app) { },

	loadHomeOrganisationValues: function() {
		var homeOrgField = this.getForm().child('fieldset#logindata').child('selectfield[name="homeorganisation"]');
		if(homeOrgField.getStore() == null) {
			var homeorgs_store = Ext.create('USIMobile.store.HomeOrgs');
			USIMobile.app.showLoadMask('Loading Home Organisations.');
			homeorgs_store.on('load', function(store){ USIMobile.app.hideLoadMask(); });
			homeorgs_store.load();
			homeOrgField.setStore(homeorgs_store);
		}
	},

	loadAccountData: function () {
		if(USIMobile.Session.getSettingsStore().getCount() > 0) {
			var form = this.getForm();
			// Update the form with account data.
			form.setRecord( Ext.create('USIMobile.model.Settings', USIMobile.Session.getSettingsStore().first().getData()) );
		}
	},

	saveSettings: function() {
		var formdata = this.getForm().getValues();
		USIMobile.Session.getSettingsStore().removeAll();
		USIMobile.Session.getSettingsStore().add(formdata);
		USIMobile.Session.getSettingsStore().sync();
	},
 
});
