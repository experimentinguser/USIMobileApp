Ext.define("USIMobile.view.Journals", {
	extend: 'Ext.dataview.List',
	//extend: 'Ext.Panel',
	xtype: 'journals',

	config: {
		id: 'journals',
		cls: 'standard_font',
		itemTpl: '<div class="title">{title}</div>'
					+'<div><span class="label">ISSN</span>: {issn}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.collection")]}</span>: {collection}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.topic")]}</span>: {topic}</div>'
					+'<div class="status">{[values.url == null ? "Offline" : "Online"]}</div>',
		items: [
			{
				xtype: 'button',
				baseCls: 'navigation_btn',
				locales: {
					text: 'button.previousPage'
				},
				action: 'previousPage',
				hidden: true,
				docked: 'top',
			},
			{
				xtype: 'button',
				baseCls: 'navigation_btn',
				locales: {
					text: 'button.nextPage'
				},
				action: 'nextPage',
				hidden: true,
				docked: 'bottom',
			}
		]
	}
});
