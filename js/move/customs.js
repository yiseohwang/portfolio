$(function(){

  /* 빛 움직이기 */
 /* 화면에서 마우스 무브시 박스안의 콘텐츠 움직이기 */
 $('body').on('mousemove', function(e){
  var positionX = e.pageX/30; //브라우저의 x축 좌표값
  var positionY = e.pageY/100; //브라우저의 y축 좌표값

  $(".light").css({"left": -270-positionX , "bottom":-100-positionY });
  $(".light").css({"right":-593-positionX  , "top":    -85+positionY });
  $(".light").css({"left":   50+positionX , "bottom":   0+positionY });
 });
});