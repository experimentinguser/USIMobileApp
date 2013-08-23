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
				padding: 10,
				layout: {
					type: 'hbox',
					align: 'center'
				},
				items: [
					{
						itemId: 'callperson',
						xtype: 'button',
						cls: 'person_call_button',
						locales:{
							text: 'button.call'
						},
						action: 'callperson',
						ui: 'confirm',
						flex: 1,
					},
					{
						itemId: 'mailperson',
						xtype: 'button',
						cls: 'person_mail_button',
						locales:{
							text: 'button.mail'
						},
						action: 'mailperson',
						ui: 'confirm',
						flex: 1,
					},
					{
						itemId: 'profile',
						xtype: 'button',
						cls: 'profile_button',
						locales:{
							text: 'button.profile'
						},
						action: 'viewprofile',
						ui: 'confirm',
						flex: 1,
					},
				],
				listeners: {
					show: function() {
						var record = this.getParent().getRecord();
						if(record.get('phone') == null || record.get('phone').length == 0) {
							this.down('#callperson').hide();
						}
						if(record.get('email') == null || record.get('email').length == 0) {
							this.down('#mailperson').hide();
						}
					}
				}
			}
		],
	},
	
	updateRecord: function(record) {
		if(record) {
			var label_begin = '<span class="label">';
			var label_end = '</span>: ';
			this.down('#name').setHtml(label_begin + Ux.locale.Manager.get('label.name') + label_end + record.get('first_name') + ' ' + record.get('last_name'));
			if(record.get('email') != null && record.get('email').length > 0) {
				this.down('#email').setHtml(label_begin + Ux.locale.Manager.get('label.email') + label_end + record.get('email')[0].email);
			}
			if(record.get('phone') != null && record.get('phone').length > 0) {
				this.down('#phone').setHtml(label_begin + Ux.locale.Manager.get('label.phone') + label_end + record.get('phone')[0].official);
			}
			this.down('#hiddenBlock').setHidden('true');
			this.removeCls('person_selected');
		}
	}
});

