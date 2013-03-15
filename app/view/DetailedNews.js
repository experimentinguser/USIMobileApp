Ext.define("USIMobile.view.DetailedNews", {
	extend: 'Ext.Panel',
	xtype: 'detailednews',

	config: {
		id: 'detailednews',
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		listeners: {
			painted: function() {
				// display the parent post
				var data = this.getRecord().getData();

				// prepare the title panel html
				var html_content = '<div class="detailed_news_title x-docked-top">'+data.title+'</div>';
					html_content+= '<div class="detailed_news_body x-docked-top">'+data.body+'</div>';
					html_content+= '<div class="detailed_detailed_url x-docked-top">'+data.url+'</div>';
					html_content+= '<div class="detailed_news_publish_start_date x-docked-top">'+USIMobile.app.formatDate(data.publish_start_date)+'</div>';
				// inject html
				this.setHtml(html_content);
				this.fireEvent('heightchange');
			},

			click: {
				fn: function(ev, el) {
					ev.preventDefault();
					if(el.nodeName == 'A') {
						USIMobile.app.openURL(el.href);
					}
				}, 
				element: 'innerElement'
			}
		},
		
	},
});
