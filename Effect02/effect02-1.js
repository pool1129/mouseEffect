const cursor = $(".cursor");
const follower = $(".cursor-follower");

//움직임 효과
$(window).mousemove(function(e){
    // cursor.css({left: e.pageX - 5, top: e.pageY - 5 });
    // follower.css({left: e.pageX - 15, top: e.pageY - 15 });

    gsap.to(cursor,{duration:0.3, left: e.pageX - 5, top: e.pageY - 5});
    gsap.to(follower,{duration:0.8, left: e.pageX - 15, top: e.pageY - 15});
    
});

//출력용
$(window).mousemove(function(e){
    $(".pageX").text(e.pageX);
    $(".pageY").text(e.pageY);
});

//오버 효과
$(".contents em").hover(function(){
    cursor.addClass("active");
    follower.addClass("a ctive");
}, function(){
    cursor.removeClass("active");
    follower.removeClass("active");
});