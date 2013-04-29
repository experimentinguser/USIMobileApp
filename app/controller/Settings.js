Ext.define('USIMobile.controller.Settings', {
	extend: 'Ext.app.Controller',

	config: {
		views: [
			'Settings',
		],
		models: [
			'Settings',
		],

		stores: [
			'HomeOrgs',
		],

		refs: {
			form: 'settings',
			language: 'selectfield[name=language]',
			checkLoginBtn: 'button[action=checklogindata]'
		},

		control: {
			form: {
				initialize: 'loadAccountData',
				show: 'loadHomeOrganisationValues',
				hide: 'saveSettings',
			},

			language : { change: 'setLanguage' },
			checkLoginBtn: { tap: 'checkLogin' }
		}
	},

	init: function(app) {
		Ext.st = this;
	},

	loadHomeOrganisationValues: function() {
		var homeOrgField = this.getForm().child('fieldset#logindata').child('selectfield[name="homeorganisation"]');
		if(homeOrgField.getStore() == null) {
			var homeorgs_store = Ext.create('USIMobile.store.HomeOrgs');
			USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.homeOrgLoad'));
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

	setLanguage: function(view, lang){
		Ux.locale.Manager.updateLocale(lang);
		Ux.locale.Manager.applyLocales();
	},

	saveSettings: function() {
		var formdata = this.getForm().getValues();
		USIMobile.Session.getSettingsStore().removeAll();
		USIMobile.Session.getSettingsStore().add(formdata);
		USIMobile.Session.getSettingsStore().sync();
	},

	checkLogin: function(btn) {
		var formdata = this.getForm().getValues();
		var data = {};
		if(formdata.username == '') {
			this.displayError(1);
			return;
		} else {
			data.username = formdata.username;
		}

		if(formdata.password == '') {
			this.displayError(2);
			return;
		} else {
			data.password = formdata.password;
		}

		if(formdata.homeorganisation == '') {
			this.displayError(3);
			return;
		} else {
			data.idp = formdata.homeorganisation;
		}
		data.target = USIMobile.Config.getCheckLoginDataUrl();
		// ajax
		var self = this;
		Ext.Ajax.request({
			url: USIMobile.Config.getAuthenticationUrl(),
			method: 'GET',
			format:'json',
			useDefaultXhrHeader: false,
			
			params: data,
				
			callback: function(options, success, server_response) {
				if (success) {
					var result = Ext.JSON.decode(server_response.responseText);
					if(result.error != null) {
						self.displayError(result.error.code, result.error.message);
					} else {
						Ext.Msg.alert(
							Ux.locale.Manager.get('title.note'),
							Ux.locale.Manager.get('message.loginSuccessful')
						);
					}
				} else{
					self.displayError(7);
				}
			}
		  });
	},
 
	displayError: function(code, message) {
		switch(code) {
			case 1:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.usernameMissing'));
			break;
			case 2:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.passwordMissing'));
			break;
			case 3:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.homeOrganisationMissing'));
			break;
			case 5:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.loginFailed'));
			break;
			case 7:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.serverConnectionFailed'));
			break;
			default:
				Ext.Msg.alert(
					Ux.locale.Manager.get('title.errorCode') + code,
					Ux.locale.Manager.get('message.serverErrorMessage') + message
				);
			break;
		}
	}
});
