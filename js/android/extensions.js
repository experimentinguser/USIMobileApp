/* 
 * This file contains the extensions for the USIMobile app.
 * 
 * All the functions added here are platform dependant.
 *
 * This file contains the android related functions.
 *
 */
function addExtensions() {
	//////////////////////////////////////////////////////////////////////////
	// this function opens a dialog for sending messages.
	//////////////////////////////////////////////////////////////////////////
	USIMobile.app.sendEmail = function(to, subject, body) {
		var extras = {};
		extras[WebIntent.EXTRA_SUBJECT] = subject;
		extras[WebIntent.EXTRA_TEXT] = body;
		var successFunc = function() {};
		// fail function
		var failFunc = function(){
			Ext.Msg.alert(
				Ux.locale.Manager.get('title.error'),
				Ux.locale.Manager.get('message.sendMailError') + ': ' + to
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
	};

	//////////////////////////////////////////////////////////////////////////
	// this function downloads a file and updates the status in the loadMask
	// popup
	//////////////////////////////////////////////////////////////////////////
	//
	// file is an object such as:
	// {"name": "filename", "mime":"mime/type"}
	USIMobile.app.getFile = function(url, filename, mime) {
		var dir = USIMobile.Config.getFileCacheDir();
		USIMobile.app.showLoadMask('...');
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
				Ux.locale.Manager.get('title.error'),
				Ux.locale.Manager.get('message.fileDownloadError') + ': ' + filename
			);
			USIMobile.app.hideLoadMask();
		};
		// get the file
		window.plugins.downloader.downloadFile(url, {'overwrite': true}, successFunc, failFunc, filename, dir);
	};

	//////////////////////////////////////////////////////////////////////////
	// This function opens a url in the default browser app
	//////////////////////////////////////////////////////////////////////////
	USIMobile.app.openURL = function(urladdr) {

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
				Ext.Msg.alert(
					Ux.locale.Manager.get('title.error'),
					Ux.locale.Manager.get('message.openURLError') + ': ' + path
				);
			});
	};

	//////////////////////////////////////////////////////////////////////////
	// This function opens a file with an external app that is
	// associated to the mime type
	//////////////////////////////////////////////////////////////////////////
	USIMobile.app.openFile = function(path, mime) {
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
				Ext.Msg.alert(
					Ux.locale.Manager.get('title.error'),
					Ux.locale.Manager.get('message.openFileError') + ': ' + path
				);
			});
	};

	USIMobile.app.onBackKeyDown = function(e) {
		var popOutput = USIMobile.app.getController('Home').getHome().pop();
		if(popOutput == undefined) {
			navigator.app.exitApp();
			/*
			Ext.Msg.confirm(
				Ux.locale.Manager.get('title.exit'),
				Ux.locale.Manager.get('message.confirmExit'),
				function(btn) {
					if(btn == 'yes') {
						navigator.app.exitApp();
					}
				}
			);
			*/
		}
		e.preventDefault();
	};

	document.addEventListener("backbutton", Ext.bind(USIMobile.app.onBackKeyDown, this), false);
}
