//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'USIMobile': 'app'
});
//</debug>

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
		"USIMobile.controller.Dash", 
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
		// success function
		var successFunc = function(result) {
			// download mask code
			if(
				Ext.Viewport.getActiveItem().getMasked() == null || 
				Ext.Viewport.getActiveItem().getMasked().isHidden() && result.progress < 100
			) { // init mask
				Ext.Viewport.getActiveItem().setMasked({
					xtype: 'loadmask',
					message: result.progress+' %'
				});
			} else if(result.progress < 100){ // update the progress
				Ext.Viewport.getActiveItem().getMasked().setMessage(result.progress+' %');
			} else { // remove the mask
				Ext.Viewport.getActiveItem().setMasked(false);
			}

			if(result.progress == 100 && result.status == 1) {
				var filePath = '/'+USIMobile.Config.getFileCacheDir()+'/'+filename;
				USIMobile.app.openFile(filePath, mime);
			}

			console.log(JSON.stringify(result));
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
	}

});
