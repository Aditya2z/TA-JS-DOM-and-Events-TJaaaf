
let rootButton = document.querySelector(".root-btn");
let rootPeople = document.querySelector(".root-people");

let searchBar = document.querySelector(".search");

function handleSearch(event) {
        let clonedGOT = JSON.parse(JSON.stringify(got));

            clonedGOT.houses.forEach(house => {
                house.people = house.people.filter(  person =>  person.name.toLowerCase()
                                                                .includes(event.target.value.toLowerCase())  
                                                    );
            });
            createCardUI(clonedGOT, rootPeople);
}

searchBar.addEventListener("keyup", handleSearch);

function handleAll(event) {
    createCardUI(got, rootPeople);

    let allSelectBtn = document.querySelectorAll(".selected");
    allSelectBtn.forEach(btn => btn.classList.remove("selected"));
    event.target.classList.add("selected");
}

function handleFilter(event) {
    let obj = {};
    let houseName = event.target.dataset.housename;
    obj.houses = got.houses.filter(ele => ele.name === houseName);

    createCardUI(obj, rootPeople);

    let allSelectBtn = document.querySelectorAll(".selected");
    allSelectBtn.forEach(btn => btn.classList.remove("selected"));
    event.target.classList.add("selected");

}

function createButtonUI() {
    rootButton.innerHTML = "";

    let allButton = document.createElement("button");
    allButton.innerText = "ALL";
    allButton.classList.add("btn");

    allButton.addEventListener("click", handleAll);

    got.houses.forEach((house, index) => {

        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.setAttribute("data-housename", `${house.name}`);
        btn.innerText = house.name;

        rootButton.append(btn);
        rootButton.prepend(allButton);

        btn.addEventListener("click", handleFilter);
    })
}


function createCardUI(data, rootElm) {
    rootElm.innerHTML = "";
    
    data.houses.forEach((house, index) => {

        
        house.people.forEach(person => {
            let card = document.createElement("li");
            card.classList.add("flex-32", "person", `${house.name}`);

            let img = document.createElement("img");
            img.src = person.image;

            let name = document.createElement("h2");
            name.innerText = person.name;

            let description = document.createElement("p");
            description.innerText = person.description;
            
            let knowMoreBtn = document.createElement("button");
            let a = document.createElement("a");
            a.innerText = "Know more!";
            a.href = person.wikiLink;
            a.setAttribute("target", "_blank");
            knowMoreBtn.append(a);
            
            knowMoreBtn.classList.add("btn");

            card.append(img, name, description, knowMoreBtn);
            rootElm.append(card);

        })


    });
};

createCardUI(got, rootPeople);
createButtonUI();




