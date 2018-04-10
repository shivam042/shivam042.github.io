$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight*0.56);
    });

   })

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }



}
