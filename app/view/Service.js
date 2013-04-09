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
				itemId: 'hiddenBlock',
				xtype: 'container',
				hidden: true,
				items: [
					{
						itemId: 'office',
						xtype: 'component',
						cls: 'service_office',
					},
					{
						itemId: 'building',
						xtype: 'component',
						cls: 'service_building',
					},

					{
						xtype: 'container',
						itemId: 'buttons',
						items: [
							{
								itemId: 'callperson',
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
								itemId: 'mailperson',
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
			this.down('#description').setHtml('<span class="service_description">' + description + '</span> ');

			this.down('#email').setHtml(label_begin + Ux.locale.Manager.get('label.email') + label_end + record.get('email'));
			this.down('#phone').setHtml(label_begin + Ux.locale.Manager.get('label.phone') + label_end + record.get('phone'));

			this.down('#office').setHtml('<span class="label">' + Ux.locale.Manager.get('label.office') + ':</span> ' + record.get('office'));
			var building = Ux.locale.Manager.getLanguage() == "en" ? record.get('building_en') : record.get('building_it');
			this.down('#building').setHtml('<span class="label">' + Ux.locale.Manager.get('label.building') + ':</span> ' + building);

			this.down('#hiddenBlock').setHidden('true');
			this.removeCls('person_selected');
		}
	}

});

