const empty=document.getElementById('tbody');//for hide text
//created the element for popup screen to add task
const newScreen=document.createElement('div');
newScreen.id='poptoadd';
document.body.appendChild(newScreen);

const popUpTab=document.getElementById('popTab');//for add task
const add=document.getElementById('addplus');
add.addEventListener('click',addTask);//by click it will blur the page
function addTask(){
    newScreen.classList.add('active');
    //    empty.classList.add('active');//to hide the no items here front page
    popUpTab.classList.add('active');
}
const clickAdd=document.getElementsByClassName('btn1');
const clickClose=document.getElementsByClassName('btn2');
clickClose[0].addEventListener('click',()=>{
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active');
    empty.classList.add('active');//i want to use if condition here
})
clickAdd[0].addEventListener('click',()=>{
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active');
    empty.classList.add('active');
});
let container = document.getElementById("container");

class todoList{
    constructor(place, title = "to-do list"){
        this.place = place;
        this.title = title;
        this.updateTask = [];
        this.addingTask();
    }
    addToDo(){
        let text = this.input.value;
        this.updateTask.push(new Card(text, this.div, this));//pushing the data for other cards
    }
    addingTask(){
        this.createToDoListElement();
        this.place.append(this.parent);
    }
    createToDoListElement(){
        //Creating elements without html
        this.child = document.createElement('h4');
        this.child.innerHTML = `${this.title}<hr class="hr">`;

        this.input = document.createElement('input');
		this.input.classList.add('ashi');

        this.addIcon = document.createElement('i');
        this.addIcon.setAttribute("class","fa-sharp fa-solid fa-circle-plus");
        this.addIcon.id = "to-do-list-add-icon";

		this.deleteIcon = document.createElement('i');

		this.deleteIcon.setAttribute("class","fa-solid fa-trash-can");
		
        this.deleteIcon.id = "to-do-list-delete-icon";
        this.div = document.createElement('div');//for body

        this.parent = document.createElement('div');
		this.parent.setAttribute("id","card-design");
		this.parent.classList.add("todoList");
        const inputnew=document.getElementById('box');
        //Append elements to the to-do list element
        this.parent.append(this.child);
        inputnew.append(this.input);
		this.parent.append(this.deleteIcon);
        this.parent.append(this.addIcon);
        this.parent.append(this.div);
		
		this.deleteIcon.addEventListener('click', ()=>{
			alert("Am the a delete button")
			// this.card.remove();
		    // let a = this.todoList.updateTask.indexOf(this);
		    // this.todoList.updateTask.splice(a,1);
		});
		const add=document.getElementById('work');
		this.addIcon.addEventListener('click',()=>{
			this.input.classList.add('ashi');
			popTabForItem.classList.add('active');
			newScreen.classList.add('active');
			empty.classList.add('active');
            add.classList.add('add');
		});
		const pop=document.getElementsByClassName('btn11');
        pop[0].addEventListener('click', ()=>{
			this.input.classList.add('ashika');
            if(this.input.value != ""){
                this.addToDo.call(this);
                this.input.value = "";
            }
        });
    }
}
const popTabForItem=document.getElementById('popTabForItem');
const addItems=document.getElementById('to-do-list-add-icon');

const clickAddBtn=document.getElementsByClassName('btn11');
const clickCloseBtn=document.getElementsByClassName('btn12');

clickCloseBtn[0].addEventListener('click',()=>{
    popTabForItem.classList.remove('active');
    newScreen.classList.remove('active'); 
    empty.classList.add('active');
	// this.input.classList.add('ashi');
})
clickAddBtn[0].addEventListener('click',()=>{
    popTabForItem.classList.remove('active');
    newScreen.classList.remove('active');
    empty.classList.add('active');
});
//creating the inner text to card by getting data from the class constructor 
class Card{
    constructor(text, place, todoList){
        this.place = place;
        this.todoList = todoList;
        this.showDetails = {
            text: text,
            updateList: []
        }
        this.addingItems();
    }
    addingItems(){
        this.card = document.createElement('div');
        this.card.classList.add("card");
		
        this.p = document.createElement('p');
		this.p.innerHTML=this.showDetails.text;
	    this.btn=document.createElement('button');
		this.btn.setAttribute('id','markbtn');
		this.btn.innerText="Mark Done";
		this.btn.addEventListener('click',()=>{
			this.p.style.color="red";
		    this.p.style.textAlign="center";
            this.p.style.textDecoration="line-through";
            let a = this.todoList.updateTask.indexOf(this);
            this.todoList.updateTask.splice(a,1);
			this.btn.classList.add('active');
		});
        this.card.appendChild(this.p);
        this.card.appendChild(this.btn);
        this.place.append(this.card);
    }
}
//Main platform
let addTodoListInput = document.getElementById("addTodoListInput");
let addTodoListButton = document.getElementById("addTodoListButton");

addTodoListButton.addEventListener('click',()=>{
   if ( addTodoListInput.value != ""){
    new todoList(container, addTodoListInput.value);
    addTodoListInput.value = "";
   }
});

