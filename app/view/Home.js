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
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="courses_icon icon"><div class="label">Courses</div></div>',
							},
							{
								xtype: 'button',
								id: 'calendar_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="calendar_icon icon"><div class="label">Calendar</div></div>',
							},
							{
								xtype: 'button',
								id: 'services_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="services_icon icon"><div class="label">Services</div></div>',
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
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="library_icon icon"><div class="label">Library</div></div>',
							},
							{
								xtype: 'button',
								id: 'people_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="people_icon icon"><div class="label">People</div></div>',
							},
							{
								xtype: 'button',
								id: 'news_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="news_icon icon"><div class="label">News</div></div>',
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
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="mensa_icon icon"><div class="label">Mensa</div></div>',
							},
							{
								xtype: 'button',
								id: 'sport_activity_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="sport_icon icon"><div class="label">Sport</div></div>',
							},
							{
								xtype: 'button',
								id: 'career_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="career_icon icon"><div class="label">Career</div></div>',
							},
	
						]
					},
				]
			},
		]
	}
});
