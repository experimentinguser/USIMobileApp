Ext.define("USIMobile.view.Library", {
	extend: 'Ext.form.Panel',
	xtype: 'library',
	fullscreen: true,
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Select',
		'Ext.field.Radio',
	],

	controllers: [
		'USIMobile.controller.Library'
	],

	config: {
		id: 'library',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',	
						name: 'pattern',
						locales: {
							label: 'label.title'
						}
					},
					{
						xtype: 'radiofield',
						name : 'doc',
						value: 'book',
						labelWidth: '80%',
						locales: {
							label: 'radio.book'
						},
						checked: true,
						listeners: {
							check: function(self) {
								self.getParent().child('radiofield#mode_letter').disable();
								self.getParent().child('radiofield#mode_pattern').disable();
								self.getParent().child('checkboxfield[name=usilib]').enable();
							}
						}
					},
					{
						xtype: 'radiofield',
						name : 'doc',
						value: 'journal',
						labelWidth: '80%',
						locales: {
							label: 'radio.journal'
						},
						listeners: {
							check: function(self) {
								self.getParent().child('radiofield#mode_letter').enable();
								self.getParent().child('radiofield#mode_pattern').enable();
								self.getParent().child('checkboxfield[name=usilib]').disable();
							}
						}
					},
					{
						xtype: 'radiofield',
						id: 'mode_pattern',
						name : 'mode',
						value: 'pattern',
						fit: 1,
						labelWidth: '80%',
						disabled: true,
						locales: {
							label: 'radio.journalByPattern'
						},
						checked: true,
						listeners: {
							check: function(self) {
								self.getParent().child('textfield[name=pattern]').enable();
								self.getParent().child('selectfield[name=letter]').disable();
							}
						}
					},
					{
						xtype: 'radiofield',
						id: 'mode_letter',
						name : 'mode',
						value: 'letter',
						labelWidth: '80%',
						disabled: true,
						locales: {
							label: 'radio.journalByLetter'
						},
						listeners: {
							check: function(self) {
								self.getParent().child('textfield[name=pattern]').disable();
								self.getParent().child('selectfield[name=letter]').enable();
							}
						}
						
					},	
					{
						xtype: 'selectfield',
						name: 'letter',
						disabled: true,
						locales: {
							label: 'label.letter',
						},
						options: [
							{ text: 'a', value: 'a' },
							{ text: 'b', value: 'b' },
							{ text: 'c', value: 'c' },
							{ text: 'd', value: 'd' },
							{ text: 'e', value: 'e' },
							{ text: 'f', value: 'f' },
							{ text: 'g', value: 'g' },
							{ text: 'h', value: 'h' },
							{ text: 'i', value: 'i' },
							{ text: 'j', value: 'j' },
							{ text: 'k', value: 'k' },
							{ text: 'l', value: 'l' },
							{ text: 'm', value: 'm' },
							{ text: 'n', value: 'n' },
							{ text: 'o', value: 'o' },
							{ text: 'p', value: 'p' },
							{ text: 'q', value: 'q' },
							{ text: 'r', value: 'r' },
							{ text: 's', value: 's' },
							{ text: 't', value: 't' },
							{ text: 'u', value: 'u' },
							{ text: 'v', value: 'v' },
							{ text: 'w', value: 'w' },
							{ text: 'x', value: 'x' },
							{ text: 'y', value: 'y' },
							{ text: 'z', value: 'z' },
							{ text: '*', value: 'noAlpha' },
						],
						usePicker: false,
					},
					{
						xtype: 'checkboxfield',
						name: 'usilib',
						labelWidth: '80%',
						locales: {
							label: 'label.usilib',
						},
						checked: true,
					},
					{
						xtype: 'button',
						locales: {
							text: 'button.search'
						},
						ui: 'confirm',
						action: 'search',	
					}

				]
			}
		]
	}
});
