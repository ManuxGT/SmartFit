$(document).ready(function(){


    var altura= $('.bd-example').offset().top;


    $(window).on('scroll', function(){
        if($(window).scrollTop()>altura){
            $('.navbar').addClass('menu-fixed');
        }else{
            $('.navbar').removeClass('menu-fixed');
        }

    })

    $('nav a').click(function(e){				
		e.preventDefault();
		var strAncla=$(this).attr('href');
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top},1000);
            
		
    });


});


        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

        //$('.counter').removeClass('counter');

