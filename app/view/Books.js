Ext.define("USIMobile.view.Books", {
	extend: 'Ext.dataview.List',
	xtype: 'books',

	config: {
		id: 'books',
		itemTpl: '<div class="title">{title}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.author")]}</span>: {author}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.signature")]}</span>: {signature}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.library")]}</span>: {[Ux.locale.Manager.getLanguage() == "it" ? values.library_names.it : values.library_names.en]}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.publisher")]}</span>: {publisher}</div>'
					+'<div><span class="label">{[Ux.locale.Manager.get("label.publishdate")]}</span>: {publishdate}</div>',

		cls: 'books standard_font',

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
	},
});
