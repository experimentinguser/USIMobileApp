Ext.define("USIMobile.view.Home", {
	extend: 'Ext.navigation.View',
	xtype: 'home',

	views:[
	],

	config: {
		id: 'home',
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
								id: 'courses_home_button',
								baseCls: 'home_button courses_home_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Courses</div></div>',
							},
							{
								xtype: 'button',
								id: 'calendar_home_button',
								baseCls: 'home_button calendar_home_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Calendar</div></div>',
							},
							{
								xtype: 'button',
								id: 'services_home_button',
								baseCls: 'home_button services_home_button',
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
								id: 'library_home_button',
								baseCls: 'home_button library_home_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Library</div></div>',
							},
							{
								xtype: 'button',
								id: 'people_home_button',
								baseCls: 'home_button people_home_button address_book',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">People</div></div>',
							},
							{
								xtype: 'button',
								id: 'news_home_button',
								baseCls: 'home_button news_home_button',
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
								id: 'mensa_home_button',
								baseCls: 'home_button mensa_home_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Mensa</div></div>',
							},
							{
								xtype: 'button',
								id: 'sport_activity_home_button',
								baseCls: 'home_button sport_activity_home_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Sport Act.</div></div>',
							},
							{
								xtype: 'button',
								id: 'jobs_home_button',
								baseCls: 'home_button jobs_home_button',
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
