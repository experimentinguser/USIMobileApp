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
			home: 'home',
			news: 'news',
			shortNews: 'shortnews',
			shortEventNews: 'shorteventnews',
			shortCommunityNews: 'shortcommunitynews',
			detailedNews: 'detailednews',
			newsButton: 'button#news_home_button',
		},

		control: {
			newsButton: { tap: 'showNews' },
			shortNews: { itemtap: 'showDetailedNews' },
			shortEventNews: { itemtap: 'showDetailedNews' },
			shortCommunityNews: { itemtap: 'showDetailedNews' },
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
		USIMobile.app.showLoadMask(Ux.locale.Manager.get('message.loading'));
		USIMobile.WebService.getDetailedNews(record.get('id')).on('load', function(store){
			USIMobile.app.hideLoadMask();
			var details = store.first();
			var _title = '';
			switch(view.getId()) {
				case 'shortnews':
					_title = Ux.locale.Manager.get('title.news');
					break;
				case 'shorteventnews':
					_title = Ux.locale.Manager.get('title.events');
					break;
				case 'shortcommunitynews':
					_title = Ux.locale.Manager.get('title.community');
					break;
			}
			this.getHome().push({
				xtype: 'detailednews',	
				title: _title,
				emptyText: Ux.locale.Manager.get('message.noNews'),
				record: details
			});
		}, this);
	},

});
