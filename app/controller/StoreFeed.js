Ext.define('USIMobile.controller.StoreFeed', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        },
        control: {
        }
    },
    
    init: function() {
		// get update checks
		var updates = USIMobile.WebService.getUpdates();
		updates.on('load', function(server_updates_store){ this.checkUpdates(server_updates_store); }, this, {single: true});
	},

	syncUpdatesStore: function(server_updates_store) {
		if(server_updates_store.getCount() > 0) {
			USIMobile.Session.getUpdatesStore().removeAll();
			USIMobile.Session.getUpdatesStore().getProxy().clear();
			server_updates_store.first().setDirty();
			USIMobile.Session.getUpdatesStore().add(server_updates_store.first());
			USIMobile.Session.getUpdatesStore().sync();
		}
	},

	checkUpdates: function(server_updates_store) {
		// if updates store is empty then initialize the local store
		if(USIMobile.Session.getUpdatesStore().getCount() == 0) {
			this.syncUpdatesStore(server_updates_store);
		}
		this.updateLocalStores(server_updates_store);
	},

	updateLocalStores: function(server_updates_store) {
		// courses store
		if(
			USIMobile.Session.getCoursesStore().getCount() == 0 ||
			server_updates_store.first().get('courses') != USIMobile.Session.getUpdatesStore().first().get('courses')
		) {
			this.updateCoursesStore();
		}


		// teaching timetables store
		if( 
			USIMobile.Session.getTeachingTimetablesStore().getCount() == 0 || 
			server_updates_store.first().get('teachingtimetables') != USIMobile.Session.getUpdatesStore().first().get('teachingtimetables')
		) {
			this.updateTeachingTimetablesStore();
		}

		// usinews store
		if(
			USIMobile.Session.getShortNewsStore().getCount() == 0 ||
			server_updates_store.first().get('usinews') != USIMobile.Session.getUpdatesStore().first().get('usinews')
		) {
			this.updateShortNewsStore();
		}

		// menumensa store
		if(
			USIMobile.Session.getMenuMensaStore().getCount() == 0 ||
			server_updates_store.first().get('menumensa') != USIMobile.Session.getUpdatesStore().first().get('menumensa')
		) {
			this.updateMenuMensaStore();
		}

		this.syncUpdatesStore(server_updates_store);
	},

	updateCoursesStore: function() {
		USIMobile.WebService.getCourses().on('load',
			function(store, records, success) {
				// check if there are any exceptions 
				// check for errors here
				if(this.getProxy().getReader().rawData.error == null){
					// remove old entries
					USIMobile.Session.getCoursesStore().removeAll();
					USIMobile.Session.getCoursesStore().getProxy().clear();
					store.each(function(course_entry) {
						// insert the new entry
						//course_entry.setDirty();
						USIMobile.Session.getCoursesStore().add(course_entry);
					});
					// store data
					USIMobile.Session.getCoursesStore().sync();
				} else {
					Ext.Msg.alert(
						this.getProxy().getReader().rawData.title,
						this.getProxy().getReader().rawData.message + '; Code: ' + this.getProxy().getReader().rawData.code
					);
				}
			},
			'',
			{single: true}
		);
	},

	updateShortNewsStore: function() {
		USIMobile.WebService.getShortNews().on('load',
			function(store, records, success) {
				// check if there are any exceptions 
				// check for errors here
				if(store.getProxy().getReader().rawData.error == null){
					// remove old entries
					USIMobile.Session.getShortNewsStore().removeAll();
					USIMobile.Session.getShortNewsStore().getProxy().clear();

					store.each(function(news_entry) {
						// format date
						string_date = news_entry.get('publish_start_date');
						timestamp = Ext.Date.parse(string_date, "Y-m-d")
						formated_date = Ext.Date.format(timestamp, "l d F Y"); 
						news_entry.set('publish_start_date', formated_date);
						news_entry.setDirty();
						USIMobile.Session.getShortNewsStore().add(news_entry);
					});

					// update the detailed news store
					USIMobile.Session.getShortNewsStore().on('write', this.updateDetailedNewsStore, this, {single: true});
					// store data
					USIMobile.Session.getShortNewsStore().sync();
				} else {
					Ext.Msg.alert(
						store.getProxy().getReader().rawData.title,
						store.getProxy().getReader().rawData.message + '; Code: ' + store.getProxy().getReader().rawData.code
					);
				}
			},
			this,
			{single: true}
		);
	},
	
	updateDetailedNewsStore: function(){
		USIMobile.Session.getShortNewsStore().each(function(entry){
			USIMobile.WebService.getDetailedNews(entry.get('id')).on('load', function(store){
				news_entry = store.first();
				// format date
				string_date = news_entry.get('publish_start_date');
				timestamp = Ext.Date.parse(string_date, "Y-m-d")
				formated_date = Ext.Date.format(timestamp, "l d F Y"); 
				news_entry.set('publish_start_date', formated_date);
				news_entry.setDirty();
				USIMobile.Session.getDetailedNewsStore().add(news_entry);
				USIMobile.Session.getDetailedNewsStore().sync();
			});
		}, this);
	},

	updateTeachingTimetablesStore: function() {
		USIMobile.WebService.getTeachingTimetables().on('load',
			function(store, records, success) {
				// check if there are any exceptions 
				// check for errors here
				if(this.getProxy().getReader().rawData.error == null){
					// remove old entries
					USIMobile.Session.getTeachingTimetablesStore().removeAll();
					USIMobile.Session.getTeachingTimetablesStore().getProxy().clear();
					// insert the entries
					this.each(function(entry){
						entry.setDirty();
						USIMobile.Session.getTeachingTimetablesStore().add(entry);
					});
					// store data
					USIMobile.Session.getTeachingTimetablesStore().sync();
				} else {
					Ext.Msg.alert(
						this.getProxy().getReader().rawData.title,
						this.getProxy().getReader().rawData.message + '; Code: ' + this.getProxy().getReader().rawData.code
					);
				}
			},
			'',
			{single: true}
		);
	},

	updateMenuMensaStore: function() {
		USIMobile.WebService.getMenuMensa().on('load',
			function(store, records, success) {
				// check if there are any exceptions 
				// check for errors here
				if(this.getProxy().getReader().rawData.error == null){
					// remove old entries
					USIMobile.Session.getMenuMensaStore().removeAll();
					USIMobile.Session.getMenuMensaStore().getProxy().clear();
					// insert the new entry
					USIMobile.Session.getMenuMensaStore().add(store.first());
					// store data
					USIMobile.Session.getMenuMensaStore().sync();
				} else {
					Ext.Msg.alert(
						this.getProxy().getReader().rawData.title,
						this.getProxy().getReader().rawData.message + '; Code: ' + this.getProxy().getReader().rawData.code
					);
				}
			},
			'',
			{single: true}
		);
	},
});
