// const word = document.querySelector(".word");

// const shadow = e => {
//     const {x, y} = e //e의 x , y 값
//     const rect = word.getBoundingClientRect();
//     const mouseX = (x - rect.left - rect.width/2) / rect.width * 5;
//     const mouseY = (y - rect.top - rect.height/2) / rect.height * 5;

//     word.style.textShadow= `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 0, 0.4),
//                             ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4),
//                             ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4),
//                             ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;

//     document.querySelector(".mouseX").textContent=Math.round(mouseX);
//     document.querySelector(".mouseY").textContent=Math.round(mouseY);
//     document.querySelector(".mouseX2").textContent=Math.round(-mouseX);
//     document.querySelector(".mouseY2").textContent=Math.round(-mouseY);

// };

// document.addEventListener("mousemove", shadow);

// -> 다중선택

window.addEventListener("mousemove", function(e){
    document.querySelectorAll(".word").forEach(elem  => {
        const {x,y} = e;
        const rect = elem.getBoundingClientRect();

        const mouseX = (x - rect.left - rect.width/2) / rect.width * 2;
        const mouseY = (y - rect.top - rect.height/2) / rect.height * 2;

        elem.style.textShadow= `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 0, 0.4),
                                ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4),
                                ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4),
                                ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;

        document.querySelector(".mouseX").textContent=Math.round(mouseX);
        document.querySelector(".mouseY").textContent=Math.round(mouseY);
        document.querySelector(".mouseX2").textContent=Math.round(-mouseX);
        document.querySelector(".mouseY2").textContent=Math.round(-mouseY);
    });
});

document.addEventListener("mousemove", shadow);
