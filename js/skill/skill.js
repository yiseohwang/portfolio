$(function(){

  floatDiv();

  //마우스 휠 이벤트
    function floatDiv(){
    var contents = $('#contents>div');

    //스크롤 이동시 컨텐츠 영역들이 탑으로 이동하도록
    $(window).scroll(function(){
      var sct = $(window).scrollTop();

      contents.each(function(){
        var tg = $(this);
        var i = tg.index();

        //scrollTop()의 위치가 top보다 크거나 같다면 tg를 특정 좌표로 이동
        if(tg.offset().top <= sct){
          switch(i){
            case 0:
              skillsProgressbar();
              break;
          }
        }
      });
    });
  
    //마우스 휠 이벤트
   $("#contents>div").each(function () { 
      $(this).on("mousewheel DOMMouseScroll", function (e) { 
        var delta = 0;
        if (!event) event = window.event; 
            
        if (event.wheelDelta) { 
        
          delta = event.wheelDelta / 120;  
  
        } else if (event.detail) delta = -event.detail / 3;  
        
        
        var moveTop = null;
        
        //마우스휠을 위에서 아래로
        if (delta < 0) {
          if ($(this).next() != undefined) {
            moveTop = $(this).next().offset().top;
          }
          
        //마우스휠을 아래에서 위로
        } else {
          if ($(this).prev() != undefined) {
            moveTop = $(this).prev().offset().top;
          }
        }
        
        
        //화면이동0.5초
        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 500
        });
      });
    }); 
  }; 




  //skills
  function skillsProgressbar(){
    var htmlNum = 100;
    var cssNum = 95;
    var javascriptNum = 70;
    var jqueryNum = 90;
    var photoshopNum = 70;
    var illustratorNum = 70;
    var max = 100;
    var duration = 1500;

    //Progressbar 초기 위치
    $('.bar').css('right','100%');


    //html

    $('#html_bar').stop().animate({
      'right':100-(htmlNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#html_cnt').text(Math.round(htmlNum*progress));
      }
    })

    //css

    $('#css_bar').stop().animate({
      'right':100-(cssNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#css_cnt').text(Math.round(cssNum*progress));
      }
    })

    //javascript
    $('#javascript_bar').stop().animate({
      'right':100-(javascriptNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#javascript_cnt').text(Math.round(javascriptNum*progress));
      }
    })

    //jQuery
     $('#jquery_bar').stop().animate({
      'right':100-(jqueryNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#jquery_cnt').text(Math.round(jqueryNum*progress));
      }
    })

   //photoshop 
   $('#photoshop_bar').stop().animate({
    'right':100-(photoshopNum/max*100)+'%',
  },{
    'duration':duration,
    'easing':'easeInOutQuart',
    'progress': function(animation,progress,msRemaining){
      $('#photoshop_cnt').text(Math.round(photoshopNum*progress));
    }
  })

   //illustrator 
   $('#illustrator_bar').stop().animate({
    'right':100-(illustratorNum/max*100)+'%',
  },{
    'duration':duration,
    'easing':'easeInOutQuart',
    'progress': function(animation,progress,msRemaining){
      $('#illustrator_cnt').text(Math.round(illustratorNum*progress));
    }
  })








  }


});


