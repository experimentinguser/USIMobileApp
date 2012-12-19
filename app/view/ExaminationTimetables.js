Ext.define("USIMobile.view.ExaminationTimetables", {
	extend: 'Ext.dataview.List',
	xtype: 'examinationtimetables',

	config: {
		id: 'examinationtimetables',
		title: 'Examination Timetables', 
		emptyText: 'No info available.',
		itemTpl: '<div class="examination_session">{session}</div>'+
					'<div class="registration_begin">'+
							'Registration begin: {[USIMobile.app.formatDate(values.registration_begin)]}'+
					'</div>'+
					'<div class="registration_end">'+
							'Registration end: {[USIMobile.app.formatDate(values.registration_end)]}'+
					'</div>'+
					'<div class="examination_begin">'+
							'Examination begin: {[USIMobile.app.formatDate(values.examination_begin)]}'+
					'</div>'+
					'<div class="examination_end">'+
							'Examination end: {[USIMobile.app.formatDate(values.examination_end)]}'+
					'</div>',
	}
});
