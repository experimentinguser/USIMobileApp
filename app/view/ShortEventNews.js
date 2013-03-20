Ext.define("USIMobile.view.ShortEventNews", {
	extend: 'Ext.dataview.List',
	xtype: 'shorteventnews',

	config: {
		id: 'shorteventnews',
		itemTpl: '<div class="short_event_news_title">{title}</div>'+
					'<div class="short_event_news_publish_date">{[USIMobile.app.formatDate(values.publish_start_date)]}</div>',
	}
});
