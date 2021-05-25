let x = 0,
    y = 0;

$(".move-image").mousemove(function(e){
    gsap.to(".cursor", {duration: 1, left:e.pageX -10, top:e.pageY-10});

    //좌표값을 중앙으로 설정
    // let x = $(".move-image").width() / 2; //컨텐츠 박스의 반지름
    // let y = $(".move-image").position().left; //컨텐츠 박스의 왼쪽 포지션 값

    x = e.clientX - ($(".move-image").width() / 2 + $(".move-image").position().left);
    y = e.clientY - ($(".move-image").height() / 2 + $(".move-image").position().top);

    $(".img").attr({"style":"transform:translate("+ x/20 +"px, "+ y/20 +"px)"});
});

//출력용
$(window).mousemove(function(e){
    $(".clientX").text(e.clientX);
    $(".clientY").text(e.clientY);
    $(".mouseX").text(Math.floor(x)+"px");
    $(".mouseY").text(Math.floor(y)+"px");
});

//좌표 확인
$(".cord").click(function(e){
    e.preventDefault();
    $(".cursor strong").fadeToggle();
});

