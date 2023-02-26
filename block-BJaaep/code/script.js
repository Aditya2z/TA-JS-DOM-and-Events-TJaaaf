

let box1 = document.querySelectorAll(".one > .boxes > .box");
box1.forEach((ele, index) => {
    let counter = document.createElement("p");
    ele.append(counter);
    ele.addEventListener("click", () => {
        counter.innerText = index + 1;
        setTimeout(() => {
            counter.innerText = "";
        }, 5000);
    });
});


let container2 = document.querySelector(".two > .boxes");
let box2 = Array.from(document.querySelectorAll(".two > .boxes > .box"));

container2.addEventListener("click", (event) => {
    event.target.innerText = box2.indexOf(event.target) + 1;
        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
});



























