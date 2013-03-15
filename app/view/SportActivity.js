Ext.define("USIMobile.view.SportActivity", {
	extend: 'Ext.Panel',
	xtype: 'sportactivity',

	requires: [
		'Ext.TitleBar',
	],

	config: {
		id: 'sportactivity',
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		listeners: {
			painted: function(){
				// display the parent post
				var data = this.getRecord().getData();
				var localized_data = {};
				// prepare the html
				if(Ux.locale.Manager.getLanguage() == "en") {
					localized_data.description = data.description_en;
					localized_data.discipline = data.discipline_en;
					localized_data.lodging = data.lodging_en;
					localized_data.meal = data.meal_en;
					localized_data.requirements = data.requirements_en;
					localized_data.equipment = data.equipment_en;
					localized_data.transport = data.transport_en;
				} else {
					localized_data.description = data.description_it;
					localized_data.discipline = data.discipline_it;
					localized_data.lodging = data.lodging_it;
					localized_data.meal = data.meal_it;
					localized_data.requirements = data.requirements_it;
					localized_data.equipment = data.equipment_it;
					localized_data.transport = data.transport_it;
				}
				var content = "";
				content += '<div class="sport_activity_name">' + data.name_en + '</div>';;
				content += '<div class="sport_activity_description">' + data.description_en + '</div>';
				content += '<div class="sport_activity_discipline">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.discipline') + '</span>: ' + localized_data.discipline;
				content += '</div>';
				content += '<div class="sport_activity_start_date">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.begin') + '</span>: ' + data.start_date;
				content += '</div>';
				content += '<div class="sport_activity_end_date">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.end') + '</span>: ' + data.end_date;
				content += '</div>';
				content += '<div class="sport_activity_location">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.location') + '</span>: ' + data.location;
				content += '</div>';
				content += '<div class="sport_activity_lodging">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.lodging') + '</span>: ' + localized_data.lodging;
				content += '</div>';
				content += '<div class="sport_activity_comeback">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.comeback') + '</span>: ' + data.comeback;
				content += '</div>';
				content += '<div class="sport_activity_contact">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.contact') + '</span>: ' + data.contact_name;
				content += '</div>';
				content += '<div class="sport_activity_meal">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.meal') + ': ' + localized_data.meal;
				content += '</div>';
				content += '<div class="sport_activity_requirements">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.requirements') + ': ' + localized_data.requirements;
				content += '</div>';
				content += '<div class="sport_activity_equipment">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.equipment') + ': ' + localized_data.equipment;
				content += '</div>';
				content += '<div class="sport_activity_transport">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.transport') + ': ' + localized_data.transport;
				content += '</div>';
				content += '<div class="sport_activity_subscription_start_date">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.subscriptionStartDate') + ': ' + data.subscription_start_date;
				content += '</div>';
				content += '<div class="sport_activity_subscription_end_date">';
				content += '<span class="label">' + Ux.locale.Manager.get('label.subscriptionEndDate') + ': ' + data.subscription_end_date;
				content += '</div>';
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
						locales:{
							text: 'button.mailto',
						},
						action: 'mailto',
					},
					{
						xtype: 'button',
						locales: {
							text: 'button.subscribe',
						},
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
