Ext.define('USIMobile.controller.Transport', {
	extend: 'Ext.app.Controller',

	requires: [ ],

	config: {
		views: [
			'Transports',
		],
		models: [
			'Transport',
		],
		refs: {
			home: 'home',
			homeTransportButton: 'button#transport_home_button',
			transports: 'transports',
		},

		control: {
			homeTransportButton: { tap: 'showTransports' },
			transports: { itemtap: 'openURL'}
		}
	},
	
	init: function(){
	},

	showTransports: function() {
		var localized_data = [
			{ 
				provider: 'FFS/SBB',
				description: Ux.locale.Manager.get('list.transport.descriptionFFS'),
				url: 'http://www.ffs.ch'
			},
			{
				provider: ' TPL (Trasporti Pubblici Luganesi)',
				description: Ux.locale.Manager.get('list.transport.descriptionTPL'),
				url: 'http://www.tplsa.ch'
			},
			{
				provider: ' TPL (Trasporti Pubblici Luganesi)',
				description: Ux.locale.Manager.get('list.transport.descriptionTPLMAP'),
				url: 'http://www.tplsa.ch/repository/pdf/CartinaTPL.pdf'
			},
			{
				provider: ' ARL (Autolinee Regionali Luganesi)',
				description: Ux.locale.Manager.get('list.transport.descriptionARL'),
				url: 'http://www.arlsa.ch/orari-e-linee-arl.htm'
			},
		];

		console.log(localized_data);
		
		if(typeof this.getTransports() == 'object') {
			this.getTransports().getStore().setData(localized_data);
			this.getHome().push(this.getTransports());
		} else {
			this.getHome().push({
				xtype: 'transports',	
				title: Ux.locale.Manager.get('title.transport'),
				store: Ext.create('Ext.data.Store', {
					model: 'USIMobile.model.Transport',
					groupField: 'provider',
					data: localized_data
				}),
			});
		}
	},

	openURL: function(view, index, target, record) {
		USIMobile.app.openURL(record.get('url'));
	}
	
});
