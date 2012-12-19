Ext.define('USIMobile.model.ExaminationTimetable', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'faculty', type: 'string'},
			{name: 'level', type: 'string'},
			{name: 'session', type: 'string'},
			{name: 'registration_begin', type: 'string'},
			{name: 'registration_end', type: 'string'},
			{name: 'examination_begin', type: 'string'},
			{name: 'examination_end', type: 'string'},
			{name: 'filename', type: 'string'},
			{name: 'mime', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'timemodify', type: 'string'},
		]
	}

});
