Ext.define('USIMobile.controller.People', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			home: '#home',
			homePeopleButton: 'button#people_home_button',
			people: '#people',
			searchPeopleForm: '#searchpeople',
			searchPeopleButton: '#searchpeople button[action=search]',
		},

		control: {
			homePeopleButton: { tap: 'showSearchPeopleForm' },
			searchPeopleButton: { tap: 'searchPeople' },
			people: {
				show: function() {
					USIMobile.app.hideLoadMask();
				}
			}
		}
	},
	
	init: function(){
		Ext.sp = this;
		this.filter = { };
	},

	showSearchPeopleForm: function() {
		if(typeof this.getSearchPeopleForm() == 'object') {
			this.getHome().push(this.getSearchPeopleForm());
		} else {
			this.getHome().push({
				xtype: 'searchpeopleform',
				title: Ux.locale.Manager.get('title.searchPeople'),
			});
		}
	},

	searchPeople: function() {
		USIMobile.app.showLoadMask('Searching People.');
		// set the filter
		this.filter = this.getSearchPeopleForm().getValues();
		var scope = this;
		// wait for the loadmask to be displayed
		setTimeout(function() {
			scope.listPeople();
		}, 100);
	},

	listPeople: function() {
		this.filterPeopleStore();

		if(typeof this.getPeople() == 'object') {
			this.getPeople().refresh();
			this.getHome().push(this.getPeople());
		} else {
			this.getHome().push({
				xtype: 'people',
				title: Ux.locale.Manager.get('title.people'),
				store: USIMobile.Session.getPeopleStore()
			});
		}
	},

	filterPeopleStore: function(){
		USIMobile.Session.getPeopleStore().setGroupField(this.filter.groupby);
		// filter teaching timetables
		USIMobile.Session.getPeopleStore().clearFilter();
		USIMobile.Session.getPeopleStore().filterBy(
			function(record) {
				// list all if firstname or lastname has not been listed
				/*
				if(this.filter.firstname == "" && this.filter.lastname == "") {
					return true;
				} else {
					if(
						(record.get('firstname') != null && this.filter.firstname != "" && record.get('firstname').toLowerCase().indexOf(this.filter.firstname.toLowerCase()) == 0) || 
						(record.get('lastname') != null && this.filter.lastname != "" && record.get('lastname').toLowerCase().indexOf(this.filter.lastname.toLowerCase()) == 0)
					){
						return true;
					} else {
						return false;
					}
				}
				*/
				var result = true;
				if(this.filter.firstname == "" && this.filter.lastname == "") {
					return true;
				} else {
					// check firstname
					if( this.filter.firstname != "" ) {
						result = result && record.get('firstname').toLowerCase().indexOf(this.filter.firstname.toLowerCase()) == 0;
					} 
					// check lastname
					if( this.filter.lastname != "" ) {
						result = result && record.get('lastname').toLowerCase().indexOf(this.filter.lastname.toLowerCase()) == 0;
					} 
					return result;
				}
			},
			this
		);

	},

	showPeople: function(view, index, target, record) {
		if(typeof this.getPeople() == 'object') {
			this.getPeople().setRecord(record);
			this.getHome().push(this.getPeople());
		} else {
			this.getHome().push({
				xtype: 'people',
				record: record
			});
		}
	}

});
