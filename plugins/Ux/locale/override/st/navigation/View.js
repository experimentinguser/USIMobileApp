Ext.define('Ux.locale.override.st.navigation.View', {
    override : 'Ext.navigation.View',
    requires : [
        'Ux.locale.override.st.Component'
    ],
    setLocale : function(locale) {
        var me = this,
            locales = me.locales || me.getInitialConfig().locales,
            manager = me.locale;
        me.callParent(arguments);
        me.refresh();
    }
});
