Ext.define("USIMobile.view.MessagePanel", {
	extend: 'Ext.Panel',
	xtype: 'messagepanel',

	config: {
		id: 'messagepanel',
		cls: 'standard_font',
		modal: true,
		centered: true,
		hideOnMaskTap: true,
		width: '300px',
		height: '300px',
		html: '...',
		items: [
			{
				xtype: 'titlebar',
				id: 'messagepanelbar',
				title: 'Info',
				items: [
					{
						xtype: 'button',
						align: 'right',
						id: 'closemessagepanel',
						locales: {
							text: 'button.close',
						},
					}
				]
			},
		]
	},
});
