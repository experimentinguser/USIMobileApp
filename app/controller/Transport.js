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
			transports: 'transportNumbers',
			callButton: 'button[action=calltransport]',
		},

		control: {
			homeTransportButton: { tap: 'showTransports' },
			sendMailButton: { tap: 'sendMail' },
			callButton: { tap: 'call' },
			homePageButton: { tap: 'openHomePage' }
		}
	},
	
	init: function(){
	},

	showTransports: function() {
		if(typeof this.getTransports() == 'object') {
			this.getHome().push(this.getTransports());
		} else {
			this.getHome().push({
				xtype: 'transports',	
				title: Ux.locale.Manager.get('title.transport'),
				store: Ext.create('Ext.data.Store', {
					model: 'USIMobile.model.Transport',
					groupField: 'provider',
					data: [
						{ provider: 'FFS/SBB', description: 'Search', url: 'http://www.ffs.ch' },
						{ provider: ' TPL (Trasporti Pubblici Luganesi)', description: 'All the lines <br>(lines 5 & 6 are for USI)', url: 'http://www.tplsa.ch' },
						{ provider: ' TPL (Trasporti Pubblici Luganesi)', description: 'Map of the lines <br>(lines 5 & 6 are for USI)', url: 'http://www.tplsa.ch/repository/pdf/CartinaTPL.pdf' },
						{ provider: ' ARL (Autolinee Regionali Luganesi)', description: 'All the lines <br>(line 461 is direct to USI)', url: 'http://www.arlsa.ch/orari-e-linee-arl.htm' },
					]
				}),
			});
		}
	},
	
});
