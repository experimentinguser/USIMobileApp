Ext.define('USIMobile.model.Journal', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'title', type: 'string'},
			{name: 'issn', type: 'string'},
			{name: 'collection', type: 'string'},
			{name: 'linktext', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'topic', type: 'string'},
		]
	}
});
