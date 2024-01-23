
console.log("file is loaded correctly!");

// $(document).ready(function(){
//     $("p").hover(function(){
//       $(this).css("background-color", "yellow");
//       }, function(){
//       $(this).css("background-color", "pink");
//     });
//   });

$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "#52FF01");
      $(this).css("color", "#000000");
      }, function(){
      $(this).css("background-color", "#FF340A");
      $(this).css("color", "#000000");
    });
  });