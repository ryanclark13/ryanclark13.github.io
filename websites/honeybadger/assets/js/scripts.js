$(document).ready(function(){
      $('.parallax').parallax();
    });
$(document).ready(function(){
      $('.slider').slider();
      $('.slider').slider({height: 600});
    });
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideUp("slow");
    });
});