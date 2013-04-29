//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'USIMobile': 'app',
	'Ux': 'plugins/Ux'
});
//</debug>

Ext.application({
    name: 'USIMobile',

    requires: [
		'Ext.data.identifier.Uuid',
		'Ext.data.proxy.LocalStorage',
        'Ext.MessageBox',
		'Ext.Img',

		'Ux.locale.Manager',
		'Ux.locale.override.st.Component',
		'Ux.locale.override.st.Button',
		'Ux.locale.override.st.Container',
		'Ux.locale.override.st.TitleBar',
		'Ux.locale.override.st.field.Field',
		'Ux.locale.override.st.field.Select',
		'Ux.locale.override.st.field.DatePicker',
		'Ux.locale.override.st.form.FieldSet',
		'Ux.locale.override.st.picker.Picker',
		'Ux.locale.override.st.picker.Date',

		'USIMobile.Config',
		'USIMobile.Session',
		'USIMobile.WebService',
    ],

	models: [ ],

	views: [ 'USIMobile.view.Main' ],

	controllers: [
		"Init",
		"UsageAgreement",
		"Settings",
		"Updater",
		"Home",
		"MessagePanel",
		"Course",
		"Calendar",
		"People",
		"News",
		"SportActivity",
		"Service",
		"Library",
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
		// Add USIMobile extensions.
		// These extensions depend on the platform.
		// The releated code is in the www/js directory
		addExtensions(); 

		// set the language
        Ux.locale.Manager.setConfig({
            ajaxConfig : {
                method : 'GET'
            },
            language   : navigator.language.split('-')[0],
            tpl        : 'locales/{locale}.json',
            type       : 'ajax',
			loadingInd : false,
        });
        Ux.locale.Manager.init();
		// set language
		Ux.locale.Manager.updateLocale(USIMobile.Session.getSettingsStore().first().get('language'));
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
    },

	showUsageAgreement: function() {
		Ext.fly('appLoadingIndicator').destroy();
		Ext.Viewport.add(Ext.create('USIMobile.view.UsageAgreement'));
	},

	showHome: function() {
		Ext.Viewport.insert(0, Ext.create('USIMobile.view.Main'));
		Ext.Viewport.setActiveItem(0);
	},

	formatDate: function(date, date_format) {
		if(date_format == null) {
			date_format = "Y-m-d";
		}
		Ext.Date.dayNames = Ux.locale.Manager.get('dayNames');
		Ext.Date.monthNames = Ux.locale.Manager.get('monthNames');
		return Ext.Date.format(Ext.Date.parse(date, date_format), "l d F Y");
	},

	isLoadMaskVisible: function() {
		return Ext.Viewport.getActiveItem().getMasked() == null || Ext.Viewport.getActiveItem().getMasked().isHidden();
	},

	showLoadMask: function(msg) {
		Ext.Viewport.getActiveItem().setMasked({
			xtype: 'loadmask',
			indicator: true,
			message: msg,
		});
	},

	updateLoadMaskMessage: function(msg) {
		Ext.Viewport.getActiveItem().getMasked().setMessage(msg);
	},

	hideLoadMask: function() {
		Ext.Viewport.getActiveItem().setMasked(false);
	},

	isConnected: function() {
		if(navigator.connection == undefined) {
			return navigator.onLine;
		} else {
			if(navigator.connection.type == Connection.UNKNOWN || navigator.connection.type == Connection.NONE) {
				return false;
			} else {
				return true;
			}
		}
	}
});
