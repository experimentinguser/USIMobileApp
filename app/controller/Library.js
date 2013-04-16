Ext.define('USIMobile.controller.Library', {
	extend: 'Ext.app.Controller',

	requires: [
	],

	config: {
		refs: {
			home: '#home',
			homeLibraryButton: 'button#library_home_button',
			books: '#books',
			journals: '#journals',
			library: '#library',
			searchButton: '#library button[action=search]',
		},

		control: {
			homeLibraryButton: { tap: 'showLibrary' },
			searchButton: { tap: 'search' },
			books: {
				itemtap: 'checkBookInAleph',
				swipe: 'navigateBooks'
			},
			journals: {
				itemtap: 'checkJournal',
				swipe: 'navigateJournal'
			},
		}
	},
	
	init: function(){
	},

	showLibrary: function() {
		if(typeof this.getLibrary() == 'object') {
			this.getHome().push(this.getLibrary());
		} else {
			this.getHome().push({
				xtype: 'library',	
				title: Ux.locale.Manager.get('title.library'),
			});
		}
	},

	search: function(btn) {
		var data = this.getLibrary().getValues();
		// check what to search
		if(data.doc == 'journal') {
			this.searchJournals(data);
		} else {
			this.searchBooks(data);
		}
	},

	/*
	searchJournals: function(data) {
		// set parameters
		if(data.mode == 'pattern') {
			data.supporto='All';
			data.tipo = 'contiene';
			data.testo = data.pattern;
		} else {
			data.supporto='All';
			data.lettera = data.letter;
		}
		var self = this;
		Ext.Ajax.request({
			url: USIMobile.Config.getSearchJournalsDirectUrl(),
			method: 'GET',
			useDefaultXhrHeader: false,
			
			params: data,
				
			callback: function(options, success, response) {
				if (success) {
					if(typeof self.getJournals() == 'object') {
						self.getJournals().setHtml(response.responseText);
						self.getHome().push(self.getJournals());
					} else {
						self.getHome().push({
							xtype: 'journals',
							title: Ux.locale.Manager.get('title.journals'),
							html: response.responseText,
							scrollable: true,
						});
					}
				} else{
					self.displayError(7);
				}
			}
		  });
	},
	*/
	
	searchJournals: function(data) {
		var journals_store = USIMobile.WebService.searchJournals(data);

		journals_store.on('load', function(store){
			this.listJournals(store);
		}, this);
	},

	listJournals: function(journals_store) {
		if(typeof this.getJournals() == 'object') {
			this.getJournals().setStore(journals_store);
			this.getHome().push(this.getJournals());
		} else {
			this.getHome().push({
				xtype: 'journals',
				title: Ux.locale.Manager.get('title.journals'),
				store: journals_store
			});
		}
	},

	searchBooks: function(data) {
		var books_store = USIMobile.WebService.searchBooks(data);

		books_store.on('load', function(store){
			this.listBooks(store);
		}, this);
	},

	listBooks: function(search_books_outcome_store) {
		var books_store = Ext.create('Ext.data.Store', {
			model: 'USIMobile.model.Book',
			data: search_books_outcome_store.first().get('results')
		});
		if(typeof this.getBooks() == 'object') {
			this.getBooks().setStore(books_store);
			this.getHome().push(this.getBooks());
		} else {
			this.getHome().push({
				xtype: 'books',
				title: Ux.locale.Manager.get('title.books'),
				store: books_store
			});
		}
	},

	navigateBooks: function(event, node, options, eOpts) {
		console.log('SWIIIIPE');
		console.log(event);
	},

	displayError: function(code, message) {
		switch(code) {
			case 7:
				Ext.Msg.alert(Ux.locale.Manager.get('title.error'), Ux.locale.Manager.get('message.serverConnectionFailed'));
			break;
			default:
				Ext.Msg.alert(
					Ux.locale.Manager.get('title.errorCode') + code,
					Ux.locale.Manager.get('message.serverErrorMessage') + message
				);
			break;
		}
	},

	checkJournal: function(view, index, target, record) {
		// open url if available
		if(record.get('url') != null) {
			USIMobile.app.openURL(record.get('url'));
		}
	},

	checkBookInSwissBib: function(view, index, target, record) {
		var data = this.getLibrary().getValues();
		var params = '?q=' + record.get('id');
		if(data.usilib == true) {
			params += '&library=LUBUL';
		}
		params += '&language='+Ux.locale.Manager.getLanguage();
		USIMobile.app.openURL(USIMobile.Config.getSwissBibUrl() + params);
	},

	checkBookInAleph: function(view, index, target, record) {
		var data = this.getLibrary().getValues();
		var params = '&doc_library=SBT01&doc_number=00' + record.get('sbtnumber');
		if(data.usilib == true) {
			params += '&sub_library=LUBUL';
		}
		USIMobile.app.openURL(USIMobile.Config.getAlephUrl() + params);
	},
});
