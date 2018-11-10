// $("div.row").on("click", "div.box", function(){
//     $(this).toggleClass("clicked");
// });

$(document).ready(function () {

    var move = 1;
    var play = true;

    function resetBoard(){
        location.reload();
    }



    $("div.inner").click(function () {
        if ($(this).text() != "" && play) {
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
        resetBoard();
   });

});




// while(counter < 10){
//     if (counter % 2 == 0) {
//         $("div.box").click(function () {
//             $(this).toggleClass("black");
//             counter++;
//         });
//     } else {
//         $("div.box").click(function () {
//             $(this).toggleClass("white");
//             counter++;
//         });
//     }
// }





// if ($(this).css("background") != "black") {
//     $(this).clicked();
// } else {
//     $(this).clickedAgain();
// }