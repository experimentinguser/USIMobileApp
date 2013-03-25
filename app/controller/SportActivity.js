Ext.define('USIMobile.controller.SportActivity', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			home: '#home',
			homeSportActivityButton: 'button#sport_activity_home_button',
			searchSportActivityForm: '#searchsportactivityform',
			searchSportActivityButton: '#searchsportactivityform button[action=search]',
			sportActivities: '#sportactivities',
			sportActivity: '#sportactivity',
			sportActivityMailToButton: '#sportactivity button[action=mailto]',
		},

		control: {
			homeSportActivityButton: { tap: 'showSearchSportActivityForm' },
			searchSportActivityButton: { tap: 'searchSportActivity' },
			sportActivityMailToButton: { tap: 'mailTo' },
			sportActivities: {
				itemtap: 'showSportActivity',
				show: function() {
					USIMobile.app.hideLoadMask();
				}
			},
		}
	},
	
	init: function(){
		Ext.sa = this;
		this.filter = { };
	},

	showSearchSportActivityForm: function() {
		if(typeof this.getSearchSportActivityForm() == 'object') {
			this.getHome().push(this.getSearchSportActivityForm());
		} else {
			this.getHome().push({
				xtype: 'searchsportactivityform',
				title: Ux.locale.Manager.get('title.searchSportActivity'),
			});
		}
	},

	searchSportActivity: function() {
		USIMobile.app.showLoadMask('Searching Activities.');
		// set the filter
		this.filter = this.getSearchSportActivityForm().getValues();
		var scope = this;
		// wait for the loadmask to be displayed
		setTimeout(function() {
			scope.listSportActivities();
		}, 100);

	},

	listSportActivities: function() {
		this.filterSportActivityStore();
		var template = Ux.locale.Manager.getLanguage() == "en" ? '{name_en}' : '{name_it}';
		if(typeof this.getSportActivities() == 'object') {
			this.getSportActivities().setItemTpl(template);
			this.getSportActivities().refresh();
			this.getHome().push(this.getSportActivities());
		} else {
			this.getHome().push({
				xtype: 'sportactivities',
				itemTpl: template,
				title: Ux.locale.Manager.get('title.sportActivities'),
				emptyText: Ux.locale.Manager.get('message.noSportActivities'),
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
					result = result && record.get('category_en').toLowerCase().indexOf(this.filter.category.toLowerCase()) == 0;
				} 

				return result;
			},
			this
		);
	},

	showSportActivity: function(view, index, target, record) {
		if(typeof this.getSportActivity() == 'object') {
			this.getSportActivity().setRecord(record);
			this.getHome().push(this.getSportActivity());
		} else {
			this.getHome().push({
				xtype: 'sportactivity',
				title: Ux.locale.Manager.get('title.sportActivity'),
				record: record
			});
		}
	},

	mailTo: function(btn, e, opts) {
		activity_record = btn.getParent().getParent().getRecord();
		var subject = Ux.locale.Manager.getLanguage() == "en" ? activity_record.get('name_en') : activity_record.get('name_it');
		USIMobile.app.sendEmail(activity_record.get('contact_mail'), subject, 'Dear '+activity_record.get('contact_name')+',');
	},
});
