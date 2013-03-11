Ext.define('USIMobile.controller.News', {
	extend: 'Ext.app.Controller',

	requires: [
			'USIMobile.view.ShortNews',
	],

	config: {
		refs: {
			home: '#home',
			shortNews: '#shortnews',
			detailedNews: '#detailednews',
			newsButton: 'button#news_home_button',
		},

		control: {
			newsButton: { tap: 'showShortNews' },
			shortNews: { itemtap: 'showDetailedNews' },
		}
	},
	
	//called when the Application is launched, remove if not needed
	init: function(){
	},

	showShortNews: function(btn, e, eOpts){
		// display news
		if(typeof this.getShortNews() == 'object') {
			this.getHome().push(this.getShortNews());
		} else {
			this.getHome().push({
				xtype: 'shortnews',	
				store: USIMobile.Session.getShortNewsStore()
			});
		}
	},

	showDetailedNews: function(view, index, target, shortnews_record) {
		var detailednews_record = USIMobile.Session.getDetailedNewsStore().getById(shortnews_record.get('id'));
		// display details
		if(typeof this.getDetailedNews() == 'object') {
			this.getDetailedNews().setRecord(detailednews_record);
			this.getHome().push(this.getDetailedNews());
		} else {
			this.getHome().push({
				xtype: 'detailednews',	
				record: detailednews_record
			});
		}
	}
});
