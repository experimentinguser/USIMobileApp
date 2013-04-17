Ext.define('USIMobile.controller.Help', {
	extend: 'Ext.app.Controller',

	requires: [ ],

	config: {
		refs: {
			home: '#home',
			help: '#helppanel',
			info: '#infopanel',
			infoBtn: 'button#infobutton',
			infoCloseBtn: 'button#infoclosebutton',
			helpBtn: 'button#helpbutton',
			helpCloseBtn: 'button#helpclosebutton',
		},

		control: {
			home: { 
				push: 'showTitleBarButtons',
				pop: 'showTitleBarButtons',
			},

			infoBtn: { tap: 'displayInfo', },

			helpBtn: { tap: 'displayHelp', },

			helpCloseBtn: { 
				tap: function() { 
					this.getHelp().setHidden(false) 
				},
			}
		}
	},
	
	init: function(){ },

	showTitleBarButtons: function(nav, view, eOpts){
		switch(nav.getActiveItem().getId()) {
			case 'grid':
				this.showInfoButton();
				this.hideHelpButton();
			break;
			case 'library':
				this.showInfoButton();
				this.hideHelpButton();
			break;
			case 'journals':
				this.hideInfoButton();
				this.showHelpButton();
			break;
			case 'books':
				this.hideInfoButton();
				this.showHelpButton();
			break;
			default:
				this.hideInfoButton();
				this.hideHelpButton();
			break;
		}
	},

	showInfoButton: function() {
		this.getInfoBtn().setHidden(false);
	},

	hideInfoButton: function() {
		this.getInfoBtn().setHidden(true);
	},

	showHelpButton: function() {
		this.getHelpBtn().setHidden(false);
	},

	hideHelpButton: function() {
		this.getHelpBtn().setHidden(true);
	},

	displayHelp: function() {
		var html = '';
		switch(this.getHome().getActiveItem().getId()) {
			case 'journals':
				html = Ux.locale.Manager.get('help.swipe');
			break;
			case 'books':
				html = Ux.locale.Manager.get('help.swipe');
			break;
			default:
				return;
			break;
		}
	
		Ext.Msg.alert('Help', html);
	}
	
});
