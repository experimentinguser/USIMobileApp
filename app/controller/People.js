Ext.define('USIMobile.controller.People', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		views: [
			'SearchPeople',
			'People',
			'Person',
			'Profile',
		],
		
		models: [
			'Profile'
		],

		refs: {
			home: 'home',
			homePeopleButton: 'button#people_home_button',
			people: 'people',
			profile: 'profile',
			searchPeople: 'searchpeople',
			searchPeopleButton: 'searchpeople button[action=search]',
			callPersonButton: 'button[action=callperson]',
			mailPersonButton: 'button[action=mailperson]',
			profileButton: 'button[action=viewprofile]',
		},

		control: {
			homePeopleButton: { tap: 'showSearchPeople' },
			searchPeopleButton: { tap: 'searchPeople' },
			callPersonButton: { tap: 'callPerson' },
			mailPersonButton: { tap: 'mailPerson' },
			profileButton: { tap: 'showProfile' },
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
				xtype: 'searchpeople',
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
		var result_store = this.searchPeopleStore();
		if(typeof this.getPeople() == 'object') {
			this.getPeople().setStore(result_store);
			this.getHome().push(this.getPeople());
		} else {
			this.getHome().push({
				xtype: 'people',
				title: Ux.locale.Manager.get('title.people'),
				store: result_store
			});
		}
	},

	searchPeopleStore: function(){
		var list = new Array();
		// filter teaching timetables
		USIMobile.Session.getPeopleStore().each(
			function(record) {
				// list all if firstname or lastname has not been listed
				var result = true;
				if(this.filter.firstname == "" && this.filter.lastname == "") {
					return true;
				} else {
					// check firstname
					if( this.filter.firstname != "" ) {
						result = result && record.get('first_name').toLowerCase().indexOf(this.filter.firstname.toLowerCase()) == 0;
					} 
					// check lastname
					if( this.filter.lastname != "" ) {
						result = result && record.get('last_name').toLowerCase().indexOf(this.filter.lastname.toLowerCase()) == 0;
					} 

					if(result) {
						list.push(record.getData());
					}
				}
			},
			this
		);

		var result_store = Ext.create('Ext.data.Store', {
			model: 'USIMobile.model.People',
			data: list
		});
		
		return result_store;
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
		var person = this.getPeople().getSelection()[0];
		var phone = person.get('phone')[0].official;
		//USIMobile.app.openURL('tel:'+phone);
		window.location.href = 'tel:'+phone;
	},

	mailPerson: function(button){
		var person = this.getPeople().getSelection()[0];
		var to = person.get('email')[0].email;
		var subject = '';
		var body = '';
		USIMobile.app.sendEmail(to, subject, body);
	},

	openHomePage: function(button){
		var person = this.getPeople().getSelection()[0];
		USIMobile.app.openURL(person.get('url'));
	},


	showProfile: function(button){
		var person = this.getPeople().getSelection()[0];
		// clear filters
		if(typeof this.getProfile() == 'object') {
			this.getProfile().destroy();
		} 

		var profile_store = USIMobile.WebService.getProfile(person.get('url'));
		profile_store.on('load', function(store){
			this.getHome().push({
				xtype: 'profile',
				title: person.get('first_name') + ' ' + person.get('last_name'),
				record: store.first(),
			});
		}, this);
	},
});
