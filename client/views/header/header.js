Template.header.helpers({
	pages: function(){
		return Pages.find();
	},
	landingPage: function(){
		if (Settings.findOne()){
			landingPage = Settings.findOne().landingPage;
			return Pages.findOne({title: landingPage}).slug;
		}
	},
	siteTitle: function(){
		if (Settings.findOne())
			return Settings.findOne().siteTitle;
	}
})

// Template.header.events({
// 	'click .page-toggle': function(e){
// 		if ($('.page-container').length > 0){
// 			$('.page-container').addClass('off-page');
// 			setTimeout(function(){
// 				$('.page-container').remove();
// 				var data = Pages.findOne({slug: $(e.target).data('slug')});
// 				UI.insert(UI.renderWithData(Template.showPage, data), $('.container').get(0));
// 			}, 600);
// 		}
// 	}
// })