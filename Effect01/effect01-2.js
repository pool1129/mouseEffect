// 출력용
window.addEventListener("mousemove",function(event){
    document.querySelector(".clientX").innerHTML=event.clientX
    document.querySelector(".clientY").innerHTML=event.clientY
    document.querySelector(".offsetX").innerHTML=event.offsetX
    document.querySelector(".offsetY").innerHTML=event.offsetY
    document.querySelector(".pageX").innerHTML=event.pageX
    document.querySelector(".pageY").innerHTML=event.pageY
    document.querySelector(".screenX").innerHTML=event.pageY
    document.querySelector(".screenY").innerHTML=event.pageY
});

//마우스 움직이기
window.addEventListener("mousemove",function(event){
    // document.querySelector(".cursor").style.left=event.clientX - 25 + "px";
    // document.querySelector(".cursor").style.top=event.clientY -25 + "px";

    let x = event.clientX - 25 + "px"
    let y = event.clientY -25 + "px"
    document.querySelector(".cursor").style.cssText = "left:"+x+"; top:"+y;

    //오버효과
    // document.querySelector(".contents em").addEventListener("mouseenter",function(){});
    // document.querySelector(".contents em").addEventListener("mouseleave",function(){});

    // document.querySelector(".contents em").addEventListener("mouseenter",() => {
    //     document.querySelector(".cursor").classList.add("active");
    // });
    // document.querySelector(".contents em").addEventListener("mouseleave",() => {
    //     document.querySelector(".cursor").classList.remove("active");
    // });

    //다중선택
    // let em=document.querySelectorAll(".contents em");

    // for(var i=0; i<=em.length; i++){
    //     em[i].style.color="red";
    // }

    // document.querySelectorAll(".contents em").forEach(elem => {elem.style.color="red"});

    // 마무리
    document.querySelectorAll(".contents em").forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            document.querySelector(".cursor").classList.add("active");
        });
    });

    document.querySelectorAll(".contents em").forEach(elem => {
        elem.addEventListener("mouseleave", () => {
            document.querySelector(".cursor").classList.remove("active");
        });
    });
});


