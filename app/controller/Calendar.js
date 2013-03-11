Ext.define('USIMobile.controller.Calendar', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			home: '#home',
			calendarButton: 'button#calendar_home_button',
			calendar: '#calendar',
			faculties: '#faculties',
			levels: '#levels',
			teachingTimetables: '#teachingtimetables',
			examinationTimetables: '#examinationtimetables',
		},

		control: {
			calendarButton: { tap: 'showCalendar' },
			calendar: { itemtap: 'selectCalendar' },
			faculties: { itemtap: 'selectFaculty' },
			levels: { itemtap: 'selectLevel' },
			teachingTimetables: { itemtap: 'selectTeachingTimetable' },
			examinationTimetables: { itemtap: 'selectExaminationTimetable' },
		}
	},
	
	init: function(){
		Ext.t = this;
		this.filter = { calendar: null, faculty: null, level: null };
	},

	showCalendar: function(btn, e, eOpts){
		// display news
		if(typeof this.getCalendar() == 'object') {
			this.getHome().push(this.getCalendar());
		} else {
			this.getHome().push({
				xtype: 'calendar',	
			});
		}
	},

	selectCalendar: function(view, index, target, record) {
		// record the faculty choice
		if(record.get('id') == 'academiccalendar') {
			this.showAcademicCalendar();
		} else {
			this.filter.calendar = record.get('id');
			this.showFaculties();
		}
	},


	showAcademicCalendar: function(){
		var data = USIMobile.Session.getAcademicCalendarStore().first().getData();
		USIMobile.app.getFile(data.url, data.filename, data.mime);	
	},

	showFaculties: function() {
		if(typeof this.getFaculties() == 'object') {
			this.getHome().push(this.getFaculties());
		} else {
			this.getHome().push({
				xtype: 'faculties',	
			});
		}
	},

	selectFaculty: function(view, index, target, record) {
		// record the faculty choice
		this.filter.faculty = record.get('id');
		this.showLevels();
	},

	showLevels: function() {
		if(typeof this.getLevels() == 'object') {
			this.getHome().push(this.getLevels());
		} else {
			this.getHome().push({
				xtype: 'levels',
			});
		}
	},

	selectLevel: function(view, index, target, record) {
		// record the faculty choice
		this.filter.level = record.get('id');

		switch(this.filter.calendar) {
			case 'teaching':	
				this.showTeachingTimetables();
				break;
			case 'examination':	
				this.showExaminationTimetables();
				break;
		}
	},

	showTeachingTimetables: function() {
		if(typeof this.getTeachingTimetables() == 'object') {
			this.getTeachingTimetables().store = this.getFilteredTeachingTimetablesStore();
			this.getHome().push(this.getTeachingTimetables());
		} else {
			this.getHome().push({
				xtype: 'teachingtimetables',
				store: this.getFilteredTeachingTimetablesStore()
			});
		}
	},

	getFilteredTeachingTimetablesStore: function(){
		USIMobile.Session.getTeachingTimetablesStore().clearFilter();
		USIMobile.Session.getTeachingTimetablesStore().filterBy(
			function(record) {
					return record.get('faculty') === this.filter.faculty && record.get('level') === this.filter.level;
			},
			this
		);
		return USIMobile.Session.getTeachingTimetablesStore();
	},

	selectTeachingTimetable: function(view, index, target, record) {
		// record the faculty choice
		if(record.get('mime') == 'website') {
			USIMobile.app.openURL(record.get('url'));	
		} else {
			USIMobile.app.getFile(record.get('url'), record.get('filename'), record.get('mime'));	
		}
	},

	showExaminationTimetables: function() {
		if(typeof this.getExaminationTimetables() == 'object') {
			this.getExaminationTimetables().store = this.getFilteredExaminationTimetablesStore();
			this.getHome().push(this.getExaminationTimetables());
		} else {
			this.getHome().push({
				xtype: 'examinationtimetables',
				store: this.getFilteredExaminationTimetablesStore()
			});
		}
	},

	getFilteredExaminationTimetablesStore: function(){
		USIMobile.Session.getExaminationTimetablesStore().clearFilter();
		USIMobile.Session.getExaminationTimetablesStore().filterBy(
			function(record) {
					return record.get('faculty') === this.filter.faculty && record.get('level') === this.filter.level;
			},
			this
		);
		return USIMobile.Session.getExaminationTimetablesStore();
	},

	selectExaminationTimetable: function(view, index, target, record) {
		// record the faculty choice
		if(record.get('url') == null || record.get('filename') == null || record.get('mime') == null) {
			Ext.Msg.alert('File not available','This timetable has not been provided yet.');
		}else if(record.get('mime') == 'website') {
			USIMobile.app.openURL(record.get('url'));	
		} else {
			USIMobile.app.getFile(record.get('url'), record.get('filename'), record.get('mime'));	
		}
	},

});
