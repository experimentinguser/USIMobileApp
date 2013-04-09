Ext.define("USIMobile.view.Services", {
	extend: 'Ext.DataView',
	xtype: 'services',

	config: {
		id: 'services',
		emptyText: 'No services found.',
		cls: 'standard_font',
		useComponents: true,
		defaultType: 'service',
		listeners: {
			itemsingletap: function (dataview, index, target, record, e) {
					if(typeof dataview.selectedItem == 'undefined') {
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('service_selected');
					} else if (typeof dataview.selectedItem == 'object') {
							// unselect the previous item
							dataview.selectedItem.getBuilding().setHidden(true);
							dataview.selectedItem.getOffice().setHidden(true);
							dataview.selectedItem.getEmail().setHidden(true);
							dataview.selectedItem.getPhone().setHidden(true);
							dataview.selectedItem.getCallButton().setHidden(true);
							dataview.selectedItem.getMailButton().setHidden(true);
							dataview.selectedItem.getHomePageButton().setHidden(true);
							dataview.selectedItem.removeCls('person-selected');
							// set the new selected item
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('service_selected');
					}
					target.getBuilding().setHidden(false);
					target.getOffice().setHidden(false);
					target.getEmail().setHidden(false);
					target.getPhone().setHidden(false);
					target.getCallButton().setHidden(false);
					target.getMailButton().setHidden(false);
					if(record.get('url') != null){
						target.getHomePageButton().setHidden(false);
					}
			},
		}
	}
});
