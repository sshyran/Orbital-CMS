Template.adminHeader.events({
	'click a': function(e){
		console.log('yay clicked');

		$('.modal').remove();
		$('.container').addClass('scaled-back');
		$('.admin-header').removeClass('shown');
		$('.admin-controls-btn').removeClass('admin-active').addClass('off-page');
	},
	'click .view-pages-btn': function(e, template){
		e.preventDefault();

		if ($('.add-page-modal').length == 0){
			var data = Pages.find();
			UI.insert(UI.renderWithData(Template.pagesList, data), $('.container').get(0));
		}
	},
	'click .add-page-btn': function(e, template){
		e.preventDefault();

		if ($('.add-page-modal').length == 0){
			UI.insert(UI.render(Template.addPage), $('.container').get(0));
		}
	},
	'click .view-posts-btn': function(e, template){
		e.preventDefault();

		if ($('.add-post-modal').length == 0){
			var data = Posts.find();
			UI.insert(UI.renderWithData(Template.postsList, data), $('.container').get(0));
		}
	},
	'click .add-post-btn': function(e){
		e.preventDefault();

		if ($('.add-post-container').length == 0){
			UI.insert(UI.render(Template.addPost), $('.container').get(0));
		}
	},

	'click .add-media-btn': function(e){
		e.preventDefault();

		if ($('.add-media-modal').length == 0){
			var media = Media.find();
			UI.insert(UI.renderWithData(Template.addMedia, media), $('.container').get(0));
		}
	},

	'click .settings-btn': function(e){
		e.preventDefault();

		if ($('.settings-modal').length == 0){
			var settings = Settings.findOne();
			UI.insert(UI.renderWithData(Template.settings, settings), $('.container').get(0));
		}
	},
	'click .menu-settings-btn': function(e){
		e.preventDefault();

		if ($('.settings-modal').length == 0){
			var settings = Settings.findOne();
			UI.insert(UI.renderWithData(Template.menuSettings, settings), $('.container').get(0));
		}
	}
});