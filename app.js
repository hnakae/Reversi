$(document).ready(function () {

    var move = 1;
    var play = true;

    $("div.inner").click(function () {
        if ($(this).text() == "" && play) {
            if ((move % 2) == 1) {
                $(this).toggleClass("black"); 
            }
            else { 
                $(this).toggleClass("white"); 
            }
            move++;
        }
    });

   $(".reset").click(function(){
       location.reload();
   });

});




