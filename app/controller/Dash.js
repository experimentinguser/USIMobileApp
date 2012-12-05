Ext.define('USIMobile.controller.Dash', {
	extend: 'Ext.app.Controller',

	requires: [
			'USIMobile.view.ShortNews',
	],

	config: {
		refs: {
			dash: '#dash',
			listaCorsiButton: 'button#listacorsi_dash_button',
			cercaPersoneButton: 'button#cercapersone_dash_button',
			menuMensaButton: 'button#menumensa_dash_button',
			usiSportButton: 'button#usisport_dash_button',
			offerteLavoroButton: 'button#offertelavoro_dash_button',
		},

		control: {
			listaCorsiButton: { tap: 'showListaCorsi' },
			cercaPersoneButton: { tap: 'showCercaPersone' },
			menuMensaButton: { tap: 'showMenuMensa' },
			usiSportButton: { tap: 'showUsiSport' },
			offerteLavoroButton: { tap: 'showOfferteLavoro' }
		}
	},
	
	//called when the Application is launched, remove if not needed
	init: function(){
	},

	showListaCorsi: function(btn, e, eOpts){
		console.log('show lista corsi');
	},

	showCercaPersone: function(btn, e, eOpts){
		console.log('show cerca persone');
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
