
//Header Banner Stickyness
$('#h2').hide();
$('#ribbon-holder').waypoint(function(direction) {
	$(this).toggleClass('sticky');
});

$('#h1-trigger').waypoint(function(direction) {
	$('#h2').hide();
	$('#h1').fadeIn();
});

$('#h2-trigger').waypoint(function(direction) {
	$('#h2').fadeIn();
	$('#h1').hide();
}
,{
	offset:50
}
);

//Links Button Activate
$("#nav-link-holder").click(function() {
	$(this).toggleClass()
	$("#page").toggleClass("nav-animation");
}); 


//shows dates as you scroll down
$('.date').waypoint(function(direction) {
	$(this).toggleClass("showdate");
}
,{
	offset:'95%'
}
);

var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
