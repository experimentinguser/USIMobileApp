Ext.define('USIMobile.controller.News', {
	extend: 'Ext.app.Controller',



	config: {
		views: [
			'News',
			'ShortNews',
			'DetailedNews',
			'ShortEventNews',
			'ShortCommunityNews',
		],

		refs: {
			home: '#home',
			news: '#news',
			shortNews: '#shortnews',
			shortEventNews: '#shorteventnews',
			shortCommunityNews: '#shortcommunitynews',
			detailedNews: '#detailednews',
			newsButton: 'button#news_home_button',
		},

		control: {
			newsButton: { tap: 'showNews' },
			shortNews: { itemtap: 'showDetailedNews' },
			shortEventNews: { itemtap: 'showDetailedEventNews' },
			shortCommunityNews: { itemtap: 'showDetailedCommunityNews' },
		}
	},
	
	//called when the Application is launched, remove if not needed
	init: function(){
		Ext.n = this;
	},

	showNews: function(btn, e, eOpts){
		// display news
		if(typeof this.getNews() == 'object') {
			this.getHome().push(this.getNews());
		} else {
			this.getHome().push({
				xtype: 'news',	
			});
			this.getShortNews().setStore(USIMobile.Session.getShortNewsStore());
			this.getShortEventNews().setStore(USIMobile.Session.getShortEventNewsStore());
			this.getShortCommunityNews().setStore(USIMobile.Session.getShortCommunityNewsStore());
		}
	},

	showDetailedNews: function(view, index, target, record) {
		console.log('showing detailed news');
		var details = USIMobile.Session.getDetailedNewsStore().getById(record.get('id'));
		// display details
		if(typeof this.getDetailedNews() == 'object') {
			this.getDetailedNews().setRecord(details);
			this.getHome().push(this.getDetailedNews());
		} else {
			this.getHome().push({
				xtype: 'detailednews',	
				title: Ux.locale.Manager.get('title.news'),
				emptyText: Ux.locale.Manager.get('message.noNews'),
				record: details
			});
		}
	},

	showDetailedEventNews: function(view, index, target, record) {
		var details = USIMobile.Session.getDetailedEventNewsStore().getById(record.get('id'));
		// display details
		if(typeof this.getDetailedNews() == 'object') {
			this.getDetailedNews().setRecord(details);
			this.getHome().push(this.getDetailedNews());
		} else {
			this.getHome().push({
				xtype: 'detailednews',	
				title: Ux.locale.Manager.get('title.events'),
				emptyText: Ux.locale.Manager.get('message.noNews'),
				record: details
			});
		}
	},

	showDetailedCommunityNews: function(view, index, target, record) {
		var details = USIMobile.Session.getDetailedCommunityNewsStore().getById(record.get('id'));
		// display details
		if(typeof this.getDetailedNews() == 'object') {
			this.getDetailedNews().setRecord(details);
			this.getHome().push(this.getDetailedNews());
		} else {
			this.getHome().push({
				xtype: 'detailednews',	
				title: Ux.locale.Manager.get('title.community'),
				emptyText: Ux.locale.Manager.get('message.noNews'),
				record: details
			});
		}
	}
});
