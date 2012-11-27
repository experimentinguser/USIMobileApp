Ext.define('USIMobile.model.DetailedNews', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [ 
			{name: 'id', type: 'int'},
			{name: 'title', type: 'string'},
			{name: 'body', type: 'string'},
			{name: 'url', type: 'string'},
			{name: 'prv_name', type: 'string'},
			{name: 'prv_img', type: 'string'},
			{name: 'attachments', type: 'auto'},
			{name: 'img', type: 'string'},
			{name: 'publish_start_date', type: 'string'},
			{name: 'event_start_date', type: 'string'},
			{name: 'event_duration_days', type: 'int'},
			{name: 'publish_end_date', type: 'string'},
		]
	}

});
