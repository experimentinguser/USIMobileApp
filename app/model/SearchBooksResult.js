Ext.define('USIMobile.model.SearchBooksResult', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'noresults', type: 'boolean', defaultValue: false},
			{name: 'revisesearch', type: 'boolean', defaultValue: false},
			{name: 'nextoffset', type: 'int'},
			{name: 'numberofresults', type: 'int'},
			{name: 'results', type: 'auto'},
		]
	}
});
