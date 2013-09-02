Ext.define("USIMobile.view.Service", {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'service',

	config: {
		cls: 'service',
		
		items:[
			{
				itemId: 'name',
				xtype: 'component',
				cls: 'service_name',
			},	
			{
				itemId: 'hiddenBlock',
				xtype: 'container',
				hidden: true,
				items: [
					{
						itemId: 'description',
						xtype: 'component',
						cls: 'service_description',
					},
					{
						itemId: 'email',
						xtype: 'component',
						cls: 'service_email',
					},
					{
						itemId: 'phone',
						xtype: 'component',
						cls: 'service_phone',
					},
					{
						itemId: 'office',
						xtype: 'component',
						cls: 'service_office',
					},
					{
						itemId: 'address',
						xtype: 'component',
						cls: 'service_address',
					},

					{
						xtype: 'container',
						itemId: 'buttons',
						padding: 15,
						items: [
							{
								itemId: 'callservice',
								xtype: 'button',
								cls: 'service_call_button',
								locales:{
									text: 'button.call'
								},
								action: 'callservice',
								ui: 'confirm',
								flex: 1,
							},
							{
								itemId: 'mailservice',
								xtype: 'button',
								cls: 'service_mail_button',
								locales:{
									text: 'button.mail'
								},
								action: 'mailservice',
								ui: 'confirm',
								flex: 1,
							},
							{
								itemId: 'homepage',
								xtype: 'button',
								cls: 'service_homepage_button',
								locales:{
									text: 'button.homepage'
								},
								action: 'openserviceurl',
								ui: 'confirm',
								flex: 1,
							},
						],
						layout: {
							type: 'hbox',
							align: 'center'
						},
					}
				],
			}
		],
	},

	updateRecord: function(record) {
		if(record) {
			var label_begin = '<span class="label">';
			var label_end = '</span>: ';

			var name = Ux.locale.Manager.getLanguage() == "en" ? record.get('name_en') : record.get('name_it');
			this.down('#name').setHtml('<span class="service_name">' + name + '</span> ');

			var description = Ux.locale.Manager.getLanguage() == "en" ? record.get('description_en') : record.get('description_it');
			if(description != null) {
				this.down('#description').setHtml('<span class="service_description">' + description + '</span> ');
			}
			
			if(record.get('email') != null) {
				this.down('#email').setHtml(label_begin + Ux.locale.Manager.get('label.email') + label_end + record.get('email'));
			} else {
				this.down('#email').hide();
				this.down('#mailservice').hide();
			}

			if(record.get('phone') != null && record.get('phone') != '') {
				this.down('#phone').setHtml(label_begin + Ux.locale.Manager.get('label.phone') + label_end + record.get('phone'));
			} else {
				this.down('#phone').hide();
				this.down('#callservice').hide();
			}

			if(record.get('office') != null) {
				this.down('#office').setHtml('<span class="label">' + Ux.locale.Manager.get('label.office') + ':</span> ' + record.get('office'));
			} else {
				this.down('#office').hide();
			}

			if(record.get('address') != null) {
				this.down('#address').setHtml('<span class="label">' + Ux.locale.Manager.get('label.address') + ':</span> ' + record.get('address'));
			} else {
				this.down('#address').hide();
			}

			this.down('#hiddenBlock').setHidden('true');
			this.removeCls('person_selected');
		}
	}

});

