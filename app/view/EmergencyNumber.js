Ext.define("USIMobile.view.EmergencyNumber", {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'emergencynumber',

	config: {
		cls: 'emergencynumber',
		
		items:[
			{
				itemId: 'name',
				xtype: 'component',
				cls: 'emergency_number_name',
			},	
			{
				itemId: 'description',
				xtype: 'component',
				cls: 'emergency_number_description',
			},
			{
				itemId: 'phone',
				xtype: 'component',
				cls: 'emergency_number_phone',
			},
			{
				itemId: 'call_emergency_number_button',
				xtype: 'button',
				cls: 'emergency_call_button',
				hidden: true,
				locales:{
					text: 'button.call'
				},
				action: 'callemergencynumber',
				ui: 'confirm',
				flex: 1,
			},
		],
	},

	updateRecord: function(record) {
		if(record) {
			var label_begin = '<span class="label">';
			var label_end = '</span>: ';

			var name = Ux.locale.Manager.getLanguage() == "en" ? record.get('name_en') : record.get('name_it');
			this.down('#name').setHtml('<span class="emergency_number_name">' + name + '</span> ');

			var description = Ux.locale.Manager.getLanguage() == "en" ? record.get('description_en') : record.get('description_it');
			this.down('#description').setHtml('<span class="emergency_number_description">' + description + '</span> ');

			this.down('#phone').setHtml(label_begin + Ux.locale.Manager.get('label.phone') + label_end + record.get('phone'));

			this.removeCls('emergency_number_selected');
		}
	}

});

