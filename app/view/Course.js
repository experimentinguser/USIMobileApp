Ext.define("USIMobile.view.Course", {
	extend: 'Ext.Panel',
	xtype: 'course',

	requires: [
		'Ext.TitleBar',
	],

	config: {
		id: 'course',
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		listeners: {
			painted: function(){
				// display the parent post
				var data = this.getRecord().getData();
				// prepare the html
				var title_html = '<div class="course_title">'+data.title+'</div>';
				var description_html = '<div class="course_description"><div class="label">'+Ux.locale.Manager.get('label.description')+':</div>'+
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate porttitor aliquet. Suspendisse at metus metus.'+
										'</div>';
				var professor_html = '<div class="course_professors"><span class="label">'+Ux.locale.Manager.get('label.professor')+':</span> '+data.professor+'</div>';
				var level_html = '<div class="course_level"><span class="label">'+Ux.locale.Manager.get('label.level')+':</span> '+data.level+'</div>';
				var credits_html = '<div class="course_credits"><span class="label">'+Ux.locale.Manager.get('label.credits')+':</span> '+data.credits+'</div>';
				var semester_html = '<div class="course_semester"><div class="label">'+Ux.locale.Manager.get('label.semester')+':</div>'+data.semester+'</div>';
				var start_date_html = '<div class="course_semester_start"><span class="label">'+Ux.locale.Manager.get('label.begin')+':</span> '+data.semester_begin+'</div>';
				var end_date_html = '<div class="course_semester_end"><span class="label">'+Ux.locale.Manager.get('label.end')+':</span> '+data.semester_end+'</div>';

				var content = "";
				content += title_html;
				content += description_html;
				content += professor_html;
				content += level_html;
				content += credits_html;
				content += start_date_html;
				content += end_date_html;

				// inject html
				this.setHtml(content);
			}	
		},
	},
});
