
function dropper(){


     $('.help').hover(function(){
            
        $('.help-list').show();
    })

    $('.about').hover(function(){
            
        $('.about-list').show();
    })

    $('.plans').hover(function(){
            
        $('.plans-list').show();
    }) 


 
    $(".help").hover(function(){
        $(".help-list").css("visibility","visible"); 
      });
      $(".about, .plans").hover(function() {
          $(".help-list").css("visibility","hidden"); 
      });

      $(".about").hover(function(){
        $(".about-list").css("visibility","visible"); 
      });
     $(".help, .plans").hover(function() {
          $(".about-list").css("visibility","hidden"); 
      });

      $(".plans").hover(function(){
        $(".plans-list").css("visibility","visible"); 
      });
     $(".help, .about").hover(function() {
          $(".plans-list").css("visibility","hidden"); 
      }); 

      
}

function closer(){


    $('html').click(function(){
            
        $('.help-list, .about-list, .plans-list ').hide();
    })
}





function init(){
    dropper();
    closer();
 }
  $(document).ready(init); 




