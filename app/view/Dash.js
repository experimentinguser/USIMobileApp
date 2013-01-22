Ext.define("USIMobile.view.Dash", {
	extend: 'Ext.navigation.View',
	xtype: 'dash',

	views:[
	],

	config: {
		id: 'dash',
		autoDestroy: false,
		items: [	
			{
				xtype: 'container',
				title: 'USI',
				layout: 'vbox',
				items:[
					{
						xtype: 'container',
						id: 'firstrow',
						layout: 'hbox',
						flex: 1, 
						items: [
							{
								xtype: 'button',
								id: 'courses_dash_button',
								baseCls: 'dash_button courses_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Courses</div></div>',
							},
							{
								xtype: 'button',
								id: 'calendar_dash_button',
								baseCls: 'dash_button calendar_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Calendar</div></div>',
							},
							{
								xtype: 'button',
								id: 'services_dash_button',
								baseCls: 'dash_button services_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Services</div></div>',
							},
						]
					},
					{
						xtype: 'container',
						id: 'secondrow',
						layout: 'hbox',
						flex: 1, 
						items: [
							{
								xtype: 'button',
								id: 'library_dash_button',
								baseCls: 'dash_button library_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Library</div></div>',
							},
							{
								xtype: 'button',
								id: 'people_dash_button',
								baseCls: 'dash_button people_dash_button address_book',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">People</div></div>',
							},
							{
								xtype: 'button',
								id: 'news_dash_button',
								baseCls: 'dash_button news_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">News</div></div>',
							},
							
						]
					},
					{
						xtype: 'container',
						id: 'thirdrow',
						layout: 'hbox',
						flex: 1, 
						items: [
							{
								xtype: 'button',
								id: 'mensa_dash_button',
								baseCls: 'dash_button mensa_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Mensa</div></div>',
							},
							{
								xtype: 'button',
								id: 'sport_activity_dash_button',
								baseCls: 'dash_button sport_activity_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Sport Act.</div></div>',
							},
							{
								xtype: 'button',
								id: 'jobs_dash_button',
								baseCls: 'dash_button jobs_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Job Opp.</div></div>',
							},
	
						]
					},
				]
			},
		]
	}
});
