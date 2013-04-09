Ext.define('USIMobile.controller.People', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			home: '#home',
			homePeopleButton: 'button#people_home_button',
			people: '#people',
			searchPeople: '#searchpeople',
			searchPeopleButton: '#searchpeople button[action=search]',
			callPersonButton: 'button[action=callperson]',
			mailPersonButton: 'button[action=mailperson]',
			homePagePersonButton: 'button[action=openpersonurl]',
		},

		control: {
			homePeopleButton: { tap: 'showSearchPeople' },
			searchPeople: {
				show: function() {
					// clear previous search filters
					// wait 200ms to do that because 
					// this operation requires resources
					setTimeout(function() { USIMobile.Session.getPeopleStore().clearFilter(); }, 500); 
				}
			},
			searchPeopleButton: { tap: 'searchPeople' },
			callPersonButton: { tap: 'callPerson' },
			mailPersonButton: { tap: 'mailPerson' },
			homePagePersonButton: { tap: 'openHomePage' },
			people: {
				show: function() {
					USIMobile.app.hideLoadMask();
				},
			}
		}
	},
	
	init: function(){
		Ext.sp = this;
		this.filter = { };
	},

	showSearchPeople: function() {
		// clear filters
		if(typeof this.getSearchPeople() == 'object') {
			this.getHome().push(this.getSearchPeople());
		} else {
			this.getHome().push({
				xtype: 'searchpeopleform',
				title: Ux.locale.Manager.get('title.searchPeople'),
			});
		}
	},

	searchPeople: function() {
		USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.searchingPeople'));
		// set the filter
		this.filter = this.getSearchPeople().getValues();
		var scope = this;
		// wait for the loadmask to be displayed
		setTimeout(function() {
			scope.listPeople();
		}, 100);
	},

	listPeople: function() {
		this.filterPeopleStore();

		if(typeof this.getPeople() == 'object') {
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
		USIMobile.Session.getPeopleStore().filterBy(
			function(record) {
				// list all if firstname or lastname has not been listed
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
	},

	callPerson: function(button){
		var record = button.getParent().getParent().getParent().getRecord();
		USIMobile.app.openURL('tel:'+record.get('phone'));
	},

	mailPerson: function(button){
		var record = button.getParent().getParent().getParent().getRecord();
		var to = record.get('email');
		var subject = '';
		var body = '';
		USIMobile.app.sendEmail(to, subject, body);
	},

	openHomePage: function(button){
		var record = button.getParent().getParent().getParent().getRecord();
		USIMobile.app.openURL(record.get('url'));
	},
});
