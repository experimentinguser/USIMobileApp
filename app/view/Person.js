Ext.define("USIMobile.view.Person", {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'person',

	config: {
		cls: 'person',

		items: [
			{
				itemId: 'name',
				xtype: 'component',
				cls: 'person_name',
			},
			
			{
				itemId: 'email',
				xtype: 'component',
				cls: 'person_email',
			},
			{
				itemId: 'phone',
				xtype: 'component',
				cls: 'person_phone',
			},
			{
				itemId: 'hiddenBlock',
				xtype: 'container',
				hidden: true,
				items: [
					{
						itemId: 'floor',
						xtype: 'component',
						cls: 'person_floor',
					},
					{
						itemId: 'building',
						xtype: 'component',
						cls: 'person_building',
					},
					{
						itemId: 'headquarter',
						xtype: 'component',
						cls: 'person_headquarter',
					},
					{
						xtype: 'container',
						itemId: 'buttons',
						items: [
							{
								itemId: 'callperson',
								xtype: 'button',
								cls: 'person_call-button',
								locales:{
									text: 'button.call'
								},
								//text: 'Call',
								action: 'callperson',
								ui: 'confirm',
								flex: 1,
							},
							{
								itemId: 'mailperson',
								xtype: 'button',
								cls: 'person_mail-button',
								locales:{
									text: 'button.mail'
								},
								//text: 'Mail',
								action: 'mailperson',
								ui: 'confirm',
								flex: 1,
							},
							{
								itemId: 'homepage',
								xtype: 'button',
								cls: 'person_homepage-button',
								locales:{
									text: 'button.homepage'
								},
								//text: 'Home Page',
								action: 'openpersonurl',
								ui: 'confirm',
								flex: 1,
							},
						],
						layout: {
							type: 'hbox',
							align: 'center'
						},
					}
				]

			}
			
		],
	},
	
	updateRecord: function(record) {
		if(record) {
			var label_begin = '<span class="label">';
			var label_end = '</span>: ';
			this.down('#name').setHtml(label_begin + Ux.locale.Manager.get('label.name') + label_end + record.get('firstname') + ' ' + record.get('lastname'));
			this.down('#email').setHtml(label_begin + Ux.locale.Manager.get('label.email') + label_end + record.get('email'));
			this.down('#phone').setHtml(label_begin + Ux.locale.Manager.get('label.phone') + label_end + record.get('phone'));
			this.down('#floor').setHtml(label_begin + Ux.locale.Manager.get('label.floor') + label_end + record.get('floor'));
			this.down('#building').setHtml(label_begin + Ux.locale.Manager.get('label.building') + label_end + record.get('building'));
			this.down('#headquarter').setHtml(label_begin + Ux.locale.Manager.get('label.headquarter') + label_end + record.get('headquarter'));
			this.down('#hiddenBlock').setHidden('true');
			this.removeCls('person_selected');
		}
	}
});

