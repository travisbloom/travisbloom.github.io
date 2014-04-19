//Header Scroll Effect
$('#iconBox').waypoint(function(direction) {
	$("#headerText").text(OpenSection);
	if (direction === "up"){
		$("#headerText").text("");
		$("#headerHolder").removeClass().addClass("clean");
	}
	else{
		$("#headerHolder").removeClass().addClass("headerScroll");
	}

});
//sets the top text to the section name
var OpenSection = "";
$( ".navIcon" ).click(function() {
    OpenSection = ($(this).attr('name'));
});
//moves down the page the first time a section is clicked
$( ".navIcon" ).one( "click", function() {
        var n = $(document).height();
    $('html, body').animate({ scrollTop: 500 }, 500);
});

//toggles the animation class for the sidebar
$("#headerClick").click(function() {
	$(".page").toggleClass("nav-animation");
}); 

$('.stopJump').click(function(e)
{
    e.preventDefault();
});

$(function() {
    FastClick.attach(document.body);
});

Handlebars.registerHelper('setParentIndex', function(value){
    this.index = Number(value); //I needed human readable index, not zero based
});
var source   = $("#stories").html();

console.log(storyData);
var template = Handlebars.compile(source);
console.log(template(storyData));

$('.panel-group').append(template(storyData));
