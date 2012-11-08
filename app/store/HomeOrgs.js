Ext.define('USIMobile.store.HomeOrgs', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.HomeOrg'
	],

	config: {
		storeId: 'homeorganisations_store',
		model: 'USIMobile.model.HomeOrg',
		autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'ajax',	
			url: USIMobile.Config.getHomeOrgsUrl(),
			reader: {
				type: 'json',
				rootProperty: 'response'
			}
		}
	}
});
