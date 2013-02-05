Ext.define('USIMobile.controller.Service', {
	extend: 'Ext.app.Controller',

	requires: [
		'Ext.ActionSheet'
	],

	config: {
		refs: {
			dash: '#dash',
			dashServicesButton: 'button#services_dash_button',
			services: '#services',
			sendMailBtn: 'button[action=send_email_to_service]',
			phoneBtn: 'button[action=call_service]',
		},

		control: {
			dashServicesButton: { tap: 'showServices' },
			services: { itemtap: 'contactService' },
			sendMailBtn: { tap: 'sendMail' },
			phoneBtn: { tap: 'phone' }
		}
	},
	
	init: function(){
		Ext.s = this;
		this.actionSheet = Ext.create('Ext.ActionSheet', {
			hideOnMaskTap: true,
			items: [
				{
					text: 'Send e-mail',
					action: 'send_email_to_service'
				},
				{
					text: 'Call',
					action: 'call_service'
				},
			]
		});

		/*
		this.actionSheet = Ext.create('Ext.Panel',{
			centered: true,
			modal: true,
			hideOnMaskTap: true,
			defaultType: 'button',
			layout: 'hbox',
			showAnimation: {
				type: 'popIn',
				duration: 250
			},
			hideAnimation: {
				type: 'popOut',
				duration: 250
			},
			defaults: {
				margin: 10
			},
			items: [
				{
					xtype: 'button',
					text: 'Send e-mail',
					action: 'send_email_to_service'
				},
				{
					xtype: 'button',
					text: 'Phone Call',
					action: 'call_service'
				},
			]
		});
		*/
	},

	showServices: function() {
		console.log('show services');
		if(typeof this.getServices() == 'object') {
			this.getDash().push(this.getServices());
		} else {
			this.getDash().push({
				xtype: 'services',	
				store: USIMobile.Session.getServicesStore(),
			});
		}
	},

	contactService: function(view, index, target, record) {
		Ext.Viewport.add(this.actionSheet);
		this.actionSheet.show();
	},

	sendMail: function(btn, e, opts) {
		console.log('selected');
		var service = this.getServices().getSelection()[0];
		USIMobile.app.sendEmail(service.get('email'), 'Hi,', '');
	},

	phone: function(btn, e, opts) {
		var service = this.getServices().getSelection()[0];
		//USIMobile.app.call(service.get('phone'));
		USIMobile.app.openURL('tel:'+service.get('phone'));
	},


});
