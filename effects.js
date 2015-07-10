confirm("Enter moo land?");
$(document).ready(function(){
  $("img").hide();
  $("#button").click(function(){
    $("#screen").css("background-color","#f1e1da");
    $("#screen").css("border","solid #f1e1da");
    $("#button").fadeOut("fast");

  var numImages = $(".deck img").length;

  var count = 0;
  $img = document.getElementById("first");
  var timerId;
  recurImage();

  function recurImage(){
    if (count == numImages){
      clearTimeout(timerId);
      return;
    }
    else if (count == 0){
      /*$($img).css("display","block");*/
      $($img).fadeIn("slow");
      count++;
      timerId = setTimeout(recurImage,3000);

    }
    else{
      $($img).fadeOut("slow");
      $img = $($img).next();
      $($img).fadeIn("slow");
      count++;
      timerId = setTimeout(recurImage,3000);
    }

  }



});



});
