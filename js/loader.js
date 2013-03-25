// require this script before your document is done loading
;(function () {
	var is_Droid = navigator.userAgent.match(/Android/);
	var is_iOS = navigator.userAgent.match(/(iPhone|iPod|iPad)/);
	var droidScripts = [
		"js/android/extensions.js",
		"js/android/cordova-2.3.0.js",
		"plugins/android/downloader.js",
		"plugins/android/webintent.js",
	];
	var iosScripts = [
	];

	var browserScripts = [
		"js/browser/extensions.js",
	];


	if(is_Droid) {
		droidScripts.forEach(loadScript)
	} else if(is_iOS) {
		iosScripts.forEach(loadScript)
	} else { // just a normal browser
		browserScripts.forEach(loadScript)
	}

	function loadScript(src) {
		var line = '<script type="text/javascript" charset="utf-8" src="' + src + '"></script>';
		document.writeln(line);
	}
})();
