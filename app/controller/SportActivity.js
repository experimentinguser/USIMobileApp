Ext.define('USIMobile.controller.SportActivity', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			dash: '#dash',
			dashSportActivityButton: 'button#sport_activity_dash_button',
			searchSportActivityForm: '#searchsportactivityform',
			searchSportActivityButton: '#searchsportactivityform button[action=search]',
			sportActivities: '#sportactivities',
			sportActivity: '#sportactivity',
			sportActivityMailToButton: '#sportactivity button[action=mailto]',
		},

		control: {
			dashSportActivityButton: { tap: 'showSearchSportActivityForm' },
			searchSportActivityButton: { tap: 'searchSportActivity' },
			sportActivities: { itemtap: 'showSportActivity' },
			sportActivityMailToButton: { tap: 'mailTo' }
		}
	},
	
	init: function(){
		this.filter = { };
	},

	showSearchSportActivityForm: function() {
		console.log('show sport activity');
		if(typeof this.getSearchSportActivityForm() == 'object') {
			this.getDash().push(this.getSearchSportActivityForm());
		} else {
			this.getDash().push({
				xtype: 'searchsportactivityform',
			});
		}
	},

	searchSportActivity: function() {
		// set the filter
		this.filter = this.getSearchSportActivityForm().getValues();
		this.listSportActivities();
	},

	listSportActivities: function() {
		this.filterSportActivityStore();

		if(typeof this.getSportActivities() == 'object') {
			this.getSportActivities().refresh();
			this.getDash().push(this.getSportActivities());
		} else {
			this.getDash().push({
				xtype: 'sportactivities',
				store: USIMobile.Session.getSportActivityStore()
			});
		}
	},

	filterSportActivityStore: function(){
		USIMobile.Session.getSportActivityStore().clearFilter();
		USIMobile.Session.getSportActivityStore().filterBy(
			function(record) {
				var result = true;

				if(this.filter.name != "") {
					result = result && record.get('name_en').toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1;
				} 

				if(this.filter.category != "all") {
					result = result && record.get('category').toLowerCase().indexOf(this.filter.category.toLowerCase()) == 0;
				} 

				return result;
			},
			this
		);
	},

	showSportActivity: function(view, index, target, record) {
		if(typeof this.getSportActivity() == 'object') {
			this.getSportActivity().setRecord(record);
			this.getDash().push(this.getSportActivity());
		} else {
			this.getDash().push({
				xtype: 'sportactivity',
				record: record
			});
		}
	},

	mailTo: function(btn, e, opts) {
		activity_record = btn.getParent().getParent().getRecord();
		USIMobile.app.sendEmail(activity_record.get('contact_mail'), activity_record.get('name'), 'Dear '+activity_record.get('contact_name')+',');
	},
});
