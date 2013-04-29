Ext.define('USIMobile.controller.SportActivity', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		views: [
			'SearchSportActivity',
			'SportActivities',
			'SportActivity',
		],
		refs: {
			home: 'home',
			homeSportActivityButton: 'button#sport_activity_home_button',
			searchSportActivityForm: 'searchsportactivity',
			searchSportActivityButton: 'searchsportactivity button[action=search]',
			sportActivities: 'sportactivities',
			sportActivity: 'sportactivity',
			sportActivityMailToButton: 'sportactivity button[action=mailto]',
			sportActivitySubscribeButton: 'sportactivity button[action=subscribe]',
			sportActivityUnsubscribeButton: 'sportactivity button[action=unsubscribe]',
		},

		control: {
			homeSportActivityButton: { tap: 'showSearchSportActivityForm' },
			searchSportActivityButton: { tap: 'searchSportActivity' },
			sportActivityMailToButton: { tap: 'mailTo' },
			sportActivitySubscribeButton: { tap: 'subscribe' },
			sportActivityUnsubscribeButton: { tap: 'unsubscribe' },
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
		this.checkMembership();
		if(typeof this.getSearchSportActivityForm() == 'object') {
			this.getHome().push(this.getSearchSportActivityForm());
		} else {
			this.getHome().push({
				xtype: 'searchsportactivity',
				title: Ux.locale.Manager.get('title.searchSportActivity'),
			});
		}
	},

	searchSportActivity: function() {
		USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.searchingSportActivities'));
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
					result = result && record.get('name_' + Ux.locale.Manager.getLanguage()).toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1;
				} 

				if(this.filter.category != "all") {
					result = result && record.get('category_' + Ux.locale.Manager.getLanguage()).toLowerCase().indexOf(this.filter.category.toLowerCase()) == 0;
				} 

				return result;
			},
			this
		);
	},

	showSportActivity: function(view, index, target, record) {
		this.checkSubscription(record);
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
		var activity_record = btn.getParent().getParent().getRecord();
		var subject = Ux.locale.Manager.getLanguage() == "en" ? activity_record.get('name_en') : activity_record.get('name_it');
		USIMobile.app.sendEmail(activity_record.get('contact_mail'), subject, 'Dear '+activity_record.get('contact_name')+',');
	},

	checkMembership: function() {
		var userdata = this.getUserData();
		if(userdata == false) { return; }
		var self = this;
		Ext.Ajax.request({
			url: USIMobile.Config.getSportCheckMembershipUrl(),
			method: 'GET',
			format:'json',
			useDefaultXhrHeader: false,
			
			params: userdata,
				
			callback: function(options, success, server_response) {
				if (success) {
					var result = Ext.JSON.decode(server_response.responseText);
					if(result.error != null) {
						self.displayError(result.error.code, result.error.message);
					}
				} else{
					self.displayError(7);
				}
			}
		  });
	},

	checkSubscription: function(record) {
		var data = this.getUserData();
		if(data == false) { return; }
		data.activity = record.get('id');
		var self = this;
		Ext.Ajax.request({
			url: USIMobile.Config.getSportCheckSubscriptionUrl(),
			method: 'GET',
			format:'json',
			useDefaultXhrHeader: false,
			
			params: data,
				
			callback: function(options, success, server_response) {
				if (success) {
					var result = Ext.JSON.decode(server_response.responseText);
					if(result.error != null) {
						self.displayError(result.error.code, result.error.message);
						self.getSportActivitySubscribeButton().setHidden(true);
						self.getSportActivityUnsubscribeButton().setHidden(true);
					} else if (result.response == true) {
						self.getSportActivitySubscribeButton().setHidden(true);
						self.getSportActivityUnsubscribeButton().setHidden(false);
					} else {
						self.getSportActivitySubscribeButton().setHidden(false);
						self.getSportActivityUnsubscribeButton().setHidden(true);
					}
				} else{
					self.displayError(7);
				}
			}
		  });
	},

	subscribe: function(btn, e, opts) {
		USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.processing'));
		var activity_record = btn.getParent().getParent().getRecord();
		var data = this.getUserData();
		if(data == false) { return; }
		data.activity = activity_record.get('id');
		var self = this;
		Ext.Ajax.request({
			url: USIMobile.Config.getSportSubscribeUrl(),
			method: 'GET',
			format:'json',
			useDefaultXhrHeader: false,
			
			params: data,
				
			callback: function(options, success, server_response) {
				if (success) {
					USIMobile.app.hideLoadMask();
					var result = Ext.JSON.decode(server_response.responseText);
					if(result.error != null) {
						self.displayError(result.error.code, result.error.message);
					} else if (result.response == true) {
						self.getSportActivitySubscribeButton().setHidden(true);
						self.getSportActivityUnsubscribeButton().setHidden(false);
					} else {
						self.displayError(777);
					}
				} else{
					self.displayError(7);
				}
			}
		  });
	},

	unsubscribe: function(btn, e, opts) {
		USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.processing'));
		var activity_record = btn.getParent().getParent().getRecord();
		var data = this.getUserData();
		if(data == false) { return; }
		data.activity = activity_record.get('id');
		var self = this;
		Ext.Ajax.request({
			url: USIMobile.Config.getSportUnsubscribeUrl(),
			method: 'GET',
			format:'json',
			useDefaultXhrHeader: false,
			
			params: data,
				
			callback: function(options, success, server_response) {
				USIMobile.app.hideLoadMask();
				if (success) {
					var result = Ext.JSON.decode(server_response.responseText);
					if(result.error != null) {
						self.displayError(result.error.code, result.error.message);
					} else if (result.response == true) {
						self.getSportActivitySubscribeButton().setHidden(false);
						self.getSportActivityUnsubscribeButton().setHidden(true);
					} else {
						self.displayError(888);
					}
				} else{
					self.displayError(7);
				}
			}
		  });
	},

	getUserData: function() {
		if(
			USIMobile.Session.getSettingsStore().first().get('username') == "" || 
			USIMobile.Session.getSettingsStore().first().get('password') == "" 
		) {
			this.displayError(0);
			return false;
		} else {
			return {
				"username": USIMobile.Session.getSettingsStore().first().get('username'),
				"password": USIMobile.Session.getSettingsStore().first().get('password')
			};
		}
	},

	displayError: function(code, message) {
		switch(code) {
			case 0:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.userDataMissing'));
			break;
			case 1:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.checkAccountData'));
			break;
			case 2:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.accessUsiSportFirst'));
			break;
			case 3:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.sportActivityNonExistent'));
			break;
			case 4:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.alreadySubscribedToSportActivity'));
			break;
			case 7:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.serverConnectionFailed'));
			break;
			case 10:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.unsubscribeFromTheUSISportSite'));
			break;
			default:
				Ext.Msg.alert(
					Ux.locale.Manager.get('title.errorCode') + code,
					Ux.locale.Manager.get('message.unknownError') + message
				);
			break;
		}
	}
});
