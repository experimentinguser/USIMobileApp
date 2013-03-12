Ext.define("USIMobile.view.UsageAgreement", {
	extend: 'Ext.tab.Panel',
	xtype: 'usageagreement',

	requires: [
	],

 	controllers: [
		'MoodleMobApp.controller.UsageAgreement'
	],

	config: {
		id: 'usageagreement',
		styleHtmlContent: true,
		scrollable: true,
		tabBar: {
			layout: { pack: 'center' }
		},
		items: [
			{
				id: 'eng',
				title: 'English',
				html: '<div class="license_title">Usage Agreement</div>'+
						'<div class="license_body">The terms and conditions of the GPL must be made available to anybody receiving a copy of the work that has a GPL applied to it ("the licensee"). Any licensee who adheres to the terms and conditions is given permission to modify the work, as well as to copy and redistribute the work or any derivative version. The licensee is allowed to charge a fee for this service, or do this free of charge. This latter point distinguishes the GPL from software licenses that prohibit commercial redistribution. The FSF argues that free software should not place restrictions on commercial use, and the GPL explicitly states that GPL works may be sold at any price.</div>'
			},
			{
				id: 'ita',
				title: 'Italiano',
				html: '<div class="license_title">Termini d\'Uso</div>'+
						'<div class="license_body">Come ogni licenza software, la GPL è un documento legale associato al programma rilasciato sotto tale licenza. Come ogni licenza di software libero, essa concede ai licenziatari il permesso di modificare il programma, di copiarlo e di ridistribuirlo con o senza modifiche, gratuitamente o a pagamento. Chi distribuisce è tenuto a rendere disponibile il codice sorgente del software alle persone che ne hanno ricevuto una copia o, in alternativa, accompagnare il software con una offerta scritta di rendere disponibile il sorgente su richiesta a prezzo nominale.</div>'
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
	},

});
