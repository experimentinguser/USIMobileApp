Ext.define('USIMobile.model.People', {
	extend: 'Ext.data.Model',
	
	config: {
		//identifier: 'uuid',
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'first_name', type: 'string'},
			{name: 'last_name', type: 'string'},
			{name: 'email', type: 'auto'},
			{name: 'phone', type: 'auto'},
			{name: 'url', type: 'string'},
		]
	}

});
