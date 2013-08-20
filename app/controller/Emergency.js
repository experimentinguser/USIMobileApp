Ext.define('USIMobile.controller.Emergency', {
	extend: 'Ext.app.Controller',

	requires: [ ],

	config: {
		views: [
			'EmergencyNumbers',
			'EmergencyNumber',
		],
		refs: {
			home: 'home',
			homeEmergencyButton: 'button#emergency_home_button',
			emergencyNumbers: 'emergencynumbers',
			callButton: 'button[action=callemergencynumber]',
		},

		control: {
			homeEmergencyButton: { tap: 'showEmergencyNumbers' },
			sendMailButton: { tap: 'sendMail' },
			callButton: { tap: 'call' },
			homePageButton: { tap: 'openHomePage' }
		}
	},
	
	init: function(){
	},

	showEmergencyNumbers: function() {
		if(typeof this.getEmergencyNumbers() == 'object') {
			this.getHome().push(this.getEmergencyNumbers());
		} else {
			this.getHome().push({
				xtype: 'emergencynumbers',	
				title: Ux.locale.Manager.get('title.emergency'),
				//store: USIMobile.Session.getEmergencyNumbersStore(),
			});
		}
	},

	call: function(btn, e, opts) {
		var emergencyNumber = this.getEmergencyNumbers().getSelection()[0];
		USIMobile.app.openURL('tel:'+emergencyNumber.get('phone'));
	},
	
});
