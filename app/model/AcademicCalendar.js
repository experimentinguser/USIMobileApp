Ext.define('USIMobile.model.AcademicCalendar', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'year', type: 'string'},
			{name: 'url_it', type: 'string'},
			{name: 'url_en', type: 'string'},
			{name: 'timemodify', type: 'string'},
		]
	}
});
