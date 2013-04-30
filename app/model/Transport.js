Ext.define('USIMobile.model.Transport', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'provider', type: 'string'},
			{name: 'description', type: 'string'},
			{name: 'url', type: 'string'},
		]
	}

});
