//first-image
$(function(){
    $('.image-portfolio-first').hover(function(){
      $('.image-portfolio-first').addClass('image-hover');
      $('.image-portfolio-first').removeClass('image-leave');
     },
    function(){
      $('.image-portfolio-first').addClass('image-leave');
      $('.image-portfolio-first').removeClass('image-hover');
     });
});
//sec-image
$(function(){
    $('.image-portfolio-sec').hover(function(){
      $('.image-portfolio-sec').addClass('image-hover');
      $('.image-portfolio-sec').removeClass('image-leave');
     },
    function(){
      $('.image-portfolio-sec').addClass('image-leave');
      $('.image-portfolio-sec').removeClass('image-hover');
     });
});

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
        document.getElementById("header").style.top = "-10%";
   } 
   else {
        document.getElementById("header").style.top = "0";
        
   }
   lastScrollTop = st;
}, false);


$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0 ) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
        });
        $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});


$(function(){
    $('.text-grey').hover(function(){
      $('.sign__word').addClass('sign__hover-color');
      $('.sign__word').removeClass('sign__color');
     },
    function(){
      $('.sign__word').addClass('sign__color');
      $('.sign__word').removeClass('sign__hover-color');
     });
});
