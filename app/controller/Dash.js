Ext.define('USIMobile.controller.Dash', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
		   usiNewsButton: 'button#usinews_dash_button',
		   listaCorsiButton: 'button#listacorsi_dash_button',
		   orarioButton: 'button#orario_dash_button',
		   cercaPersoneButton: 'button#cercapersone_dash_button',
		   menuMensaButton: 'button#menumensa_dash_button',
		   usiSportButton: 'button#usisport_dash_button',
		   offerteLavoroButton: 'button#offertelavoro_dash_button',
		},
		control: {
		   usiNewsButton: { tap: 'showUsiNews' },
		   listaCorsiButton: { tap: 'showListaCorsi' },
		   orarioButton: { tap: 'showOrario' },
		   cercaPersoneButton: { tap: 'showCercaPersone' },
		   menuMensaButton: { tap: 'showMenuMensa' },
		   usiSportButton: { tap: 'showUsiSport' },
		   offerteLavoroButton: { tap: 'showOfferteLavoro' }
		}
	},
	
	//called when the Application is launched, remove if not needed
	init: function(){
	},
	
	showUsiNews: function(btn, e, eOpts){
		console.log('show usi news');
	},

	showListaCorsi: function(btn, e, eOpts){
		console.log('show lista corsi');
	},

	showOrario: function(btn, e, eOpts){
		console.log('show orario');
	},

	showCercaPersone: function(btn, e, eOpts){
		console.log('show cerca persone');
	},

	showMenuMensa: function(btn, e, eOpts){
		var url = 'http://www.usi.ch/en/usi-menu_mensa-12417.pdf';
		var filename = 'usi_menu_mensa.pdf';
		var mime = 'application/pdf';
		USIMobile.app.getFile(url, filename, mime);	
	},

	showUsiSport: function(btn, e, eOpts){
		console.log('show usi sport');
	},

	showOfferteLavoro: function(btn, e, eOpts){
		console.log('show offerte lavoro');
	},

});
