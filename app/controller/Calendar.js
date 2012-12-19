Ext.define('USIMobile.controller.Calendar', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			dash: '#dash',
			calendarButton: 'button#calendar_dash_button',
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
			this.getDash().push(this.getCalendar());
		} else {
			this.getDash().push({
				xtype: 'calendar',	
			});
		}
	},

	selectCalendar: function(view, index, target, record) {
		// record the faculty choice
		this.filter.calendar = record.get('id');
		this.showFaculties();
	},

	showFaculties: function() {
		if(typeof this.getFaculties() == 'object') {
			this.getDash().push(this.getFaculties());
		} else {
			this.getDash().push({
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
			this.getDash().push(this.getLevels());
		} else {
			this.getDash().push({
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
			this.getDash().push(this.getTeachingTimetables());
		} else {
			this.getDash().push({
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
			this.getDash().push(this.getExaminationTimetables());
		} else {
			this.getDash().push({
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
