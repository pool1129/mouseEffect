let x = 0,
    y = 0,
    mouseX = 0,
    mouseY = 0,
    angleX = 0,
    angleY = 0,
    fmouseX = 0,
    fmouseY = 0;

document.addEventListener("mousemove", (e) => {
    x = e.pageX;
    y = e.pageY;

    // transform: translate(-50%, -50%) perspective(600px) rotateX(0deg) rotateY(0deg);

    mouseX = Math.max(-50, Math.min(50, window.innerWidth/2 -x));
    mouseY = Math.max(-50, Math.min(50, window.innerHeight/2 -y));

    angleX = (mouseX*12) / 100;
    angleY = (mouseY*12) / 100;

    fmouseX += (angleX - fmouseX) * 1/10
    fmouseY += (angleY - fmouseY) * 1/10     //대행연산자로 값을 누적시켜 연속성으로 만들어줌

    //커서
    gsap.to(".cursor", {duration: 0.4, left:x, top:y});

    //움직임
    let move = document.querySelector(".move-image");
    move.style.transform = "translate(-50%, -50%) perspective(600px) rotateX("+ fmouseY +"deg) rotateY("+ -fmouseX +"deg)";

});


//출력용
document.addEventListener("mousemove", () => {
    document.querySelector(".pageX").textContent = x;
    document.querySelector(".pageY").textContent = y;
    document.querySelector(".mouseX").textContent = mouseX;
    document.querySelector(".mouseY").textContent = mouseY;
    document.querySelector(".angleX").textContent = angleX;
    document.querySelector(".angleY").textContent = angleY;
    document.querySelector(".fmouseX").textContent = Math.round(fmouseX);
    document.querySelector(".fmouseY").textContent = Math.round(fmouseY);
});
