Ext.define("USIMobile.view.EmergencyNumbers", {
	extend: 'Ext.DataView',
	xtype: 'emergencynumbers',

	config: {
		id: 'emergencynumbers',
		cls: 'standard_font',
		useComponents: true,
		defaultType: 'emergencynumber',
		listeners: {
			itemsingletap: function (dataview, index, target, record, e) {
					if(typeof dataview.selectedItem == 'undefined') {
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('emergency_number_selected');
					} else if (dataview.selectedItem != null && typeof dataview.selectedItem == 'object') {
							dataview.selectedItem.down('#call_emergency_number_button').hide();
							dataview.selectedItem.removeCls('emergency_number_selected');
							// set the new selected item
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('emergency_number_selected');
					}
					// show call button
					target.down('#call_emergency_number_button').show();
			},
		},
		data: [
			{
				name_it: 'Emergenza Interna USI',
				name_en: 'Security USI',
				description_it: '07:00 – 17:00: risponde una persona del sevizio logistica<br/>17:00 – 07:00 risponde un agente del servizio di sorveglianza',
				description_en: '07:00 – 17:00: a person from logistic service will answer<br/>17:00 – 07:00 a person from security service will answer',
				phone: '058 666 47 30',
			},
			{
				name_it: 'Polizia',
				name_en: 'Police',
				description_it: '',
				description_en: '',
				phone: '117',
			},
			{
				name_it: 'Pompieri',
				name_en: 'Firefighters',
				description_it: '',
				description_en: '',
				phone: '118',
			},
			{
				name_it: 'Ambulanza',
				name_en: 'Ambulance',
				description_it: '',
				description_en: '',
				phone: '144',
			},
		]
	}
});
