Ext.define("USIMobile.view.UsageAgreement", {
	extend: 'Ext.Panel',
	xtype: 'usageagreement',

	requires: [
	],

 	controllers: [
		'MoodleMobApp.controller.UsageAgreement'
	],

	config: {
		id: 'usageagreement_panel',
		styleHtmlContent: true,
		scrollable: true,
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Usage Agreement',
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				defaults: {
					flex: 1
				},
				items: [
					{
						xtype: 'button',
						text: 'I agree',
						ui: 'confirm',
						action: 'agree'
					},	
					{
						xtype: 'button',
						text: 'I disagree',
						ui: 'decline',
						action: 'disagree'
					}	
				],
			}
		],
		html: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
	},

});
