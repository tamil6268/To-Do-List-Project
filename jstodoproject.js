const empty=document.getElementById('tbody');//for hide text

//created the element for popup screen to add task
const newScreen=document.createElement('div');
newScreen.id='poptoadd';
document.body.appendChild(newScreen);

const popUpTab=document.getElementById('popTab');//for add task

const add=document.getElementById('addplus');
add.addEventListener('click',addTask);//by click it will blur the page

// const addItem=document.getElementById('amAddIcon');

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
    newCard();
});
const updateTask=[];

function newCard(){
    const userContent=document.getElementById('placename').value;//getting the text from user
    
    const newobj={
        placeName: userContent,
    }
    updateTask.push(newobj); 
    console.log(updateTask)
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active'); 
    addTaskToScreen();
}
const addTaskToScreen = () => {
    const element = document.createElement("div");
    element.setAttribute("id","child");
    document.body.append(element);
    element.classList.add('active');
    element.innerHTML = `
            <div class="title">${updateTask[updateTask.length-1].placeName}</div><hr>
            <div id="inner">
                <div id="innertext">sleep </div><button id="btnActive">Mark Done</button>
            </div>
            <div class="icon">
                <i id="amDeleteIcon"onclick="deleteTaskInsideItems()"class="fa-solid fa-trash-can"></i>
                <i id="amAddIcon"onclick="addTaskInsideItems()"class="fa-sharp fa-solid fa-circle-plus"></i>
                </div>`;
    }  
////Entering to tasks and items
    

const btnDelete=document.getElementById('amDeleteIcon');
btnDelete.setAttribute("onclick","deleteTaskInsideItems()");

function deleteTaskInsideItems(){
    alert("AM THE DELETE BTN")
}
const popUpTab1=document.getElementById('popTabForItem');
const btnAdd=document.getElementById('amAddIcon');
btnAdd.setAttribute("onclick","addTaskInsideItems()");

function addTaskInsideItems(){
    popTabForItem.classList.add('active');
    newScreen.classList.add('active');
    empty.classList.add('active');
}

const clickAddBtn=document.getElementsByClassName('btn11');
const clickCloseBtn=document.getElementsByClassName('btn12');

clickCloseBtn[0].addEventListener('click',()=>{
    popTabForItem.classList.remove('active');
    newScreen.classList.remove('active'); 
    empty.classList.add('active');
})
clickAddBtn[0].addEventListener('click',()=>{
    popTabForItem.classList.remove('active');
    newScreen.classList.remove('active');
    empty.classList.add('active');
    
    newContent();
});
const updateList=[];

const newContent=()=>{
    const userWork=document.getElementById('work').value;
    const newobj1={
        work:userWork,
    }
    updateList.push(newobj1);
    console.log(updateList)



    const  taskBox=document.getElementById('child');
    const inner=document.createElement('div');
    inner.setAttribute("id","inner");
    taskBox.appendChild(inner);
    inner.classList.add('active');


   taskBox.innerText= `${taskBox}`;
   const markBtn=document.getElementById('btnActive');
    markBtn.classList.add('click');
}



        // function markDone(){
        //     const mark=document.querySelectorAll('.innertext');
        //     mark[0].style.color="brown";
        //     mark[0].style.textDecoration="line-through";
            
        //     const btn=document.querySelector('button');
        //     btn.classList.add('btnActive');
        // };