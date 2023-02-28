

let box1 = document.querySelectorAll(".one > .boxes > .box");
box1.forEach((ele, index) => {
    let counter = document.createElement("p");
    ele.append(counter);
    ele.addEventListener("click", (event) => {
        ele.style.backgroundColor = "silver";
        counter.innerText = index + 1;
        counter.style.color = "black";
        setTimeout(() => {
            counter.innerText = "";
            ele.setAttribute("disabled", "");
            ele.style.backgroundColor = "#444444";
        }, 5000);
    });
});


let container2 = document.querySelector(".two > .boxes");
let box2 = Array.from(document.querySelectorAll(".two > .boxes > .box"));

container2.addEventListener("click", (event) => {
    event.target.innerText = box2.indexOf(event.target) + 1;
    event.target.style.backgroundColor = "silver";
    event.target.style.color = "black";
        setTimeout(() => {
            event.target.innerText = "";
            event.target.style.backgroundColor = "#444444";
        }, 5000);
});

























