Ext.define("USIMobile.view.People", {
	extend: 'Ext.dataview.List',
	xtype: 'people',

	config: {
		id: 'people',
		title: 'People', 
		emptyText: 'No people found.',
		itemTpl: '<div>Name: {firstname} {lastname}</div>'+
					'<div>Email: {email}</div>'+
					'<div>Phone: {phone}</div>'+
					'<div>Floor: {phone}</div>' ,
	}
});
