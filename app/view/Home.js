Ext.define("USIMobile.view.Home", {
	extend: 'Ext.navigation.View',
	xtype: 'home',

	views:[
	],

	config: {
		id: 'home',
		useTitleForBackButtonText: true,
		autoDestroy: false,
		enableLocale: true,
		locales: {},
		items: [	
			{
				xtype: 'container',
				id: 'grid',
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
								html: '<div class="courses_icon icon"><div class="label"></div></div>',
							},
							{
								xtype: 'button',
								id: 'calendar_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="calendar_icon icon"><div class="label"></div></div>',
							},
							{
								xtype: 'button',
								id: 'services_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="services_icon icon"><div class="label"></div></div>',
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
								html: '<div class="library_icon icon disabled"><div class="label"></div></div>',
							},
							{
								xtype: 'button',
								id: 'people_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="people_icon icon"><div class="label"></div></div>',
							},
							{
								xtype: 'button',
								id: 'news_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="news_icon icon"><div class="label"></div></div>',
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
								html: '<div class="mensa_icon icon"><div class="label"></div></div>',
							},
							{
								xtype: 'button',
								id: 'sport_activity_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="sport_icon icon"><div class="label"></div></div>',
							},
							{
								xtype: 'button',
								id: 'career_home_button',
								baseCls: 'home_button',
								width: '33.3%',
								html: '<div class="career_icon icon disabled"><div class="label"></div></div>',
							},
	
						]
					},
				]
			},
		]
	},

	setLocale : function(locale) {
		var setButtonLabel = function(button, label) {
			button.setHtml(button.getHtml().replace(/<div class="label">.*<\/div>/g, '<div class="label">' + label + '</div>'));
		};

		if(this.locale.get('title.courses') != undefined) {
			// first row
			setButtonLabel(this.child('#grid').child('#firstrow').child('#courses_home_button'), Ux.locale.Manager.get('title.courses'));
			setButtonLabel(this.child('#grid').child('#firstrow').child('#calendar_home_button'), Ux.locale.Manager.get('title.calendar'));
			setButtonLabel(this.child('#grid').child('#firstrow').child('#services_home_button'), Ux.locale.Manager.get('title.services'));

			//second row
			setButtonLabel(this.child('#grid').child('#secondrow').child('#library_home_button'), Ux.locale.Manager.get('title.library'));
			setButtonLabel(this.child('#grid').child('#secondrow').child('#people_home_button'), Ux.locale.Manager.get('title.people'));
			setButtonLabel(this.child('#grid').child('#secondrow').child('#news_home_button'), Ux.locale.Manager.get('title.news'));

			//third row
			setButtonLabel(this.child('#grid').child('#thirdrow').child('#mensa_home_button'), Ux.locale.Manager.get('title.mensa'));
			setButtonLabel(this.child('#grid').child('#thirdrow').child('#sport_activity_home_button'), Ux.locale.Manager.get('title.sport'));
			setButtonLabel(this.child('#grid').child('#thirdrow').child('#career_home_button'), Ux.locale.Manager.get('title.career'));
		}
    }
});
