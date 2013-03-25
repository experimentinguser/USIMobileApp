function Downloader() {}

Downloader.prototype.downloadFile = function(fileUrl, params, win, fail, fileName, dir) {
	//Make params hash optional.
	if (!fail) win = params;
	var overwrite=1;
	cordova.exec(win, fail, "Downloader", "downloadFile", [fileUrl, params, fileName, dir, overwrite]);
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
