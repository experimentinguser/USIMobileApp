Ext.define("USIMobile.view.Profile", {
	extend: 'Ext.Panel',
	xtype: 'profile',

	config: {
		id: 'profile',
		cls: 'standard_font profile',
		items: [
			{
				xtype: 'image',
				itemId: 'picture',
				margin: 5,
				width: 100,
				height: 150,
				cls: 'picture',
			},
			{
				xtype: 'component',
				itemId: 'name',
				cls: 'name',
			},
		],
		listeners: {
			initialize: function() { // update data
				var record = this.getRecord();
				var label_begin = '<span class="label">';
				var label_end = '</span>: ';

				if(record.get('picture_url') != null) {
					this.down('#picture').setSrc(record.get('picture_url'));
				} else {
					this.down('#picture').hide();
				}

				this.down('#name').setHtml(label_begin + Ux.locale.Manager.get('label.name') + label_end + record.get('first_name') + ' ' + record.get('last_name'));

				if(record.get('biography_it') != null && Ux.locale.Manager.getLanguage() == 'it') {
					this.add({
						xtype: 'component',
						itemId: 'biography',
						cls: 'biography'
					});
					this.down('#biography').setHtml(label_begin + Ux.locale.Manager.get('label.biography') + label_end + record.get('biography_it'));
				} else if(record.get('biography_en') != null && Ux.locale.Manager.getLanguage() == 'en') {
					this.add({
						xtype: 'component',
						itemId: 'biography',
						cls: 'biography'
					});
					this.down('#biography').setHtml(label_begin + Ux.locale.Manager.get('label.biography') + label_end + record.get('biography_en'));
				}

				if(record.get('email') != null && record.get('email').length > 0) {
					for(var i = 0; i < record.get('email').length; ++i) {
						var email = record.get('email')[i].email;
						if(email != null) {
							this.add({
								xtype: 'component',
								itemId: 'email'+i,
								cls: 'email'
							});
							var email = record.get('email')[i].email;
							var html = label_begin;
								html+= Ux.locale.Manager.get('label.email');
								html+= label_end;
								html+= '<a href="mailto:'+email+'">'+email+'</a>';
							this.down('#email'+i).setHtml(html);
						}
					}
				}
				
				if(record.get('phone') != null && record.get('phone').length > 0) {
					for(var i = 0; i < record.get('phone').length; ++i) {
						var phone_number = record.get('phone')[i].official;
						if(phone_number != null) {
							this.add({
								xtype: 'component',
								itemId: 'phone'+i,
								cls: 'phone'
							});
							var html = label_begin;
								html+= Ux.locale.Manager.get('label.phone');
								html+= label_end
								html+= '<a href="tel:'+phone_number+'">'+phone_number+'</a>';
							this.down('#phone'+i).setHtml(html);
						}
					}
				} 

				if(record.get('place') != null && record.get('place').length > 0) {
					for(var i = 0; i < record.get('place').length; ++i) {
						this.add({
							xtype: 'component',
							itemId: 'office'+i,
							cls: 'office'
						});
						this.down('#office'+i).setHtml(label_begin + Ux.locale.Manager.get('label.office') + label_end + record.get('place')[i].office);

						this.add({
							xtype: 'component',
							itemId: 'address'+i,
							cls: 'address'
						});
						this.down('#address'+i).setHtml(label_begin + Ux.locale.Manager.get('label.address') + label_end + record.get('place')[i].address);

						this.add({
							xtype: 'component',
							itemId: 'location'+i,
							cls: 'location'
						});
						this.down('#location'+i).setHtml(label_begin + Ux.locale.Manager.get('label.location') + label_end + record.get('place')[i].location);
					}
				} 

				if(record.get('faculty_position') != null && record.get('faculty_position').length > 0) {
					for(var i = 0; i < record.get('faculty_position').length; ++i) {
						this.add({
							xtype: 'component',
							itemId: 'position'+i,
							cls: 'position'
						});
						var position = Ux.locale.Manager.getLanguage() == 'it' ? record.get('faculty_position')[i].name_it : record.get('faculty_position')[i].name_en;
						this.down('#position'+i).setHtml(label_begin + Ux.locale.Manager.get('label.position') + label_end + position);

						this.add({
							xtype: 'component',
							itemId: 'faculty'+i,
							cls: 'faculty'
						});
						var faculty = Ux.locale.Manager.getLanguage() == 'it' ? record.get('faculty_position')[i].faculty.name_it : record.get('faculty_position')[i].faculty.name_en;
						this.down('#faculty'+i).setHtml(label_begin + Ux.locale.Manager.get('label.faculty') + label_end + faculty);
					}
				}

				if(record.get('unit_function') != null && record.get('unit_function').length > 0) {
					for(var i = 0; i < record.get('unit_function').length; ++i) {
						this.add({
							xtype: 'component',
							itemId: 'function'+i,
							cls: 'function'
						});
						var _function = Ux.locale.Manager.getLanguage() == 'it' ? record.get('unit_function')[i].name_it : record.get('unit_function')[i].name_en;
						this.down('#function'+i).setHtml(label_begin + Ux.locale.Manager.get('label.function') + label_end + _function);

						this.add({
							xtype: 'component',
							itemId: 'unit'+i,
							cls: 'unit'
						});
						var unit = Ux.locale.Manager.getLanguage() == 'it' ? record.get('unit_function')[i].unit.name_it : record.get('unit_function')[i].unit.name_en;
						this.down('#unit'+i).setHtml(label_begin + Ux.locale.Manager.get('label.unit') + label_end + unit);
					}
				}

				if(record.get('attachment') != null && record.get('attachment').length > 0) {
					for(var i = 0; i < record.get('attachment').length; ++i) {
						this.add({
							xtype: 'component',
							itemId: 'attachment'+i,
							cls: 'attachment'
						});

						var attachment = Ux.locale.Manager.getLanguage() == 'it' ? record.get('attachment')[i].title_it : record.get('attachment')[i].title_en;
						var url = record.get('attachment')[i].file_url;
						var html = label_begin;
							html+= Ux.locale.Manager.get('label.attachment');
							html+= label_end;
							html+= '<a href="javascript:USIMobile.app.getFile(\''+url+'\', \''+record.get('first_name')+'_'+record.get('last_name')+'_attachment_'+i+'.pdf\', \'application/pdf\')">'+attachment+'</a>';
						this.down('#attachment'+i).setHtml(html);
					}
				}
			}
		}
	}
});
