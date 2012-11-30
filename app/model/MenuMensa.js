Ext.define('USIMobile.model.MenuMensa', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'url', type: 'string'},
			{name: 'filename', type: 'string'},
			{name: 'mime', type: 'string'},
			{name: 'timemodify', type: 'string'},
		]
	}
});
