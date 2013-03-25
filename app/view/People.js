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
							dataview.selectedItem.addCls('person-selected');
					} else if (typeof dataview.selectedItem == 'object') {
							// unselect the previous item
							dataview.selectedItem.getBuilding().setHidden(true);
							dataview.selectedItem.getFloor().setHidden(true);
							dataview.selectedItem.getHeadquarter().setHidden(true);
							dataview.selectedItem.getCallButton().setHidden(true);
							dataview.selectedItem.getMailButton().setHidden(true);
							dataview.selectedItem.getHomePageButton().setHidden(true);
							dataview.selectedItem.removeCls('person-selected');
							// set the new selected item
							dataview.selectedItem = target;
							dataview.selectedItem.addCls('person-selected');
					}
					target.getBuilding().setHidden(false);
					target.getFloor().setHidden(false);
					target.getHeadquarter().setHidden(false);
					target.getCallButton().setHidden(false);
					target.getMailButton().setHidden(false);
					if(record.get('url') != null){
						target.getHomePageButton().setHidden(false);
					}
			},
		}
	}
});
