let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");

buttons.forEach(ele => ele.addEventListener("click", (event) => {
    
    console.log(event);

    switch(true) {
        case (event.target.innerText === "C") :
             screen.innerText = "";
             break;
        case (event.target.innerText === "=") :
            screen.innerText = eval(screen.innerText);
            console.log(eval(screen.innerText));
            break;
        default:
        screen.innerText += event.target.innerText;
    }
    
}));