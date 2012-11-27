Ext.define('USIMobile.model.ShortNews', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'rank', type: 'int'},
			{name: 'title', type: 'string'},
			{name: 'publish_start_date', type: 'string'},
			{name: 'publish_end_date', type: 'string'},
			{name: 'event_start_date', type: 'string'},
		]
	}

});
