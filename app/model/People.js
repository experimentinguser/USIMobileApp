Ext.define('USIMobile.model.People', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'firstname', type: 'string'},
			{name: 'lastname', type: 'string'},
			{name: 'email', type: 'string'},
			{name: 'phone', type: 'string'},
			{name: 'floor', type: 'string'},
		]
	}

});
