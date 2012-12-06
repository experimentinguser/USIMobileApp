Ext.define('USIMobile.controller.News', {
	extend: 'Ext.app.Controller',

	requires: [
			'USIMobile.view.ShortNews',
	],

	config: {
		refs: {
			dash: '#dash',
			shortNews: '#shortnews',
			detailedNews: '#detailednews',
			newsButton: 'button#news_dash_button',
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
			this.getDash().push(this.getShortNews());
		} else {
			this.getDash().push({
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
			this.getDash().push(this.getDetailedNews());
		} else {
			this.getDash().push({
				xtype: 'detailednews',	
				record: detailednews_record
			});
		}
	}
});
