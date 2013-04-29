Ext.define('USIMobile.controller.Course', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		views: [
			'SearchCourses',
			'Courses',
			'Course',
		],

		refs: {
			home: 'home',
			homeCoursesButton: 'button#courses_home_button',
			courses: 'courses',
			course: 'course',
			searchCourses: 'searchcourses',
			searchCoursesButton: 'searchcourses button[action=search]',
		},

		control: {
			homeCoursesButton: { tap: 'showSearchCourses' },
			searchCourses: {
				painted: function() {
					// clear previous search filters
					// wait 200ms to do that because 
					// this operation requires resources
					setTimeout(function() {
						USIMobile.Session.getCoursesStore().clearFilter();
					}, 200);
				}
			},

			searchCoursesButton: { tap: 'searchCourses' },
			courses: {
				itemtap: 'showCourse',
				show: function() {
					USIMobile.app.hideLoadMask();
				}
			},
		}
	},
	
	init: function(){
		this.filter = { };
		Ext.sc = this;
	},

	showSearchCourses: function() {
		if(typeof this.getSearchCourses() == 'object') {
			this.getHome().push(this.getSearchCourses());
		} else {
			this.getHome().push({
				xtype: 'searchcourses',	
				title: Ux.locale.Manager.get('title.searchCourses'),
			});
		}
	},

	searchCourses: function() {
		USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.searchingCourses'));
		// set the filter
		this.filter = this.getSearchCourses().getValues();
		var scope = this;
		// wait for the loadmask to be displayed
		setTimeout(function() {
			scope.listCourses();
		}, 100);
	},

	listCourses: function() {
		this.filterCoursesStore();
		if(typeof this.getCourses() == 'object') {
			this.getCourses().refresh();
			this.getHome().push(this.getCourses());
		} else {
			this.getHome().push({
				xtype: 'courses',
				title: Ux.locale.Manager.get('title.courses'),
				emptyText: Ux.locale.Manager.get('message.noCourses'),
				store: USIMobile.Session.getCoursesStore()
			});
		}
	},

	filterCoursesStore: function(){
		USIMobile.Session.getCoursesStore().setGroupField(this.filter.groupby);
		// filter teaching timetables
		USIMobile.Session.getCoursesStore().filterBy(
			function(record) {
				var result = true;
				// check course title and description
				if(this.filter.pattern != "") {
					if(
						!((record.get('title').toLowerCase().indexOf(this.filter.pattern.toLowerCase()) != -1) || 
						(record.get('description') != null && record.get('description').toLowerCase().indexOf(this.filter.pattern.toLowerCase()) != -1))
					){
						return false;
					}
				}
				
				// check professor
				if(this.filter.professor != "") {
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
			this.getHome().push(this.getCourse());
		} else {
			this.getHome().push({
				xtype: 'course',
				title: Ux.locale.Manager.get('title.course'),
				record: record
			});
		}
	}

});
