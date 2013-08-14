Ext.define("USIMobile.view.Services", {
	extend: 'Ext.DataView',
	xtype: 'services',

	config: {
		id: 'services',
		cls: 'standard_font',
		useComponents: true,
		defaultType: 'service',
		listeners: {
			itemsingletap: function (dataview, index, target, record, e) {
					if(typeof dataview.selectedItem == 'undefined') {
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('service_selected');
					} else if (dataview.selectedItem != null && typeof dataview.selectedItem == 'object') {
							// unselect the previous item
							dataview.selectedItem.down('#hiddenBlock').setHidden(true);
							dataview.selectedItem.removeCls('service_selected');
							// set the new selected item
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('service_selected');
					}
					target.down('#hiddenBlock').setHidden(false);
					if(record.get('url') == null){
						target.down('#homepage').setHidden(true);
					}
			},
		}
	}
});
