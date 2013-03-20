Ext.define("USIMobile.view.Calendar", {
	extend: 'Ext.dataview.List',
	xtype: 'calendar',

	config: {
		id: 'calendar',
		cls: 'standard_font',
		itemTpl: '{[values.id != "academiccalendar" ? values.title : values.title + USIMobile.Session.getAcademicCalendarStore().first().get("year")]}',
	},
});
