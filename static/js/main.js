$(document).ready( function() {
    $("#navOverlay").hide();
    $("#navMobile").addClass("nav-close");

    $("#mobileNavOpenBtn").click( function() {
        $("#mobileNavOpenBtn").attr("aria-expanded","true");
        $("#navOverlay").show();
        $("#navMobile").removeClass("nav-close");
        $("body").addClass("no_scroll");
    } );
    $("#mobileNavCloseBtn").click( function() {
        $("#mobileNavOpenBtn").attr("aria-expanded","false");
        $("#navOverlay").hide();
        $("#navMobile").addClass("nav-close");
        $("body").removeClass("no_scroll");
    } );
} );