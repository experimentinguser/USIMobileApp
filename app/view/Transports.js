Ext.define("USIMobile.view.Transports", {
	extend: 'Ext.dataview.List',
	xtype: 'transports',

	config: {
		itemTpl: '<div class="name">{description}</div>',
		cls: 'transports standard_font',
		grouped: true,
	},
});
