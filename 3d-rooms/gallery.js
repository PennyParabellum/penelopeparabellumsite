//establish functions
$(document).ready(function(){
    $("#gallery").hide();

    //add click functions
    $("#main-image").click(function() {
        changeGalleryImage($(this).attr('src'));
        showGallery();
    });

    $("#photo1, #photo2, #photo3, #photo4").click(function() {
        let bg = $(this).css('background-image');
        bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
        changeGalleryImage(bg);
        console.log(bg);
        showGallery();
    });

    //exit menu function
    $("#gallery").click(function() {
        $("#gallery").animate({
            opacity: "0"
        }, 500, function(){
            $("#gallery").hide();
        });
    });

    //so you can click anywhere but the image itself to exit
    $("#gallery-image").click(function(e){ e.stopPropagation(); })
});

function showGallery() {
    $("#gallery").show();
    $("#gallery").animate({
        opacity: "1"
    }, 500);
}

function changeGalleryImage(url){
    $("#gallery-image").attr("src",url);
}