Ext.define("USIMobile.view.People", {
	extend: 'Ext.dataview.List',
	xtype: 'people',

	config: {
		id: 'people',
		emptyText: 'No people found.',
		cls: 'standard_font',
		itemTpl: '<div>Name: {firstname} {lastname}</div>'+
					'<div>Email: {email}</div>'+
					'<div>Phone: {phone}</div>'+
					'<div>Floor: {phone}</div>' ,
	}
});
