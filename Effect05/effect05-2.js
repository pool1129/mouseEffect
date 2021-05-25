let x = 0;
let y = 0;

let moveImg = document.querySelector(".move-image");

moveImg.addEventListener("mousemove", (e) => {
    const rect = moveImg.getBoundingClientRect();
    console.log(rect);
    moveImg.style.setProperty("--x", e.clientX - ( (rect.width/2) + rect.left));
    moveImg.style.setProperty("--y", e.clientY - ((rect.height / 2) +rect.top));

    gsap.to(".cursor", {duration:0.2, left:e.pageX-10, top:e.pageY-10});
});

moveImg.addEventListener("mouseleave", () => {
    moveImg.style.setProperty("--x",0);
    moveImg.style.setProperty("--y",0);
});

//출력용
document.addEventListener("mouseover",function(e){
    document.querySelector(".clientX").textContent = e.clientX;
    document.querySelector(".clientY").textContent = e.clientY;
})