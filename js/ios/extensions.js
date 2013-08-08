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
		console.log('sending mail to ' + to);
		console.log('subject ' + subject);
		console.log('body ' + body);
		var mailto = 'mailto:'+to;
			mailto = mailto + '?subject=' + subject;
			mailto = mailto + '&body=' + body;
		//window.open(mailto, '_blank', 'location=yes');
		window.open(mailto);
	};

	//////////////////////////////////////////////////////////////////////////
	// This function opens a url in the default browser app
	//////////////////////////////////////////////////////////////////////////
	USIMobile.app.openURL = function(urladdr) {

		if(USIMobile.Config.getVerbose()) {
			console.log('===> Opening URL: '+urladdr);
		}
		console.log('opening url '+urladdr);
		window.open(urladdr, '_blank', 'location=yes');
	};

	//////////////////////////////////////////////////////////////////////////
	// This function opens a file with an external app that is
	// associated to the mime type
	//////////////////////////////////////////////////////////////////////////
	USIMobile.app.openFile = function(path, mime) {
		console.log('opening file path '+path);
		console.log('file mime '+mime);
		window.open('file://'+path, '_blank', 'location=yes');
	};
}
