const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

//움직임 효과
document.addEventListener("mousemove", (e) => {
    // cursor.style.left="e.pageX"
    // cursor.style.top="e.pageY"

    gsap.to(cursor,{duration:0.3, left: e.pageX -5, top: e.pageY -5});
    gsap.to(follower,{duration:0.8, left: e.pageX -15, top: e.pageY -15});

});

//오버효과
document.querySelectorAll(".contents em").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    });
});

//출력용
document.addEventListener("mouseover",(e) => {
    document.querySelector(".pageX").textContent = e.pageX
    document.querySelector(".pageY").textContent = e.pageY

});