Ext.define("USIMobile.view.ShortNews", {
	extend: 'Ext.dataview.List',
	xtype: 'shortnews',

	config: {
		id: 'shortnews',
		title: 'USI News', 
		emptyText: 'No news available.',
		itemTpl: '<div class="short_news_title">{title}</div>'+
					'<div class="short_news_publish_date">{publish_start_date}</div>',
	}
});
