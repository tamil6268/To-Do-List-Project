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
console.log(updateTask);
function newCard(){
    const userContent=document.getElementById('placename').value;//getting the text from user
    const newobj={
        placeName: userContent,
    }
    updateTask.push(newobj); 
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active'); 
    const parent = document.createElement("div");//child element
    parent.setAttribute("id","child");
    //console.log(parent);
    const title=document.createElement('div');//title
    title.setAttribute("class","title");
    //console.log(title);
    const line=document.createElement('hr');
    const inner=document.createElement('div');//for work show and markbutton
    inner.setAttribute("id","inner");
    // console.log(inner);
    const innerText=document.createElement('div');
    innerText.setAttribute("id","innertext");
    // console.log(innerText);
    const btnMarkDone=document.createElement('button');
    btnMarkDone.setAttribute("class","btnActive");
    btnMarkDone.innerText="Mark Done";
    // console.log(btnMarkDone);
    const icon=document.createElement('div');//for icons delete and add plus icon
    icon.setAttribute("class","icon");
    // console.log(icon);
    const btnDelete=document.createElement('i');  
    btnDelete.setAttribute("class","fa-solid fa-trash-can");  
    btnDelete.setAttribute("id","amDeleteIcon");  
    btnDelete.setAttribute("onclick","deleteTaskInsideItems()");
    // console.log(btnDelete);
    const btnAdd=document.createElement('i');  
    btnAdd.setAttribute("class","fa-sharp fa-solid fa-circle-plus"); 
    btnAdd.setAttribute("id","amAddIcon");
    btnAdd.setAttribute("onclick","addTaskInsideItems()");
    // console.log(btnAdd); 
//appendingchild's toparent element
    document.body.append(parent);
    parent.appendChild(title);
    parent.appendChild(line);
    parent.appendChild(inner);
    inner.appendChild(innerText);
    inner.appendChild(btnMarkDone);
    parent.appendChild(icon);
    icon.appendChild(btnDelete);
    icon.appendChild(btnAdd);   
    parent.classList.add('active');
    title.innerText=`${updateTask[updateTask.length-1].placeName}`;  
}
////Entering to tasks and items
// const updateList=[];

updateTask.forEach(newContent => {
    const newContent=()=>{
        const userWork=document.getElementById('work').value;
        const newobj1={
            work:userWork,
        }
        updateTask.push(newobj1);
        const inner=document.getElementById('inner');
        const btnMarkDone=document.createElement('button');
        btnMarkDone.setAttribute("id","btnActive");
        const innerText=document.createElement('div');
        innerText.setAttribute("id","innertext");
        inner.appendChild(innerText);
        innerText.classList.add('show');
        innerText.innerHTML=`${updateTask[updateTask.length-1].work} <button id="btnActive">Mark Done</button>`;
        const btnMark=document.getElementById('btnActive');
        btnMark.addEventListener('click',(res)=>{
                innerText.innerText=updateList[updateList.length-1].work;
                innerText.style.color="brown";
                innerText.style.fontWeight="none";
                innerText.style.textDecoration="line-through";
        })
    }
});
const popUpTab1=document.getElementById('popTabForItem');
function deleteTaskInsideItems(){
        alert("Am the delete button")
    }
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