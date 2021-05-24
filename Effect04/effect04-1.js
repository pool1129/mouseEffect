let x = 0,
    y = 0,
    mouseX = 0,
    mouseY = 0,
    angleX = 0,
    angleY = 0,
    fmouseX = 0,
    fmouseY = 0;

$(window).mousemove(function(e){
    x = e.pageX; //마우스의 x축 좌표값
    y = e.pageY; //마우스의 y축 좌표값

    // mouseX = $(window).width()/2 - x; //마우스 X축 좌표값을 가운데로 설정
    // mouseY = $(window).height()/2 - y; //마우스 Y축 좌표값을 가운데로 설정

    //마우스의 x축과 y축 최소값을 -50 최대값을 50으로 설정
    mouseX = Math.max(-50, Math.min(50, $(window).width()/2 - x));//-50~50까지 제한을 걸어둠
    mouseY = Math.max(-50, Math.min(50, $(window).height()/2 - y));

    angleX = (12*mouseX) / 100;
    angleY = (12*mouseY) / 100;

    fmouseX += (angleX - fmouseX)*1/10;
    fmouseY += (angleY - fmouseY)*1/10;

    //커서
    gsap.to(".cursor" , {duration: 0.3, left : x, top : y});

    //움직임
    $(".move-image").css({"transform" : "translate(-50%, -50%) perspective(600px) rotateX("+ fmouseY +"deg) rotateY("+ fmouseX +"deg)"});
});

//출력용
$(window).mousemove(function(e){
    $(".pageX").text(x);
    $(".pageY").text(y);

    $(".mouseX").text(mouseX);
    $(".mouseY").text(mouseY);

    $(".angleX").text(angleX);
    $(".angleY").text(angleY);

    $(".fmouseX").text(Math.round(fmouseX));
    $(".fmouseY").text(Math.round(fmouseY));
});