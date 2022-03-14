$(document).ready(function(){
    //read url parameters to get language, if present
    let parameters = new URLSearchParams(window.location.search);
    let lang = parameters.get("lang");
    
    //defaults to english
    if (lang == "ru") {
        $('[lang="en"]').hide();
        $('[lang="ru"]').show();
    } else if (lang == "en") {
        $('[lang="ru"]').hide(); 
        $('[lang="en"]').show();
    } else { 
        $('[lang="ru"]').hide(); 
        $('[lang="en"]').show();
    }
    

    //switch to russian
    $(".ru-switch").click(function() {
        //add url parameter
        window.history.replaceState(null, null, "?lang=ru");
        $('[lang="ru"]').show();
        $('[lang="en"]').hide();
    });

    //switch to english
    $(".en-switch").click(function() {
        //add url parameter
        window.history.replaceState(null, null, "?lang=en");
        $('[lang="en"]').show();
        $('[lang="ru"]').hide();
    });
});