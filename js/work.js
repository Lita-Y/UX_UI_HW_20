
$("#readMore").click(function (){
    $("#special").toggleClass("hidden");
    $(".caseStudy").slideToggle("slow");
});

$("#readLess").click(function (){
    $("#special").toggleClass("hidden");
    $(".caseStudy").slideUp("slow");
});