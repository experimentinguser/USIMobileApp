Ext.define('USIMobile.model.Book', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'id', type: 'auto'},
			{name: 'title', type: 'string'},
			{name: 'author', type: 'string'},
			{name: 'signature', type: 'string'},
			{name: 'publisher', type: 'string'},
			{name: 'publishdate', type: 'string'},
			{name: 'nebisnumber', type: 'string'},
			{name: 'sbtnumber', type: 'string'},
		]
	}
});
