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

//prevents default click actions from occuring
$('.stopJump').click(function(e) {
    e.preventDefault();
});

//attaches the fastClick plugin to the body, improving mobile responsiveness
$(function() {
    FastClick.attach(document.body);
});

//adds the backstretch image to each section
//for (var i = 0; i < storyData.length; i++) {
//    console.log(storyData.length);
//    console.log(storyData[i]);
//    for (var x = 0; i < storyData[i].length; i++) {
//        console.log(storyData[i].length);
//        console.log('trig');
//        $('#background' + x + i).backstretch('../images/sections/' + x + '_' + i + '.jpg');
//    }
//}

Handlebars.registerHelper('setParentIndex', function(value){
    this.index = Number(value); //I needed human readable index, not zero based
});
var source   = $("#stories").html();

var template = Handlebars.compile(source);
$('.panel-group').append(template(storyData));
