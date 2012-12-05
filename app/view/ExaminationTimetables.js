Ext.define("USIMobile.view.ExaminationTimetables", {
	extend: 'Ext.dataview.List',
	xtype: 'examinationtimetables',

	config: {
		id: 'examinationtimetables',
		title: 'Examination Timetables', 
		emptyText: 'No info available.',
		//itemTpl: '<div class="short_news_title">{title}</div>'+ '<div class="short_news_publish_date">{publish_start_date}</div>',
	}
});
