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
								id: 'shortnews_dash_button',
								baseCls: 'dash_button short_news_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">USI News</div></div>',
							},
							{
								xtype: 'button',
								id: 'listacorsi_dash_button',
								baseCls: 'dash_button lista_corsi_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Lista Corsi</div></div>',
							},
							{
								xtype: 'button',
								id: 'orario_dash_button',
								baseCls: 'dash_button orario_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Orario</div></div>',
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
								id: 'cercapersone_dash_button',
								baseCls: 'dash_button cerca_persone_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Cerca Persone</div></div>',
							},
							{
								xtype: 'button',
								id: 'menumensa_dash_button',
								baseCls: 'dash_button menu_mensa_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Menu Mensa</div></div>',
							},
							{
								xtype: 'button',
								id: 'usisport_dash_button',
								baseCls: 'dash_button usi_sport_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">USI Sport</div></div>',
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
								id: 'offertelavoro_dash_button',
								baseCls: 'dash_button offerte_lavoro_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Offerte Lavoro</div></div>',
							},
							{
								xtype: 'button',
								id: 'empty_a',
								baseCls: 'dash_button item_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Empty Slot</div></div>',
							},
							{
								xtype: 'button',
								id: 'empty_b',
								baseCls: 'dash_button item_dash_button',
								width: '33.3%',
								html: '<div class="label_container"><div class="label">Empty Slot</div></div>',
							},
						]
					},
				]
			},
		]
	}
});
