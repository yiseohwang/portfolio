  
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }

 

});



 



$('.click-modal.more01 ').click(function(){
  $('.cntr01').css({
    'display':'block',
    'top':'-100%'
  })
});

$('.js-close-modal').click(function(){
  $('.cntr01 ').css('display','none');
});


$('.click-modal.more02 ').click(function(){
  $('.cntr02').css({
    'display':'block',
    'top':'-100%'
  })
});

$('.js-close-modal').click(function(){
  $('.cntr02 ').css('display','none');
});



$('.click-modal.more03 ').click(function(){
  $('.cntr03').css({
    'display':'block',
    'top':'-100%'
  })
});

$('.js-close-modal').click(function(){
  $('.cntr03 ').css('display','none');
});

$('.click-modal.more04 ').click(function(){
  $('.cntr04').css({
    'display':'block',
    'top':'-100%'
  })
});

$('.js-close-modal').click(function(){
  $('.cntr04 ').css('display','none');
});






/* 첫 번째 프로젝트 */
/*  
$('.click-modal.more01 ').click(function(){
  $('.cntr01').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.cntr01 ').removeClass('modal-open');
}); */

/* 두 번째 프로젝트 */
/* $('.click-modal.more02').click(function(){
  $('.cntr02').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.cntr02').removeClass('modal-open');
}); */

/* 세 번째 프로젝트 */
/* $('.click-modal.more03').click(function(){
  $('.cntr03').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.cntr03').removeClass('modal-open');
});
 */



    //모니터 화면을 hover 시 자동으로 스크롤  

    $('.mockupWrap .mockupInner' ).hover(function(){

      var ah = $(this).find('a').innerHeight(); //a요소의 높이+패딩포함한 크기
      var img = $(this).find('img');
      var imgh = $(this).find('img').innerHeight();
  
      img.stop().animate({top:ah-imgh},5000); // 속도에 
  }, function(){
      var img = $(this).find('img');
      img.stop().animate({top:0},5000);
   
   });

 