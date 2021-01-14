const title = document.querySelector("#title");

const BASE_COLOR = "white";
const OTHER_COLOR = "blue";

title.innerHTML = "Hello fro JS!";
title.style.color = 'blue';
document.title = "I own you now";

function handleClick(){
    const currentColor = title.style.color;

    if (currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleOffline(){
    console.log('Tralala');
}

window.addEventListener("offline", handleOffline);