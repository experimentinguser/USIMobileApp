Ext.define('USIMobile.model.Settings', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [
			{name: 'usageagreement', type: 'boolean', defaultValue: false},
			{name: 'cache', type: 'boolean', defaultValue: true},
			{name: 'language', type: 'string', defaultValue: 'en'},
			{name: 'username', type: 'string'},
			{name: 'password', type: 'string'},
			{name: 'homeorganisation', type: 'string'},
		]
	}
});
