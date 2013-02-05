Ext.define("USIMobile.view.Services", {
	extend: 'Ext.dataview.List',
	xtype: 'services',

	config: {
		id: 'services',
		title: 'Services', 
		emptyText: 'No services found.',
		itemTpl: 	'<b>{name_en}</b> <br/>'+
					'{description_en} <br/><br/>'+
					'Building: {building_en} <br/>'+
					'Office: {office} <br/><br/>'+
					'e-mail: {email} <br/>'+
					'phone: {phone} <br/>',
	}
});
