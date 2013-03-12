Ext.define('USIMobile.controller.Home', {
	extend: 'Ext.app.Controller',

	requires: [
			'USIMobile.view.ShortNews',
	],

	config: {
		refs: {
			home: '#home',
			menuMensaButton: 'button#mensa_home_button',
			usiSportButton: 'button#usisport_home_button',
			offerteLavoroButton: 'button#offertelavoro_home_button',
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