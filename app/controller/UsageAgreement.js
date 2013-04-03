Ext.define('USIMobile.controller.UsageAgreement', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			UApanel: '#usageagreement',
			agree: '#usageagreement button[action=agree]',
			disagree: '#usageagreement button[action=disagree]'
		},
		control: {
			UApanel:  {
				show: 'presetLanguage',
				activeitemchange: 'setLanguage'
			},
			agree:  {
				tap: 'registerAgreement'
			},
			disagree: {
				tap: 'registerDisagreement'
			}
		}
	},

	presetLanguage: function() {
		Ux.locale.Manager.updateLocale('en');
	},

	setLanguage: function() {
		var item = this.getUApanel().getActiveItem();
		Ux.locale.Manager.updateLocale(item.getId());
	},

	registerAgreement: function() {
		var language = this.getUApanel().getActiveItem().getId();
		USIMobile.Session.getSettingsStore().load();
		USIMobile.Session.getSettingsStore().first().set('usageagreement', true);
		USIMobile.Session.getSettingsStore().first().set('language', language);
		USIMobile.Session.getSettingsStore().sync();
		location.reload();
	},

	registerDisagreement: function() {
		Ext.Msg.alert(
			Ux.locale.Manager.get('title.note'),
			Ux.locale.Manager.get('message.noUsageAgreement')
		);
	},
	
});
