Meteor.startup(function() {
	//Meteor starts
});

Template.home.helpers({
	url: function() {
		return window.location.origin + '?_escaped_fragment_='
	}
});
