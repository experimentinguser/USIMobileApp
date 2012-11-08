Ext.define('USIMobile.controller.AaiAccount', {
	extend: 'Ext.app.Controller',

	config: {
		models: [
			'USIMobile.model.AaiAccount',
		],

		refs: {
			form: '#aaiaccount_form',
			save: '#aaiaccount_form button[action=save]'
		},

		control: {
			form: {
				initialize: 'loadAccountData'
			},
   			save: {
				tap: 'saveAccountData'
			}	
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
		form.setMasked({
			xtype: 'loadmask',
			message: 'Saving...'
		});

		// Put it inside a timeout so it feels like it is going to a server.
		setTimeout(function() {
			// Unmask the formpanel
			form.setMasked(false);
			location.reload();
		}, 1000);
	},

	init: function(app) {
		// if the account is the active one
		// authenticate and get the course data
		/*
		var parameters = new Object();
		parameters.username = USIMobile.Session.getAaiAccountStore().first().get('username');
		parameters.password = USIMobile.Session.getAaiAccountStore().first().get('password');
		parameters.idp = USIMobile.Session.getAaiAccountStore().first().get('homeorganisation');
		*/
		//var auth_url = USIMobile.Config.getAaiAuthUrl();

		//this.authenticate(auth_url, parameters);
	},
  
});
