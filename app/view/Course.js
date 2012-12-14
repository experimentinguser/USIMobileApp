Ext.define("USIMobile.view.Course", {
	extend: 'Ext.Panel',
	xtype: 'course',

	requires: [
		'Ext.TitleBar',
	],

	config: {
		id: 'course',
		title: 'Course',
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		listeners: {
			initialize: function(){
				// display the parent post
				var data = this.getRecord().getData();
				// prepare the html
				var title_html = '<div class="course_title">'+data.title+'</div>';
				var description_html = '<div class="course_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate porttitor aliquet. Suspendisse at metus metus. Vestibulum rhoncus semper scelerisque. Proin odio quam, viverra vitae luctus non, placerat vehicula libero. Nam semper bibendum mi ut ultrices. Ut eu magna ut nulla vestibulum volutpat a in quam. Aenean non lectus nibh. </div>';
				//var description_html = '<div class="course_title">'+data.description+'</div>';
				var professor_html = '<div class="course_professors">Professors: '+data.professor+'</div>';
				var level_html = '<div class="course_level">Level: '+data.level+'</div>';
				var credits_html = '<div class="course_credits">Credits: '+data.credits+'</div>';
				var semester_html = '<div class="course_semester">Semester: '+data.semester+'</div>';
				var start_date_html = '<div class="course_professors">Start: '+data.semester_begin+'</div>';
				var end_date_html = '<div class="course_professors">End: '+data.semester_end+'</div>';

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
