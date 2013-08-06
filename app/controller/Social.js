Ext.define('USIMobile.controller.Social', {
	extend: 'Ext.app.Controller',

	requires: [ ],

	config: {
		views: [
			'MessagePanel',
		],
		refs: {
			home: 'home',
			socialBtn: 'button#social',
			sideMenu: 'container#sidemenu',
			facebookBtn: 'button#facebook',
			linkedinBtn: 'button#linkedin',
			twitterBtn: 'button#twitter',
			youtubeBtn: 'button#youtube',
		},

		control: {
			home: { 
				push: 'showSocialButton',
				pop: 'showSocialButton',
			},
			socialBtn: { tap: 'toggleSideMenu', },
			facebookBtn: { tap: 'openFacebook', },
			linkedinBtn: { tap: 'openLinkedin', },
			twitterBtn: { tap: 'openTwitter', },
			youtubeBtn: { tap: 'openYoutube', },
		}
	},
	
	init: function(){ },

	showSocialButton: function(nav, view, eOpts){
		switch(nav.getActiveItem().getId()) {
			case 'grid':
				this.getSocialBtn().show();
			break;
			default:
				this.getSocialBtn().hide();
			break;
		}
	},

	toggleSideMenu: function() {
		if(this.getSideMenu().getLeft() == null || this.getSideMenu().getLeft() == '-300px') {
			this.getSideMenu().setLeft('0px');
		} else {
			this.getSideMenu().setLeft('-300px');
		}
	},

	openFacebook: function() {
		USIMobile.app.openURL(USIMobile.Config.getFacebookUrl());
	},

	openLinkedin: function() {
		USIMobile.app.openURL(USIMobile.Config.getLinkedinUrl());
	},

	openTwitter: function() {
		USIMobile.app.openURL(USIMobile.Config.getTwitterUrl());
	},

	openYoutube: function() {
		USIMobile.app.openURL(USIMobile.Config.getYoutubeUrl());
	},

});
