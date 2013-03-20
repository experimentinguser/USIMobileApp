Ext.define('USIMobile.model.Updates', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'courses', type: 'string'},
			{name: 'academiccalendar', type: 'string'},
			{name: 'teachingtimetables', type: 'string'},
			{name: 'examinationtimetables', type: 'string'},
			{name: 'people', type: 'string'},
			{name: 'usinews', type: 'string'},
			{name: 'usieventnews', type: 'string'},
			{name: 'usicommunitynews', type: 'string'},
			{name: 'menumensa', type: 'string'},
			{name: 'sport', type: 'string'},
			{name: 'services', type: 'string'},
		]
	}
});
