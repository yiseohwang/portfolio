$(function () {
  var PROPERTIES = ["translateX", "translateY", "opacity", "rotate", "scale"],
    $window = $(window), //브라우저
    $body = $("body"), //본문
    wrappers = [], //전체 블럭을 감싸는 박스
    currentWrapper = null, //현재보여지는 박스
    bodyHeight = 0, //본문높이
    windowHeight = 0, //윈도우 창의 높이
    windoWidth = 0, //윈도우 창의 너비
    prevKeyframesDurations = 0, //동작시간
    scrollTop = 0, //스크롤바 수직위치 반환
    relativeScrollTop = 0,
    currentKeyframe = 0,
    keyframes = [
      // 메인페이지 이미지 올리기
      {
        wrapper: "#main",
        duration: "200%",
        animations: [
          {
            selector: ".paraText",
            translateY: "140%",
            opacity: [1, 0.1],
            scale: 3,
          },
          {
            selector: ".paImg1",
            translateY: "-40%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg2",
            translateY: "-120%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg3",
            translateY: "-100%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg4",
            translateY: "-120%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg5",
            translateY: "-60%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg6",
            translateY: "-30%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg7",
            translateY: "-30%",
            opacity: [1, 0],
            scale: 1,
          },
          {
            selector: ".paImg8",
            translateY: "-20%",
            opacity: [1, 0],
            scale: 1,
          },
          /*    { selector: "#main_01", translateY: "-150%", opacity: [0.1] },  */
        ],
      },
      








      // 서브페이지 글씨 올리기(태그들)
      {
        wrapper: "#main_01",
        duration: "200%",
        animations: [
          {
            selector: ".tagWrap>ul",
            translateY: "0%",
            opacity: [1],
            scale: 1,
          },
        ],
      },
      {
        wrapper: ".tagWrap>ul>li",
        duration: "300%",
        animations: [
          {
            selector: ".list1",
            translateY: "-50%",
            translateX: "-100%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list2",
            translateY: "30%",
            translateX: "120%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list3",
            translateY: "-59%",
            translateX: "-30%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list4",
            translateY: "10%",
            translateX: "68%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list5",
            translateY: "30%",
            translateX: "30%",
            opacity: [1, 0],
            scale: 8,
          },
          {
            selector: ".list5",
            translateY: "80%",
            translateX: "0%",
            opacity: [1, 0],
            scale: 20,
          },
          {
            selector: ".list6",
            translateY: "80%",
            translateX: "-100%",
            opacity: [1, 0],
            scale: 10,
          },
          {
            selector: ".list7",
            translateY: "-80%",
            translateX: "200%",
            opacity: [1, 0],
            scale: 8,
          },
          {
            selector: ".list8",
            translateY: "-300%",
            translateX: "200%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list9",
            translateY: "-100%",
            translateX: "-180%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list10",
            translateY: "-300%",
            translateX: "400%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list11",
            translateY: "-300%",
            translateX: "1000%",
            opacity: [1, 0],
            scale: 3,
          },
          {
            selector: ".list12",
            translateY: "0%",
            translateX: "-300%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list13",
            translateY: "-350%",
            translateX: "100%",
            opacity: [1, 0],
            scale: 10,
          },
          {
            selector: ".list14",
            translateY: "-700%",
            translateX: "80%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list15",
            translateY: "-800%",
            translateX: "200%",
            opacity: [1, 0],
            scale: 30,
          },
      
        ],
      },
      {
        wrapper: "#main_01",
        duration: "200%",
        animations: [
          {
            selector: ".tagWrap>ul",
            translateY: "0%",
            opacity: [1],
            scale: 1,
          },
        ],
      },
      {
        wrapper: ".tagWrap>ul>li",
        duration: "300%",
        animations: [
          {
            selector: ".list1",
            translateY: "-50%",
            translateX: "-100%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list2",
            translateY: "30%",
            translateX: "120%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list3",
            translateY: "-59%",
            translateX: "-30%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list4",
            translateY: "10%",
            translateX: "68%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list5",
            translateY: "30%",
            translateX: "30%",
            opacity: [1, 0],
            scale: 8,
          },
          {
            selector: ".list5",
            translateY: "80%",
            translateX: "0%",
            opacity: [1, 0],
            scale: 20,
          },
          {
            selector: ".list6",
            translateY: "80%",
            translateX: "-100%",
            opacity: [1, 0],
            scale: 10,
          },
          {
            selector: ".list7",
            translateY: "-80%",
            translateX: "200%",
            opacity: [1, 0],
            scale: 8,
          },
          {
            selector: ".list8",
            translateY: "-300%",
            translateX: "800%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list9",
            translateY: "-200%",
            translateX: "-180%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list10",
            translateY: "-300%",
            translateX: "-1000%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list11",
            translateY: "-100%",
            translateX: "-500%",
            opacity: [1, 0],
            scale: 3,
          },
          {
            selector: ".list12",
            translateY: "0%",
            translateX: "-300%",
            opacity: [1, 0],
            scale: 5,
          },
          {
            selector: ".list13",
            translateY: "-350%",
            translateX: "800%",
            opacity: [1, 0],
            scale: 10,
          },
          {
            selector: ".list14",
            translateY: "-900%",
            translateX: "1000%",
            opacity: [1, 0],
            scale: 30,
          },
          {
            selector: ".list15",
            translateY: "-600%",
            translateX: "800%",
            opacity: [1, 0],
            scale: 20,
          },



        ],
      },
 






    
    ];

  /*  라이브러리
      -------------------------------------------------- */
  init = function () {
    scrollIntervalID = setInterval(updatePage, 10);
    setupValues();
    $window.resize(throwError);
    if (isTouchDevice) {
      $window.resize(throwError);
    }
  };

  setupValues = function () {
    scrollTop = $window.scrollTop();
    windowHeight = $window.height();
    windowWidth = $window.width();
    convertAllPropsToPx();
    buildPage();
  };

  buildPage = function () {
    var i, j, k;
    for (i = 0; i < keyframes.length; i++) {
      // loop keyframes
      bodyHeight += keyframes[i].duration;
      if ($.inArray(keyframes[i].wrapper, wrappers) == -1) {
        wrappers.push(keyframes[i].wrapper);
      }
      for (j = 0; j < keyframes[i].animations.length; j++) {
        // loop animations
        Object.keys(keyframes[i].animations[j]).forEach(function (key) {
          // loop properties
          value = keyframes[i].animations[j][key];
          if (key !== "selector" && value instanceof Array === false) {
            var valueSet = [];
            valueSet.push(getDefaultPropertyValue(key), value);
            value = valueSet;
          }
          keyframes[i].animations[j][key] = value;
        });
      }
    }
    $body.height(bodyHeight);
    $window.scroll(0);
    currentWrapper = wrappers[0];
    $(currentWrapper).show();
  };

  convertAllPropsToPx = function () {
    var i, j, k;
    for (i = 0; i < keyframes.length; i++) {
      // loop keyframes
      keyframes[i].duration = convertPercentToPx(keyframes[i].duration, "y");
      for (j = 0; j < keyframes[i].animations.length; j++) {
        // loop animations
        Object.keys(keyframes[i].animations[j]).forEach(function (key) {
          // loop properties
          value = keyframes[i].animations[j][key];
          if (key !== "selector") {
            if (value instanceof Array) {
              // if its an array
              for (k = 0; k < value.length; k++) {
                // if value in array is %
                if (typeof value[k] === "string") {
                  if (key === "translateY") {
                    value[k] = convertPercentToPx(value[k], "y");
                  } else {
                    value[k] = convertPercentToPx(value[k], "x");
                  }
                }
              }
            } else {
              if (typeof value === "string") {
                // if single value is a %
                if (key === "translateY") {
                  value = convertPercentToPx(value, "y");
                } else {
                  value = convertPercentToPx(value, "x");
                }
              }
            }
            keyframes[i].animations[j][key] = value;
          }
        });
      }
    }
  };

  getDefaultPropertyValue = function (property) {
    switch (property) {
      case "translateX":
        return 0;
      case "translateY":
        return 0;
      case "scale":
        return 1;
      case "rotate":
        return 0;
      case "opacity":
        return 1;
      default:
        return null;
    }
  };

  /*  Animation/Scrolling
  -------------------------------------------------- */
  updatePage = function () {
    window.requestAnimationFrame(function () {
      setScrollTops();
      if (scrollTop > 0 && scrollTop <= bodyHeight - windowHeight) {
        animateElements();
        setKeyframe();
      }
    });
  };

  setScrollTops = function () {
    scrollTop = $window.scrollTop();
    relativeScrollTop = scrollTop - prevKeyframesDurations;
  };

  animateElements = function () {
    var animation, translateY, translateX, scale, rotate, opacity;
    for (var i = 0; i < keyframes[currentKeyframe].animations.length; i++) {
      animation = keyframes[currentKeyframe].animations[i];
      translateY = calcPropValue(animation, "translateY");
      translateX = calcPropValue(animation, "translateX");
      scale = calcPropValue(animation, "scale");
      rotate = calcPropValue(animation, "rotate");
      opacity = calcPropValue(animation, "opacity");

      $(animation.selector).css({
        transform:
          "translate3d(" +
          translateX +
          "px, " +
          translateY +
          "px, 0) scale(" +
          scale +
          ") rotate(" +
          rotate +
          "deg)",
        opacity: opacity,
      });
    }
  };

  calcPropValue = function (animation, property) {
    var value = animation[property];
    if (value) {
      value = easeInOutQuad(
        relativeScrollTop,
        value[0],
        value[1] - value[0],
        keyframes[currentKeyframe].duration
      );
    } else {
      value = getDefaultPropertyValue(property);
    }
    // value = +value.toFixed(2)
    // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
    return value;
  };

  easeInOutQuad = function (t, b, c, d) {
    //sinusoadial in and out
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  };

  setKeyframe = function () {
    if (
      scrollTop >
      keyframes[currentKeyframe].duration + prevKeyframesDurations
    ) {
      prevKeyframesDurations += keyframes[currentKeyframe].duration;
      currentKeyframe++;
      showCurrentWrappers();
    } else if (scrollTop < prevKeyframesDurations) {
      currentKeyframe--;
      prevKeyframesDurations -= keyframes[currentKeyframe].duration;
      showCurrentWrappers();
    }
  };

  showCurrentWrappers = function () {
    var i;
    // if (keyframes[currentKeyframe].wrapper != currentWrapper) {
    //   $(currentWrapper).hide();
    //   $(keyframes[currentKeyframe].wrapper).show();
    //   currentWrapper = keyframes[currentKeyframe].wrapper;
    // }
  };

  /*  Helpers
  -------------------------------------------------- */

  convertPercentToPx = function (value, axis) {
    if (typeof value === "string" && value.match(/%/g)) {
      // match() 메서드는 문자열이 정규식과 매치되는 부분을 검색하여 문자열 내의 모든 공백 제거
      if (axis === "y") value = (parseFloat(value) / 100) * windowHeight; //parseFloat() parseFloat()는 문자열을 실수로 바꾸는 함수
      if (axis === "x") value = (parseFloat(value) / 100) * windowWidth;
    }
    return value;
  };

  throwError = function () {
    $body.addClass("page-error");
  };

  isTouchDevice = function () {
    return (
      "ontouchstart" in window || // works on most browsers. 사용자가 P 요소를 터치하면 함수를 호출합니다(터치스크린에만 해당).
      "onmsgesturechange" in window //상호 작용과 관련된 손가락 위치가 화면에서 움직일 때 트리거
    ); // works on ie10
  };

  init();
}).call(this);

//call() 메소드는 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출합니다.
