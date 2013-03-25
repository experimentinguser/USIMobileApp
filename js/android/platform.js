var platform = {
	hello: function(){
		console.log('hello');
	},

	sendEmail: function(to, subject, body, successFunc, failFunc) {
		var extras = {};
		extras[WebIntent.EXTRA_SUBJECT] = subject;
		extras[WebIntent.EXTRA_TEXT] = body;	

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

	getFile: function(url, options, successFunc, failFunc, filename, dir) {
		console.log('||||||||||||||||||| getting file:' + url);
		window.plugins.downloader.downloadFile(url, {'overwrite': true}, successFunc, failFunc, filename, dir);
	},

	openFile: function(path, mime, successFunc, failFunc){
		console.log('||||||||||||||||||| opening file:' + path + ' mime: ' + mime);
		var protocol = 'file:///';
		var store = 'sdcard'
		window.plugins.webintent.startActivity(
			{
				action: WebIntent.ACTION_VIEW,
				type: mime,
				url: protocol+store+path,
  			}, 
			successFunc, 
			failFunc
		);
	},

	openURL: function(urladdr, successFunc, failFunc) {
		console.log('||||||||||||||||||| opening url:' + urladdr);
		window.plugins.webintent.startActivity(
			{
				action: WebIntent.ACTION_VIEW,
				url: urladdr,
			}, 
			successFunc, 
			failFunc
		);
	}
}
