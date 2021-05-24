//출력용
$(window).mousemove(function(event){
    $(".clientX").text(event.clientX);
    $(".clientY").text(event.clientY);
    $(".offsetX").text(event.offsetX);
    $(".offsetY").text(event.offsetY);
    $(".pageX").text(event.pageX);
    $(".pageY").text(event.pageY);
    $(".screenX").text(event.screenX);
    $(".screenY").text(event.screenY);
});

//마우스 움직이기
$(window).mousemove(function(event){
    //console.log(event);

    $(".cursor").css({left : event.clientX-25, top : event.clientY-25});
    $(".contents em").mouseover(function(){
        $(".cursor").addClass("active");
    });

    $(".contents em").mouseout(function(){
        $(".cursor").removeClass("active");
    });

    // $(".contents em").hover(function(){
    //     $(".cursor").addClass("active");
    // },function(){
    //     $(".cursor").removeClass("active");
    // });
});