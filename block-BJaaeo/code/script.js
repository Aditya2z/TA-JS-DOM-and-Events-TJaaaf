let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");

buttons.forEach(ele => ele.addEventListener("click", (event) => {
    

    switch(true) {
        case (event.target.innerText === "C") :
             screen.innerText = "";
             break;
        case (event.target.innerText === "=") :
            screen.innerText = eval(screen.innerText);
            console.log(eval(screen.innerText));
            break;
        case (event.target.classList.value.includes("operation")): 
            screen.innerText += " " + event.target.innerText + " " ;
            break;
        default:
            screen.innerText += event.target.innerText ;
    }
    
}));