const popup = document.querySelector("#addNewList");
const defaultText = document.querySelector(".noTodo");
const blur = document.querySelector(".blur");

const popupBtn = document.querySelector("#add-new-list");
let inputpop1 = document.querySelector("#inputBoxList");
let inputItem = document.querySelector("#inputBoxItem");
let addNewItemPopUp = document.querySelector("#add-new-item-box");

let addNewListBtn = document.querySelector(".add-new-list-btn");
let addNewItemBtn = document.querySelector(".add-new-item-btn");
let header = document.querySelector(".header");

let mainflexcontainer = document.querySelector(".boxes");
let containerSingle = document.querySelector(".container");
let triptoparis = document.querySelector(".triptoparis");
let singlecardcontainer = document.querySelector(".singlecardcontainer");

let listClose = document.getElementById("listClose");

popupBtn.addEventListener("click", () => {
  popup.style.display = "block";
  blur.style.filter = "blur(8px)";
  defaultText.style.display = "none";
});

const closePopUp = document.querySelector(".close");
closePopUp.addEventListener("click", () => {
  popup.style.display = "none";
  blur.style.filter = "none";
});

let array = [];

function addCard(e) {
  const cardName = inputpop1.value;
  const cardObject = {
    id: Date.now(),
    name: cardName
  };
  array.push(cardObject);
  inputpop1.value = "";
}
let selectedCardId;
function createCard() {
  let card = document.createElement("div");
  card.className = "box";

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    card.id = element.id;
    card.innerHTML = `<i class="fas fa-trash-alt icon-style-22 display-none removeIcon"></i> <i class="icon-style-2 display-none fas fa-plus-circle plusbtn" data-card-id = "${card.id}"></i>`;

    mainflexcontainer.appendChild(card);
    const heading = document.createElement("h1");
    heading.style.fontSize = "22px";
    heading.style.color = "brown";
    heading.style.textTransform = "Capitalize";
    heading.style.cursor = "pointer";

    heading.className = "headings subhead";
    heading.id = element.id;
    let createhr = document.createElement("hr");
    createhr.style.width = "180px";

    let cardsHeading = document.createTextNode(element.name);
    heading.appendChild(cardsHeading);
    card.appendChild(heading);
    card.appendChild(createhr);

    const headingOpen = document.querySelectorAll(".headings");
    headingOpen.forEach((e) => {
      e.addEventListener("click", (e) => {
        let selfDiv = e.target.parentNode;
        let currentDiv = e.target;

        triptoparis.innerText = currentDiv.innerText;
        let singleCard = document.createElement("div");
        singleCard.className = "single-card";
        singleCard.className = "single-style";
        singleCard.appendChild(selfDiv);
        arraySingle.unshift(singleCard);

        singlecardcontainer.appendChild(arraySingle[0]);
        mainflexcontainer.style.display = "none";
        header.style.display = "none";
        containerSingle.style.display = "block";
      });
    });
  }
  const removeitem = document.querySelectorAll(".removeIcon");
  removeitem.forEach((e) => {
    e.addEventListener("click", (e) => {
      let selfDiv = e.target.parentNode;
      selfDiv.remove();
    });
  });
  const plusBtnInCard = document.querySelectorAll(".plusbtn");
  plusBtnInCard.forEach((e) => {
    e.addEventListener("click", (e) => {
      addNewItemPopUp.style.display = "block";
      blur.style.filter = "blur(8px)";
      selectedCardId = e.target.dataset.cardId;
    });
  });
}
let arraySingle = [];
function backToMainList(e) {
  mainflexcontainer.style.display = "flex";
  arraySingle[0].classList.remove("single-style");
  mainflexcontainer.appendChild(arraySingle[0]);
  arraySingle = [];
  header.style.display = "flex";
  containerSingle.style.display = "none";
}
function addingDataIntoCard(temp) {
  const data = inputItem.value;
  const dataincard = document.createElement("p");
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.id == selectedCardId) {
      console.log(data);
      dataincard.innerHTML = data;
      document.getElementById(`${element.id}`).appendChild(dataincard);
    }
    inputItem.value = "";
  }

  dataincard.classList.add("tasklistitem");
  const checkBox = document.querySelectorAll(".tasklistitem");
  checkBox.forEach((e) => {
    e.addEventListener("click", (e) => {
      let selfDiv = e.target;
      selfDiv.style.textDecoration = "line-through";
      selfDiv.style.color = "red";
    });
    e.addEventListener("dblclick", (e) => {
      let selfDiv = e.target;
      selfDiv.style.display = "none";
    });
  });
  blur.style.filter = "none";
  addNewItemPopUp.style.display = "none";
  mainflexcontainer.style.filter = "none";
  selectedCardId = null;
}
addNewListBtn.addEventListener("click", () => {
  addCard();
  popup.style.display = "none";
  blur.style.filter = "blur(0px)";
  createCard();
  inputItem.setAttribute("placeholder", "Enter an Item Name");
});
listClose.addEventListener("click", () => {
  document.querySelector("#add-new-item-box").style.display = "none";
  blur.style.filter = "none";
});
