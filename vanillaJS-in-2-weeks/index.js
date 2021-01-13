// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hello fro JS!";
title.style.color = 'blue';
document.title = "I own you now";

// function handleResize(){
//     console.log("I have been resized");
// }

// window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color = 'white';
}

title.addEventListener("click", handleClick)