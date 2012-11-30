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
		updates.on('load', function(store){ this.updateLocalStores(store); }, this, {single: true});
	},

	updateLocalStores: function(timestamps_store) {
		// menumensa store check
		// fill in data if menumensa is empty
		if(USIMobile.Session.getMenuMensaStore().getCount() == 0) {
			var menumensa = USIMobile.WebService.getMenuMensa();
			menumensa.on('load', function(store) {
				USIMobile.Session.getMenuMensaStore().add(store.first());
				USIMobile.Session.getMenuMensaStore().sync();
			}, this, {single: true});
		} else if(timestamps_store.first().get('menumensa') != USIMobile.Session.getMenuMensaStore().first().get('timemodify')) { // update if timemodify differs
			this.updateMenuMensaStore();
		}
		// proceed with the USI News
		USIMobile.Session.getShortNewsStore().on('write', this.updateDetailedNewsStore(), this, {single: true});
		this.updateShortNewsStore();
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

	updateShortNewsStore: function() {
		USIMobile.WebService.getShortNews().on('load',
			function(store, records, success) {
				// check if there are any exceptions 
				// check for errors here
				if(this.getProxy().getReader().rawData.error == null){
					// remove old entries
					USIMobile.Session.getShortNewsStore().removeAll();
					USIMobile.Session.getShortNewsStore().getProxy().clear();

					this.each(function(news_entry) {
						// format date
						string_date = news_entry.get('publish_start_date');
						timestamp = Ext.Date.parse(string_date, "Y-m-d")
						formated_date = Ext.Date.format(timestamp, "l d F Y"); 
						news_entry.set('publish_start_date', formated_date);
						news_entry.setDirty();
						USIMobile.Session.getShortNewsStore().add(news_entry);
					});
					// store data
					USIMobile.Session.getShortNewsStore().sync();
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
			});
			USIMobile.Session.getDetailedNewsStore().sync();
		}, this);
	}
});
