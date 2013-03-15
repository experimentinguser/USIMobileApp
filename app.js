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
        'Ext.MessageBox',
		'Ext.data.identifier.Uuid',
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
		'USIMobile.store.HomeOrgs',
    ],

	models: [
		'USIMobile.model.Settings',
		'USIMobile.model.Updates',
		'USIMobile.model.ShortNews',
		'USIMobile.model.DetailedNews',
	],

	views: [
		'USIMobile.view.UsageAgreement',
		'USIMobile.view.Settings',
		'USIMobile.view.Main',
		'USIMobile.view.SearchCourses',
		'USIMobile.view.Courses',
		'USIMobile.view.Course',
		'USIMobile.view.SearchPeople',
		'USIMobile.view.People',
		'USIMobile.view.ShortNews',
		'USIMobile.view.DetailedNews',
		'USIMobile.view.Calendar',
		'USIMobile.view.Faculties',
		'USIMobile.view.TeachingTimetables',
		'USIMobile.view.ExaminationTimetables',
		'USIMobile.view.SearchSportActivity',
		'USIMobile.view.SportActivities',
		'USIMobile.view.SportActivity',
		'USIMobile.view.Services',
		'USIMobile.view.Home',
	],

	controllers: [
		"USIMobile.controller.Init", 
		"USIMobile.controller.UsageAgreement", 
		"USIMobile.controller.Settings", 
		"USIMobile.controller.StoreFeed",
		"USIMobile.controller.Home", 
		"USIMobile.controller.Course",
		"USIMobile.controller.Calendar",
		"USIMobile.controller.People",
		"USIMobile.controller.News", 
		"USIMobile.controller.SportActivity",
		"USIMobile.controller.Service",
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
		// set the language
		var settings = USIMobile.Session.getSettingsStore().first().getData(); 
        Ux.locale.Manager.setConfig({
            ajaxConfig : {
                method : 'GET'
            },
            language   : navigator.language.split('-')[0],
            tpl        : 'locales/{locale}.json',
            type       : 'ajax'
        });

        Ux.locale.Manager.init();
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		if(USIMobile.Session.getSettingsStore().first().getData().usageagreement == false) {
			Ext.Viewport.add( Ext.create('USIMobile.view.UsageAgreement') );
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
    },
	
	openURL: function(urladdr){

		if(USIMobile.Config.getVerbose()) {
			console.log('===> Opening URL: '+urladdr);
		}
		window.plugins.webintent.startActivity(
			{
				action: WebIntent.ACTION_VIEW,
				url: urladdr,
  			}, 
			function () {}, 
			function () {
				Ext.Msg.alert('URL Error', 'Failed to open:'+path+' via Android Intent');
  			});
	},

	openFile: function(path, mime){
		var protocol = 'file:///';
		var store = 'sdcard'
		window.plugins.webintent.startActivity(
			{
				action: WebIntent.ACTION_VIEW,
				type: mime,
				url: protocol+store+path,
  			}, 
			function () {}, 
			function () {
				Ext.Msg.alert('File Error', 'Failed to open:'+path+' via Android Intent');
  			});
	},

	// file is an object such as:
	// {"name": "filename", "mime":"mime/type"}
	getFile: function(url, filename, mime) {
		var dir = USIMobile.Config.getFileCacheDir();
		this.showLoadMask('');
		// success function
		var successFunc = function(result) {
			// download mask code
			if(result.progress < 100){ // update the progress
				USIMobile.app.updateLoadMaskMessage(result.progress+' %');
			} else { // remove the mask
				USIMobile.app.hideLoadMask();
			}

			if(result.progress == 100 && result.status == 1) {
				var filePath = '/'+USIMobile.Config.getFileCacheDir()+'/'+filename;
				USIMobile.app.openFile(filePath, mime);
			}

			if(USIMobile.Config.getVerbose()) {
				console.log(JSON.stringify(result));
			}
		};

		// fail function
		var failFunc = function(){
			Ext.Msg.alert(
				'File download error',
				'Failed to download the file: ' + filename
			);
		};
		// get the file
		window.plugins.downloader.downloadFile(url, {'overwrite': true}, successFunc, failFunc, filename, dir);
	},

	formatDate: function(date, date_format) {
		if(date_format == null) {
			date_format = "Y-m-d";
		}
		Ext.Date.dayNames = Ux.locale.Manager.get('dayNames');
		Ext.Date.monthNames = Ux.locale.Manager.get('monthNames');
		return Ext.Date.format(Ext.Date.parse(date, date_format), "l d F Y");
	},

	sendEmail: function(to, subject, body) {
		var extras = {};
		extras[WebIntent.EXTRA_SUBJECT] = subject;
		extras[WebIntent.EXTRA_TEXT] = body;
		var successFunc = function() {};
		// fail function
		var failFunc = function(){
			Ext.Msg.alert(
				'Sending e-mail error',
				'Failed to open the mail client and send a mail to: ' + to
			);
		};

		window.plugins.webintent.startActivity(
			{
				url: to,
				action: WebIntent.ACTION_SEND,
				type: 'text/plain',
				extras: extras
			},
			successFunc,
			failFunc
		);
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
	}
});
