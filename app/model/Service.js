Ext.define('USIMobile.model.Service', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'name_it', type: 'string'},
			{name: 'name_en', type: 'string'},
			{name: 'description_it', type: 'string'},
			{name: 'description_en', type: 'string'},
			{name: 'building_it', type: 'string'},
			{name: 'building_en', type: 'string'},
			{name: 'office', type: 'string'},
			{name: 'phone', type: 'string'},
			{name: 'email', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'timemodify', type: 'string'},
		]
	}

});
