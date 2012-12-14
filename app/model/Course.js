Ext.define('USIMobile.model.Course', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'title', type: 'string'},
			{name: 'description', type: 'string'},
			{name: 'professor', type: 'string'},
			{name: 'credits', type: 'int'},
			{name: 'faculty', type: 'string'},
			{name: 'level', type: 'string'},
			{name: 'semester', type: 'string'},
			{name: 'semester_begin', type: 'string'},
			{name: 'semester_end', type: 'string'},
		]
	}

});
