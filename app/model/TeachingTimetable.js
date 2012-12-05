Ext.define('USIMobile.model.TeachingTimetable', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'faculty', type: 'string'},
			{name: 'level', type: 'string'},
			{name: 'program', type: 'string'},
			{name: 'semester', type: 'string'},
			{name: 'filename', type: 'string'},
			{name: 'mime', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'timemodify', type: 'string'},
		]
	}

});
