Ext.define('USIMobile.controller.Course', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			dash: '#dash',
			dashCoursesButton: 'button#courses_dash_button',
			courses: '#courses',
			course: '#course',
			searchCoursesForm: '#searchcourses',
			searchCoursesButton: '#searchcourses button[action=search]',
			faculties: '#faculties',
			levels: '#levels',
		},

		control: {
			dashCoursesButton: { tap: 'showSearchCoursesForm' },
			searchCoursesButton: { tap: 'searchCourses' },
			courses: { itemtap: 'showCourse' },

		}
	},
	
	init: function(){
		Ext.sc = this;
		this.filter = { };
	},

	showSearchCoursesForm: function() {
		if(typeof this.getSearchCoursesForm() == 'object') {
			this.getDash().push(this.getSearchCoursesForm());
		} else {
			this.getDash().push({
				xtype: 'searchcoursesform',	
			});
		}
	},

	searchCourses: function() {
		// set the filter
		this.filter = this.getSearchCoursesForm().getValues();
		this.listCourses();
	},

	listCourses: function() {
		this.filterCoursesStore();

		if(typeof this.getCourses() == 'object') {
			this.getCourses().refresh();
			this.getDash().push(this.getCourses());
		} else {
			this.getDash().push({
				xtype: 'courses',
				store: USIMobile.Session.getCoursesStore()
			});
		}
	},

	filterCoursesStore: function(){
		USIMobile.Session.getCoursesStore().setGroupField(this.filter.groupby);
		// filter teaching timetables
		USIMobile.Session.getCoursesStore().clearFilter();
		USIMobile.Session.getCoursesStore().filterBy(
			function(record) {
				var result = true;
				// check course title and description
				if(this.filter.pattern != ""){
					if(
						!((record.get('title').toLowerCase().indexOf(this.filter.pattern.toLowerCase()) != -1) || 
						(record.get('description') != null && record.get('description').toLowerCase().indexOf(this.filter.pattern.toLowerCase()) != -1))
					){
						return false;
					}
				}
				
				// check professor
				if(this.filter.professor != ""){
					if (record.get('professor').toLowerCase().indexOf(this.filter.professor.toLowerCase()) == -1){
						return false;
					}
				}

				// check faculty
				if(this.filter.faculty != 'all') {
					result = result && record.get('faculty') == this.filter.faculty;
				}

				// check level
				if(this.filter.level != 'all') {
					result = result && record.get('level') == this.filter.level;
				}

				// check semester
				if(this.filter.semester != 'both') {
					result = result && record.get('semester') == this.filter.semester;
				}
				return result;
			},
			this
		);

	},

	showCourse: function(view, index, target, record) {
		if(typeof this.getCourse() == 'object') {
			this.getCourse().setRecord(record);
			this.getDash().push(this.getCourse());
		} else {
			this.getDash().push({
				xtype: 'course',
				record: record
			});
		}
	}

});
