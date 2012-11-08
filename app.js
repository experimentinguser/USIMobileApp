Ext.application({
    name: 'USIMobile',

    requires: [
        'Ext.MessageBox',
		'Ext.data.identifier.Uuid',
		'Ext.Img',
		'USIMobile.Config',
		'USIMobile.Session',
		'USIMobile.store.HomeOrgs',
    ],

	models: [
		"USIMobile.model.Settings",
		"USIMobile.model.AaiAccount",
	],

	views: [
		'USIMobile.view.UsageAgreement',
		'USIMobile.view.AaiAccount',
		'USIMobile.view.Main',
		'USIMobile.view.MenuMensa',
		'USIMobile.view.News',
		'USIMobile.view.Foo',
		'USIMobile.view.Dash',
	],

	controllers: [
		"USIMobile.controller.Init", 
		"USIMobile.controller.UsageAgreement", 
		"USIMobile.controller.AaiAccount", 
	],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		if(USIMobile.Session.getSettingsStore().first().getData().usageagreement == false) {
			Ext.Viewport.add( Ext.create('USIMobile.view.UsageAgreement') );
		} else if(USIMobile.Session.getSettingsStore().first().get('accountset') == false) {
			Ext.Viewport.add(Ext.create('USIMobile.view.AaiAccount'));
		} else {
			Ext.Viewport.add(Ext.create('USIMobile.view.Main'));
		}
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
