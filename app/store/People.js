Ext.define('USIMobile.store.People', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage',
		'USIMobile.model.People',
	],

	models: [ ],

	config: {
		storeId: 'people_store',
		model: 'USIMobile.model.People',
		autoLoad: true,
		autoSync: true,
		sorters: 'firstname',
		proxy: {
			type: 'localstorage',	
			id: 'people'
		},
	}
});
