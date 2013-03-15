Ext.define("USIMobile.view.ExaminationTimetables", {
	extend: 'Ext.dataview.List',
	xtype: 'examinationtimetables',

	config: {
		id: 'examinationtimetables',
		itemTpl: '<div class="examination_session">{session}</div>'+
					'<div class="registration_begin">'+
							'{[Ux.locale.Manager.get("label.registrationBegin")]}: {[USIMobile.app.formatDate(values.registration_begin)]}'+
					'</div>'+
					'<div class="registration_end">'+
							'{[Ux.locale.Manager.get("label.registrationEnd")]}: {[USIMobile.app.formatDate(values.registration_end)]}'+
					'</div>'+
					'<div class="examination_begin">'+
							'{[Ux.locale.Manager.get("label.examinationBegin")]}: {[USIMobile.app.formatDate(values.examination_begin)]}'+
					'</div>'+
					'<div class="examination_end">'+
							'{[Ux.locale.Manager.get("label.registrationEnd")]}: {[USIMobile.app.formatDate(values.examination_end)]}'+
					'</div>',
	}
});
