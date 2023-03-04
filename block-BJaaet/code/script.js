let form = document.querySelector("form");

let watchlist = document.querySelector(".watchlist");
let input = document.querySelector(".movie");



function handleSubmit(event) {

    event.preventDefault();

    let row = document.createElement('div');

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let movieName = document.createElement("p");
    movieName.innerText = input.value;

    let close = document.createElement("span");
    close.innerText = "❌" ;
    close.style.cursor = "pointer";

    checkbox.addEventListener("click", () => {
        if(checkbox.checked === true) {
             movieName.style.textDecoration = "line-through";
        } else {
            movieName.style.textDecoration = "none";
        }
    });

    close.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });



    row.append(checkbox, movieName, close);
    watchlist.append(row);

    input.value = "";

}

form.addEventListener("submit", handleSubmit);