const cursor = document.querySelector(".cursor");

//움직임효과
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {duration: .5, left:e.pageX -5, top:e.pageY- 5});
});

//오버효과 
document.querySelectorAll(".contents em").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").classList.remove("active");
    });
});

//출력용
document.querySelectorAll(".info.bottom li").forEach(info => {
    info.addEventListener("click", function(){
        const text = this.textContent || this.innerHTML;
        document.querySelector(".cursor").style.mixBlendMode = text;

        document.querySelectorAll(".info.bottom li").forEach(li => {
            li.classList.remove("active");
            this.classList.add("active");
        });
    });
});