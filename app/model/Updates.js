Ext.define('USIMobile.model.Updates', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'courses', type: 'string'},
			{name: 'teachingtimetables', type: 'string'},
			{name: 'examinationtimetables', type: 'string'},
			{name: 'usinews', type: 'string'},
			{name: 'menumensa', type: 'string'},
		]
	}
});
