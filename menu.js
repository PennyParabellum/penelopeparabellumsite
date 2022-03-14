//establish functions
$(document).ready(function(){

    //enter menu function
    $("#menu-button").click(function() {
        //dim the page
        $("#page-dim").show();
        $("#page-dim").animate({
            opacity: "1"
        }, 500)

        //show the menu
        $("#nav-menu").show();
        $("#nav-menu").animate({
            opacity: "1",
            left: "0px"
        }, 500);

        //hide the button
        $("#menu-button").animate({
            opacity: "0",
            left: "-=50px"
        }, 200, function(){
            $("#menu-button").hide();
        });
    });

    //exit menu function
    $("#page-dim").click(function() {
        //undim the page
        $("#page-dim").animate({
            opacity: "0"
        }, 500, function(){
            $("#page-dim").hide();
        });

        //hide the menu
        $("#nav-menu").animate({
            opacity: "0",
            left: "-100px"
        }, 500, function(){
            $("#nav-menu").hide();
        });

        //show the button
        $("#menu-button").show();
        $("#menu-button").animate({
            opacity: "1",
            left: "+=50px"
        }, 500);
    });
    
});