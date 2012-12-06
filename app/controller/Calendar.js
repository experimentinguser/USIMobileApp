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
			timetables: '#timetables',
			examinationTimetables: '#examinationtimetables',
		},

		control: {
			calendarButton: { tap: 'showCalendar' },
			calendar: { itemtap: 'selectCalendar' },
			faculties: { itemtap: 'selectFaculty' },
			levels: { itemtap: 'selectLevel' },
			timetables: { itemtap: 'selectTimetable' },
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
		this.showTimetables();
	},

	showTimetables: function() {
		if(typeof this.getTimetables() == 'object') {
			this.getTimetables().store = this.getFilteredTimetablesStore();
			this.getDash().push(this.getTimetables());
		} else {
			this.getDash().push({
				xtype: 'timetables',
				store: this.getFilteredTimetablesStore()
			});
		}
	},

	getFilteredTimetablesStore: function(){
		// filter teaching timetables
		switch(this.filter.calendar) {
			case 'teaching':
				USIMobile.Session.getTeachingTimetablesStore().clearFilter();
				USIMobile.Session.getTeachingTimetablesStore().filterBy(
					function(record) {
							return record.get('faculty') === this.filter.faculty && record.get('level') === this.filter.level;
					},
					this
				);
				return USIMobile.Session.getTeachingTimetablesStore();
				break;
		}
	},

	selectTimetable: function(view, index, target, record) {
		// record the faculty choice
		if(record.get('mime') == 'website') {
			USIMobile.app.openURL(record.get('url'));	
		} else {
			USIMobile.app.getFile(record.get('url'), record.get('filename'), record.get('mime'));	
		}
	},

});
