$(function () {
  /* 패럴렉스 */
 
  const img1 = $(".parallaxBox>ul>li:nth-child(1)>a>img");
  const img2 = $(".parallaxBox>ul>li:nth-child(2)>a>img");
  const img3 = $(".parallaxBox>ul>li:nth-child(3)>a>img");
  const img4 = $(".parallaxBox>ul>li:nth-child(4)>a>img");
  const img5 = $(".parallaxBox>ul>li:nth-child(5)>a>img");
  const img6 = $(".parallaxBox>ul>li:nth-child(6)>a>img");
  const img7 = $(".parallaxBox>ul>li:nth-child(7)>a>img");
  const img8 = $(".parallaxBox>ul>li:nth-child(8)>a>img");
  const tele = $(".parallaxBox > .main_title > img.telescope");
  /*   const text = $(".paraText"); */

  img1.delay(200).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

  img2.delay(400).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

  img3.delay(600).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

  img4.delay(800).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

  img5.delay(1000).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

  img6.delay(1200).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

 

  img7.delay(1300).animate(
    {
      opacity: 1,
      bottom: -70,
    },
    500
  );

  tele.delay(1400).animate(
    {
      opacity: 1,
      top: 105,
      
    },
    600
  );



  img8.delay(1600).animate(
    {
      opacity: 1,
      bottom: 0,
    },
    500
  );

  /* 메뉴 클릭 시 클릭 메뉴 색상 변경*/

  $("#nav>ul>li>a").click(function () {
    $("#nav>ul>li>a").removeClass("on");
    $(this).addClass("on");
  });

 
    /* 메뉴 클릭 시 해당페이지 이동 */
    $('#nav>ul>li.menu_home').click(function(){
      $('html, body').animate({scrollTop:0},500);  
       return false;  
    })
    /* 내얼굴 */
    $('#nav>ul>li.menu_intro').click(function(){
      $('html, body').animate({scrollTop:7850},500);  
       return false;  
    })
    $('#nav>ul>li.menu_about').click(function(){
      $('html, body').animate({scrollTop:8850},500);  
       return false;  
    })
    $('#nav>ul>li.menu_project').click(function(){
      $('html, body').animate({scrollTop:9955},500);  
       return false;  
    })

    $('#nav>ul>li.menu_contact').click(function(){
      $('html, body').animate({scrollTop:10910},500);  
       return false;  
    })

    
 


    /* 이미지에 호버 시, 글씨 컬러풀하게 변경해주는 효과 */

    $('.about_01>.iamPng').mouseover(function(){
      $('.main_slogan').css('color','#524438');
    })
    $('.about_01>.iamPng').mouseout(function(){
      $('.main_slogan').css('color','black');
    })

    

 
  }); 

 
