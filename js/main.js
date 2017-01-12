$(document).ready(function() {
	$('button').on('click', function() {
		$(this).closest('.featurette').find('.lead').slideToggle();
	})
})