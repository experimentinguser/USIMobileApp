Ext.define('USIMobile.model.Updates', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'menumensa', type: 'string'},
			{name: 'teachingtimetables', type: 'string'},
		]
	}
});
