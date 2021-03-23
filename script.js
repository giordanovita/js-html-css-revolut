
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

    $('.features').hover(function(){
            
        $('.features-list').show();
    }) 


 
    $(".help").hover(function(){
        $(".help-list").css("visibility","visible"); 
      });
      $(".about, .plans, .features").hover(function() {
          $(".help-list").css("visibility","hidden"); 
      });

      $(".about").hover(function(){
        $(".about-list").css("visibility","visible"); 
      });
     $(".help, .plans, .features").hover(function() {
          $(".about-list").css("visibility","hidden"); 
      });

      $(".plans").hover(function(){
        $(".plans-list").css("visibility","visible"); 
      });
     $(".help, .about, .features").hover(function() {
          $(".plans-list").css("visibility","hidden"); 
      }); 

      $(".features").hover(function(){
        $(".features-list").css("visibility","visible"); 
      });
     $(".help, .about, .plans").hover(function() {
          $(".features-list").css("visibility","hidden"); 
      }); 

      
}

function closer(){


    $('html').click(function(){
            
        $('.help-list, .about-list, .plans-list, .features-list ').hide();
    })
}





function init(){
    dropper();
    closer();
 }
  $(document).ready(init); 




