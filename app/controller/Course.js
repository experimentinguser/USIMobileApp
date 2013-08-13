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
		var resultStore = this.filterCoursesStore();
		if(typeof this.getCourses() == 'object') {
			this.getCourses().setStore(resultStore);
			this.getHome().push(this.getCourses());
		} else {
			this.getHome().push({
				xtype: 'courses',
				title: Ux.locale.Manager.get('title.courses'),
				emptyText: Ux.locale.Manager.get('message.noCourses'),
				store: resultStore
			});
		}
	},

	filterCoursesStore: function(){
		var resultStore = new Ext.create(
			'Ext.data.Store',
			{
				model: 'USIMobile.model.Course',
				sorters: 'title',
				groupField: this.filter.groupby,
			}
		);
		//USIMobile.Session.getCoursesStore().setGroupField(this.filter.groupby);
		// filter teaching timetables
		USIMobile.Session.getCoursesStore().each(
			function(record) {
				var result = true;
				// check course title and description
				if(this.filter.pattern != "") {
					if(
						!((record.get('title').toLowerCase().indexOf(this.filter.pattern.toLowerCase()) != -1) || 
						(record.get('description') != null && record.get('description').toLowerCase().indexOf(this.filter.pattern.toLowerCase()) != -1))
					){
						result = false;
					}
				}
				
				// check professor
				if(this.filter.professor != "") {
					if (record.get('professor').toLowerCase().indexOf(this.filter.professor.toLowerCase()) == -1){
						result = false;
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
				
				if(result == true) {
					resultStore.add(record);
				}
			},
			this
		);
		
		return resultStore;
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
