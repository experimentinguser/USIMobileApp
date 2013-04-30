Ext.define('USIMobile.controller.Home', {
	extend: 'Ext.app.Controller',

	requires: [
			'USIMobile.view.ShortNews',
	],

	config: {
		views: [
			'Home',
		],
		refs: {
			home: 'home',
			campusMap: 'campusmap',
			menuMensaButton: 'button#mensa_home_button',
			usiSportButton: 'button#usisport_home_button',
			offerteLavoroButton: 'button#offertelavoro_home_button',
			mapButton: 'button#map_home_button',
			language: 'selectfield[name=language]',
		},

		control: {
			menuMensaButton: { tap: 'showMenuMensa' },
			offerteLavoroButton: { tap: 'showOfferteLavoro' },
			mapButton: { tap: 'showCampusMap' },
			language : { change: 'setLanguage' }
		}
	},
	
	//called when the Application is launched, remove if not needed
	init: function(){
		Ext.h = this;
	},

	showMenuMensa: function(btn, e, eOpts){
		var data = USIMobile.Session.getMenuMensaStore().first().getData();
		USIMobile.app.getFile(data.url, data.filename, data.mime);	
	},

	showOfferteLavoro: function(btn, e, eOpts){
		console.log('show offerte lavoro');
	},

	showCampusMap: function(btn, e, eOpts){
		if(typeof this.getCampusMap() == 'object') {
			this.getHome().push(this.getCampusMap());
		} else {
			this.getHome().push({
				xtype: 'campusmap',	
				title: Ux.locale.Manager.get('title.map'),
			});
		}
	},

	setLanguage: function(view, lang){
		this.getHome().setLocale(lang);
	}
});
