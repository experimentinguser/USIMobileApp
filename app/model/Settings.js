Ext.define('USIMobile.model.Settings', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [
			{name: 'usageagreement', type: 'boolean'},
			{name: 'accountset', type: 'boolean', defaultValue: false}
		]
	}
});
