Ext.define('USIMobile.model.SportActivity', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: 'uuid',
		fields: [ 
			{name: 'name_it', type: 'string'},
			{name: 'name_en', type: 'string'},
			{name: 'description_it', type: 'string'},
			{name: 'description_en', type: 'string'},
			{name: 'category_it', type: 'string'},
			{name: 'category_en', type: 'string'},
			{name: 'discipline_it', type: 'string'},
			{name: 'discipline_en', type: 'string'},
			{name: 'start_date', type: 'string'},
			{name: 'end_date', type: 'string'},
			{name: 'subscription_start_date', type: 'string'},
			{name: 'subscription_end_date', type: 'string'},
			{name: 'location', type: 'string'},
			{name: 'lodging_it', type: 'string'},
			{name: 'lodging_en', type: 'string'},
			{name: 'comeback', type: 'string'},
			{name: 'contact_name', type: 'string'},
			{name: 'contact_mail', type: 'string'},
			{name: 'transport_it', type: 'string'},
			{name: 'transport_en', type: 'string'},
			{name: 'requirements_it', type: 'string'},
			{name: 'requirements_en', type: 'string'},
			{name: 'equipment_it', type: 'string'},
			{name: 'equipment_en', type: 'string'},
			{name: 'meal_it', type: 'string'},
			{name: 'meal_en', type: 'string'},
		]
	}

});
