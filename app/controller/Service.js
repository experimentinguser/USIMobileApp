Ext.define('USIMobile.controller.Service', {
	extend: 'Ext.app.Controller',

	requires: [ ],

	config: {
		views: [
			'Services',
			'Service',
		],
		refs: {
			home: 'home',
			homeServicesButton: 'button#services_home_button',
			services: 'services',
			sendMailButton: 'button[action=mailservice]',
			callButton: 'button[action=callservice]',
			homePageButton: 'button[action=openserviceurl]',
		},

		control: {
			homeServicesButton: { tap: 'showServices' },
			sendMailButton: { tap: 'sendMail' },
			callButton: { tap: 'call' },
			homePageButton: { tap: 'openHomePage' }
		}
	},
	
	init: function(){
		Ext.s = this;
	},

	showServices: function() {
		if(typeof this.getServices() == 'object') {
			this.getHome().push(this.getServices());
		} else {
			this.getHome().push({
				xtype: 'services',	
				title: Ux.locale.Manager.get('title.services'),
				store: USIMobile.Session.getServicesStore(),
			});
		}
	},

	sendMail: function(btn, e, opts) {
		console.log('selected');
		var service = this.getServices().getSelection()[0];
		USIMobile.app.sendEmail(service.get('email'), '', '');
	},

	call: function(btn, e, opts) {
		var service = this.getServices().getSelection()[0];
		//USIMobile.app.openURL('tel:'+service.get('phone'));
		window.location.href = 'tel:'+service.get('phone');
	},

	openHomePage: function(button){
		var service = this.getServices().getSelection()[0];
		USIMobile.app.openURL(service.get('url'));
	},
});
