Ext.define("USIMobile.view.ShortNews", {
	extend: 'Ext.dataview.List',
	xtype: 'shortnews',

	config: {
		id: 'shortnews',
		itemTpl: '<div class="short_news_title">{title}</div>'+
					'<div class="short_news_publish_date">{[USIMobile.app.formatDate(values.publish_start_date)]}</div>',
	}
});
