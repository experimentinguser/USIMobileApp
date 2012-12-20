Ext.define('USIMobile.model.AcademicCalendar', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'year', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'filename', type: 'string'},
			{name: 'mime', type: 'string'},
			{name: 'timemodify', type: 'string'},
		]
	}
});
