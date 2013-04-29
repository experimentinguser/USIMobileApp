Ext.define('USIMobile.controller.MessagePanel', {
	extend: 'Ext.app.Controller',

	requires: [ ],

	config: {
		views: [
			'MessagePanel',
		],
		refs: {
			home: 'home',
			helpBtn: 'button#helpbutton',
			infoBtn: 'button#infobutton',
			messagePanel: 'messagepanel',
			messagePanelBar: '#messagepanelbar',
			messagePanelCloseBtn: 'button#closemessagepanel',
		},

		control: {
			home: { 
				push: 'showTitleBarButtons',
				pop: 'showTitleBarButtons',
			},
			helpBtn: { tap: 'displayHelp', },
			infoBtn: { tap: 'displayInfo', },
			messagePanelCloseBtn: {
				tap: function() {
					this.getMessagePanel().setHidden(true);
				}
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
		var title = '';
		switch(this.getHome().getActiveItem().getId()) {
			case 'journals':
				title = Ux.locale.Manager.get('help.swipe.title');
				html = Ux.locale.Manager.get('help.swipe.content');
			break;
			case 'books':
				title = Ux.locale.Manager.get('help.swipe.title');
				html = Ux.locale.Manager.get('help.swipe.content');
			break;
			default:
				return;
			break;
		}

		this.showMessagePanel(title, html);
	},

	displayInfo: function() {
		var html = '';
		var title = '';
		switch(this.getHome().getActiveItem().getId()) {
			case 'grid':
				title = Ux.locale.Manager.get('info.app.title');
				html = Ux.locale.Manager.get('info.app.content');
			break;
			case 'library':
				title = Ux.locale.Manager.get('info.library.title');
				html = Ux.locale.Manager.get('info.library.content');
			break;
			default:
				return;
			break;
		}
		this.showMessagePanel(title, html);
	},

	showMessagePanel: function(_title, _html) {
		if(typeof this.getMessagePanel() == 'object') {
			this.getMessagePanelBar().setTitle(_title);
			this.getMessagePanel().setHtml(_html);
			this.getMessagePanel().setHidden(false);
		} else {
			this.getHome().push({
				xtype: 'messagepanel',
				title: _title,
				html: _html
			});
		}
	}
	
});
