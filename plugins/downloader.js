function Downloader() {}

Downloader.prototype.downloadFile = function(fileUrl, params, win, fail) {
	
	//Make params hash optional.
	if (!fail) win = params;
	cordova.exec(win, fail, "Downloader", "downloadFile", [fileUrl, params]);
};

/**
 * Load Downloader
*/
if(!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.downloader) {
    window.plugins.downloader = new Downloader();
}
