Ext.define("USIMobile.view.Person", {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'person',

	config: {
		cls: 'person',

		// map records to the DataItem
		dataMap: { },

		name: {
			cls: 'x-person-name',
			docked: 'top',
		},

		email: {
			cls: 'x-person-email',
			docked: 'top',
		},

		phone: {
			cls: 'x-person-phone',
			docked: 'top',
		},

		floor: {
			cls: 'x-person-email',
			docked: 'top',
			hidden: true,
		},

		callButton: {
			cls: 'x-person-call-button',
			text: 'Call',
			action: 'callperson',
			ui: 'confirm',
			flex: 1,
			hidden: true,
			listeners: {
				tap: function () {
				}
			},
		},

		mailButton: {
			cls: 'x-person-mail-button',
			text: 'Mail',
			action: 'mailperson',
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

		listener: {
			painted: function() {
				console.log('data painted');
			}
		}
	},

	applyName: function(config) {
		config.html = '<span class="label">' + Ux.locale.Manager.get('label.name') + ':</span> ' 
		config.html+= this.getRecord().get('lastname') + ' ' + this.getRecord().get('firstname');
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

	applyLastname: function(config) {
        return Ext.factory(config, Ext.Component, this.getLastname());
    },

    updateLastname: function(newLastname, oldLastname) {
        if (newLastname) {
            this.add(newLastname);
        }

        if (oldLastname) {
            this.remove(oldLastname);
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

	applyFloor: function(config) {
		config.html = '<span class="label">' + Ux.locale.Manager.get('label.floor') + ':</span> ' + this.getRecord().get('floor');
        return Ext.factory(config, Ext.Component, this.getFloor());
    },

    updateFloor: function(newFloor, oldFloor) {
        if (newFloor) {
            this.add(newFloor);
        }

        if (oldFloor) {
            this.remove(oldFloor);
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
});

