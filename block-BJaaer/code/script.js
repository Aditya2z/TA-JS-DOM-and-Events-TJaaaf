let body = document.querySelector("body");
let form = document.querySelector(".container");
let userInfo = {};


function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.movies = form.elements.movies.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.rating.value;
    userInfo.genre = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    if(userInfo.terms === true) {
        userInfo.termsStatement = "You agree to terms and conditions.";
    } else {
        userInfo.termsStatement = "You don't agree to terms and conditions.";
    }

    form.style.display = "none";
    
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerText = `Hello ${userInfo.name}
    Email: ${userInfo.email}
    You Love: ${userInfo.movies}
    Color: ${userInfo.color}
    Rating: ${userInfo.color}
    Book Genre: ${userInfo.genre}
    👉${userInfo.termsStatement}`

    let close = document.createElement("button");
    close.style.display = "block";
    close.innerText = "close";
    modal.append(close);

    close.addEventListener("click", () => {
        modal.style.display = "none";
        form.style.display = "block";
    });

    body.append(modal);

};

form.addEventListener("submit", handleSubmit);

