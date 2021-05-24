
//움직임 효과
$(document).mousemove(function(e){
    gsap.to(".cursor",{duration:0.4, left:e.pageX -5,top:e.pageY-5});
});

//오버효과
$(".contents em").hover(function(){
    $(".cursor").addClass("active");
},function(){
    $(".cursor").removeClass("active");
});

//출력용
$(".info.bottom li").click(function(){
    const text = $(this).text(); //클릭한게 몇번째인지 가져오기 때문에 this 사용
    
    $(".info.bottom li").removeClass();
    $(this).addClass("active");
    
    $(".cursor").css("mix-blend-mode",text);

});