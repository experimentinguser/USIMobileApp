Ext.define('USIMobile.model.Profile', {
	extend: 'Ext.data.Model',
	
	config: {
		//identifier: 'uuid',
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'first_name', type: 'string'},
			{name: 'last_name', type: 'string'},
			{name: 'biography_it', type: 'string'},
			{name: 'biography_en', type: 'string'},
			{name: 'research_it', type: 'string'},
			{name: 'research_en', type: 'string'},
			{name: 'office_hours', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'picture_url', type: 'string'},
			{name: 'phone', type: 'auto'},
			{name: 'email', type: 'auto'},
			{name: 'attachment', type: 'auto'},
			{name: 'place', type: 'auto'},
			{name: 'faculty_position', type: 'auto'},
			{name: 'unit_function', type: 'auto'},
		]
	}

});
