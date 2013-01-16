Ext.define("USIMobile.view.SportActivity", {
	extend: 'Ext.Panel',
	xtype: 'sportactivity',

	requires: [
		'Ext.TitleBar',
	],

	config: {
		id: 'sportactivity',
		title: 'Sport Activity',
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		listeners: {
			painted: function(){
				// display the parent post
				var data = this.getRecord().getData();
				// prepare the html
				var content = "";
				content += '<div class="sport_activity_name">'+data.name_en+'</div>';;
				content += '<div class="sport_activity_description">'+data.description_en+'</div>';
				content += '<div class="sport_activity_discipline">Discipline: '+data.discipline_en+'</div>';
				content += '<div class="sport_activity_start_date">Start: '+data.start_date+'</div>';
				content += '<div class="sport_activity_end_date">End: '+data.end_date+'</div>';
				content += '<div class="sport_activity_location">Location: '+data.location+'</div>';
				content += '<div class="sport_activity_lodging">Lodging: '+data.lodging_en+'</div>';
				content += '<div class="sport_activity_comeback">Return: '+data.comeback+'</div>';
				content += '<div class="sport_activity_contact">Contact: '+data.contact_name+'</div>';
				content += '<div class="sport_activity_meal">Meal: '+data.meal_en+'</div>';
				content += '<div class="sport_activity_requirements">Requirements: '+data.requirements_en+'</div>';
				content += '<div class="sport_activity_equipment">Equipment: '+data.equipment_en+'</div>';
				content += '<div class="sport_activity_transport">Transport: '+data.requirements_en+'</div>';
				content += '<div class="sport_activity_subscription_start_date">Subscr. Start: '+data.subscription_start_date+'</div>';
				content += '<div class="sport_activity_subscription_end_date">Subscr. End: '+data.subscription_end_date+'</div>';
				// inject html
				this.setHtml(content);
			}	
		},

		items: [
			{
				xtype: 'toolbar',
				docked: 'bottom',
				items: [
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',	
						text: 'Send Mail',
						action: 'mailto',
					},
					{
						xtype: 'button',	
						text: 'Subscribe',
						action: 'subscribe',
					},
					{
						xtype: 'spacer'
					},
				]
			},
		] 
	},
});
