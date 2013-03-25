var platform = {

	hello: function(){ console.log('hello'); },

	sendEmail: function(to, subject, body) {
		console.log('mailing to: ' + to);	
		console.log('subject: ' + subject);	
		console.log('body: ' + body);	
	},

	getFile: function(url, options, successFunc, failFunc, filename, dir) {
		console.log('getting file: '+url);
		window.open(url, '_blank');
	},

	openFile: function(path, mime, successFunc, failFunc) {
		console.log('opening file: ' + path);	
	},

	openURL: function(urladdr, successFunc, failFunc) {
		console.log('opening url: '+urladdr);
		window.open(urladdr, '_blank');
	},
}
