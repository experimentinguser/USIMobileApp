Ext.define("USIMobile.view.People", {
	extend: 'Ext.DataView',
	xtype: 'people',

	config: {
		id: 'people',
		cls: 'standard_font',
		useComponents: true,
		defaultType: 'person',
		listeners: {
			itemsingletap: function (dataview, index, target, record, e) {
					if(typeof dataview.selectedItem == 'undefined') {
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('person_selected');
					} else if (dataview.selectedItem != null && typeof dataview.selectedItem == 'object') {
							// unselect the previous item
							dataview.selectedItem.down('#hiddenBlock').setHidden(true);
							dataview.selectedItem.removeCls('person_selected');
							// set the new selected item
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('person_selected');
					}
					target.down('#hiddenBlock').setHidden(false);
					if(record.get('url') == null){
						target.down('#homepage').setHidden(true);
					}
			},
		}
	}
});
