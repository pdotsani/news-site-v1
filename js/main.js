$(document).ready(function() {

	/* to ensure all jqerry works propperly */
	$('body').scrollTop(0);

	/* jquerry plugin that makes navbar stick to top of browser window */
	$('#navbar-section').stick_in_parent();

	/* waypoint plugin that will toggle css to make navbar fill width of navbar
		 and revert back to normal style */
	$('#content-section').waypoint({
		handler: function(direction) {
			$('#navbar-section > nav').css('width', '100%');
		}
	});
	$('#navbar-section').waypoint({
		handler: function(direction) {
			$('#navbar-section > nav').css('width', '1125px');
		}
	});

});
