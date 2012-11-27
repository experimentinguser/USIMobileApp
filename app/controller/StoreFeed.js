Ext.define('USIMobile.controller.StoreFeed', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        },
        control: {
        }
    },
    
    init: function() {
		USIMobile.Session.getShortNewsStore().on('write', this.updateDetailedNewsStore(), this, {single: true});
		this.updateShortNews();
	},

	updateShortNews: function(){
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
