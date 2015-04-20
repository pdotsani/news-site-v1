$(document).ready(function() {

	/* -Scroll to top of site on load 
	(better way to do this?)- */
	$('body').scrollTop(0);

	/* Activates plugin that makes navbar 
	stick to top of browser window */
	

	/* Activates plugin that will toggle 
		css to make navbar fill width of navbar
		and revert back to normal style */
	$('#content-section').waypoint({
		handler: function(direction) {
			$('#navbar-section').stick_in_parent();
			$('#navbar-section > nav').css('width', '100%');
		}
	});
	$('#navbar-section').waypoint({
		handler: function(direction) {
			/* Styles get overwritten in moile modes 
			via responsive stylings */
			$('#navbar-section').trigger("sticky_kit:detach");
			$('#navbar-section > nav').css('width', '1125px');
		}
	});

});
