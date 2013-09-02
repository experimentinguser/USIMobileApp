Ext.define("USIMobile.view.ShortCommunityNews", {
	extend: 'Ext.dataview.List',
	xtype: 'shortcommunitynews',

	config: {
		id: 'shortcommunitynews',
		itemTpl: '<div class="short_news_title">{title}</div>'+
					'<div class="short_news_publish_date">{[USIMobile.app.formatDate(values.publish_start_date)]}</div>',
	}
});
