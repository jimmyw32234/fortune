


$("button").click(function() {
    var message = $(".name").val() + " will have drank " + $(".two").val()  + " " + parseInt($(".three").val()*573) +  "  times."  ;
    $(".end").text(message);
    $(".questions").hide();
    });
    
