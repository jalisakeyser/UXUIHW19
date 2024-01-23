

console.log("file is loaded correctly!");

$(document).ready(function(){
    $("p").hover(function(){
      $(this).css("background-color", "#FF340A");
     }, function(){
      $(this).css("background-color", "#979797");
    });
   });

$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "#52FF01");
      $(this).css("color", "#000000");
      }, function(){
      $(this).css("background-color", "#FF340A");
      $(this).css("color", "#000000");
    });
  });