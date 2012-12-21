Ext.define('USIMobile.controller.Dash', {
	extend: 'Ext.app.Controller',

	requires: [
			'USIMobile.view.ShortNews',
	],

	config: {
		refs: {
			dash: '#dash',
			menuMensaButton: 'button#mensa_dash_button',
			usiSportButton: 'button#usisport_dash_button',
			offerteLavoroButton: 'button#offertelavoro_dash_button',
		},

		control: {
			menuMensaButton: { tap: 'showMenuMensa' },
			usiSportButton: { tap: 'showUsiSport' },
			offerteLavoroButton: { tap: 'showOfferteLavoro' }
		}
	},
	
	//called when the Application is launched, remove if not needed
	init: function(){
	},

	showMenuMensa: function(btn, e, eOpts){
		var data = USIMobile.Session.getMenuMensaStore().first().getData();
		USIMobile.app.getFile(data.url, data.filename, data.mime);	
	},

	showUsiSport: function(btn, e, eOpts){
		console.log('show usi sport');
	},

	showOfferteLavoro: function(btn, e, eOpts){
		console.log('show offerte lavoro');
	},

});
