let container = document.querySelector(".box-container");

function boxCreator(numberOfBoxes) {
    for(let i = 0; i < numberOfBoxes; i++) {
        let li = document.createElement("li");
        container.append(li);
    }
};

boxCreator(500);

function generateRandomColor() {
    const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = "#";
    for(let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color += hexCodes[randomNumber];
    }
    return color;
};

function generateRandomNumber() {
    let number = Math.floor(Math.random() * 500);
    return number;
} 

function handleEvent() {
    document.querySelectorAll("li").forEach(box => {
        let randomColor =  generateRandomColor();
        box.style.backgroundColor = randomColor;
        box.innerText = generateRandomNumber();
    })
}

let discoGrid = document.querySelector("ul");
discoGrid.addEventListener("mousemove", handleEvent);