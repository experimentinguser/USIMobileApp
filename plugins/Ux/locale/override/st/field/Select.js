Ext.define('Ux.locale.override.st.field.Select', {
	override : 'Ext.field.Select',
	requires : [
		'Ux.locale.override.st.field.Field'
	],
	setLocale : function(locale) {
		var me = this,
			locales = me.locales || me.getInitialConfig().locales,
			options = locales.options,
			manager = me.locale;
		if(options){
			options = manager.get(options, []);
			this.setOptions(options);
		}
		me.callParent(arguments);
	}
});
