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
var parent=document.getElementById('parent');
const clickAdd=document.getElementsByClassName('btn1');
const clickClose=document.getElementsByClassName('btn2');
clickClose[0].addEventListener('click',()=>{
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active');
    empty.classList.add('active');
    if(parent.innerText==''){
        empty.classList.remove('active');
    }
})
clickAdd[0].addEventListener('click',()=>{
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active');
    empty.classList.add('active');
    newCard()
});
const updateTask=[];

function newCard(){
    const userContent=document.getElementById('placename').value;//getting the text from user
    if(userContent==''){//while entering with out name in input it will popup
        alert('Enter Your Task Name "BUDDY"');
        popUpTab.classList.add('active');
        newScreen.classList.add('active');
        parent.removeChild(task);
    }
    const newobj={
        id: Date.now(),
        placeName: userContent,
    }
    updateTask.push(newobj); 
    console.log(updateTask)
    popUpTab.classList.remove('active');
    newScreen.classList.remove('active'); 
        addTaskToScreen();
}
const addTaskToScreen = () => {
    
    const task = document.createElement("div");
    task.setAttribute("id","child");
    task.classList.add('active');

    const title=document.createElement('div');
    title.setAttribute("id","title")
    title.innerText=updateTask[updateTask.length-1].placeName;

    const hr=document.createElement('hr');
    const parentHtml=document.getElementById('parent');
    hr.setAttribute("id","hr");
    const p=document.createElement('div');
    p.setAttribute('id',"p");

    const deleteTask=document.createElement('h1');
    deleteTask.setAttribute("id","delete");
    deleteTask.innerText='O';
    const addTask=document.createElement('h1');
    addTask.setAttribute("id","add");
    addTask.innerText='O';

    task.appendChild(title);
    task.appendChild(hr);
    parentHtml.appendChild(task);
    task.appendChild(p);
    let oneThing=document.createElement('div');
    oneThing.setAttribute('id','oneThing');
    task.appendChild(oneThing);
//to delete the particular task
    oneThing.appendChild(deleteTask).addEventListener('click',()=>{
        parentHtml.removeChild(task);
        if(parentHtml.innerText==''){
            empty.classList.remove('active');
        }//if there is no box is present it will work
       });
////Entering to tasks and items       
    const popUpTab1=document.getElementById('popTabForItem');
    oneThing.appendChild(addTask).addEventListener('click',()=>{
            popUpTab1.classList.add('active');
            newScreen.classList.add('active');
            empty.classList.add('active');
       });
    const clickAddBtn=document.getElementsByClassName('btn11');
    const clickCloseBtn=document.getElementsByClassName('btn12');
    clickCloseBtn[0].addEventListener('click',()=>{
        popUpTab1.classList.remove('active');
        newScreen.classList.remove('active'); 
        empty.classList.add('active');
        if(parentHtml.innerText==''){
            empty.classList.remove('active');
        }
       })
    clickAddBtn[0].addEventListener('click',()=>{
        popUpTab1.classList.remove('active');
        newScreen.classList.remove('active');
        empty.classList.add('active');
        newWork();
       });
    //creating inner list:   
    const updateList=[];

    function newWork(){
        const userText=document.getElementById('work').value;//getting the text from user
        if(userText==''){
            alert('Enter Your List Name "BUDDY" ');
            popUpTab1.classList.add('active');
            newScreen.classList.add('active');
        }
        const newobj1={
            id: Date.now(),
            placeVisit: userText,
        }
        console.log(newobj1)
        updateList.push(newobj1);  
        addListToCard();
    }
    const addListToCard=()=>{
        // console.log(updateList)
            if(updateTask.id==updateList.id){
                if(p.innerText==''){
                    p.innerText=updateList[updateList.length-1].placeVisit;
                    p.addEventListener('click',()=>{
                    p.style.color="brown";
                    p.style.textDecoration="line-through";
                })
            }
        }
    }
 } 
    // const newTab=document.createElement('div'); 
    // newTab.setAttribute("id","newTab");
    // console.log(newTab);
    // document.body.append(newTab);
    
