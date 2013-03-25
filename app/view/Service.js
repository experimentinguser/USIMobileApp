Ext.define("USIMobile.view.Service", {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'service',

	config: {
		cls: 'service',

		// map records to the DataItem
		dataMap: { },

		name: {
			cls: 'x-service-name',
			docked: 'top',
		},

		description: {
			cls: 'x-service-description',
			docked: 'top',
		},

		building: {
			cls: 'x-service-building',
			docked: 'top',
			hidden: true,
		},

		office: {
			cls: 'x-service-office',
			docked: 'top',
			hidden: true,
		},

		email: {
			cls: 'x-service-email',
			docked: 'top',
		},

		phone: {
			cls: 'x-service-phone',
			docked: 'top',
		},

		callButton: {
			cls: 'x-service-call-button',
			text: 'Call',
			action: 'callservice',
			ui: 'confirm',
			flex: 1,
			hidden: true,
			listeners: {
				tap: function () {
				}
			},
		},

		mailButton: {
			cls: 'x-service-mail-button',
			text: 'Mail',
			action: 'mailservice',
			ui: 'confirm',
			flex: 1,
			hidden: true,
			listeners: {
				tap: function () {
				}
			},
		},

		homePageButton: {
			cls: 'x-service-homepage-button',
			text: 'Home Page',
			action: 'openserviceurl',
			ui: 'confirm',
			flex: 1,
			hidden: true,
			listeners: {
				tap: function () {
				}
			},
		},

		layout: {
            type: 'hbox',
            align: 'center'
        },

		listener: { }
	},

	applyName: function(config) {
		var name = Ux.locale.Manager.getLanguage() == "en" ? this.getRecord().get('name_en') : this.getRecord().get('name_it');
		config.html = '<span class="service_name">' + name + '</span> ';
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

	applyDescription: function(config) {
		var description = Ux.locale.Manager.getLanguage() == "en" ? this.getRecord().get('description_en') : this.getRecord().get('description_it');
		config.html = '<span class="service_description">' + description + '</span> ';
        return Ext.factory(config, Ext.Component, this.getDescription());
    },

    updateDescription: function(newDescription, oldDescription) {
        if (newDescription) {
            this.add(newDescription);
        }

        if (oldDescription) {
            this.remove(oldDescription);
        }
    },

	applyBuilding: function(config) {
		var building = Ux.locale.Manager.getLanguage() == "en" ? this.getRecord().get('building_en') : this.getRecord().get('building_it');
		config.html = '<span class="label">' + Ux.locale.Manager.get('label.building') + ':</span> ' + building;
        return Ext.factory(config, Ext.Component, this.getBuilding());
    },

    updateBuilding: function(newBuilding, oldBuilding) {
        if (newBuilding) {
            this.add(newBuilding);
        }

        if (oldBuilding) {
            this.remove(oldBuilding);
        }
    },

	applyOffice: function(config) {
		var office = Ux.locale.Manager.getLanguage() == "en" ? this.getRecord().get('office_en') : this.getRecord().get('office_it');
		config.html = '<span class="label">' + Ux.locale.Manager.get('label.office') + ':</span> ' + office;
        return Ext.factory(config, Ext.Component, this.getOffice());
    },

    updateOffice: function(newOffice, oldOffice) {
        if (newOffice) {
            this.add(newOffice);
        }

        if (oldOffice) {
            this.remove(oldOffice);
        }
    },

	applyEmail: function(config) {
		config.html = '<span class="label">' + Ux.locale.Manager.get('label.email') + ':</span> ' + this.getRecord().get('email');
		return Ext.factory(config, Ext.Component, this.getEmail());
    },

    updateEmail: function(newEmail, oldEmail) {
        if (newEmail) {
            this.add(newEmail);
        }

        if (oldEmail) {
            this.remove(oldEmail);
        }
    },

	applyPhone: function(config) {
		config.html = '<span class="label">' + Ux.locale.Manager.get('label.phone') + ':</span> ' + this.getRecord().get('phone');
        return Ext.factory(config, Ext.Component, this.getPhone());
    },

    updatePhone: function(newPhone, oldPhone) {
        if (newPhone) {
            this.add(newPhone);
        }

        if (oldPhone) {
            this.remove(oldPhone);
        }
    },

	applyCallButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getCallButton());
    },

    updateCallButton: function(newCallButton, oldCallButton) {
        if (newCallButton) {
            this.add(newCallButton);
        }

        if (oldCallButton) {
            this.remove(oldCallButton);
        }
    },

	applyMailButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getMailButton());
    },

    updateMailButton: function(newMailButton, oldMailButton) {
        if (newMailButton) {
            this.add(newMailButton);
        }

        if (oldMailButton) {
            this.remove(oldMailButton);
        }
    },

	applyHomePageButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getHomePageButton());
    },

    updateHomePageButton: function(newHomePageButton, oldHomePageButton) {
        if (newHomePageButton) {
            this.add(newHomePageButton);
        }

        if (oldHomePageButton) {
            this.remove(oldHomePageButton);
        }
    },
});

