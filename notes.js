//console.log("arju");
showNotes();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if (notes===null)
    {
    notesObj=[];
    }
    else
    {
    notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="";
   // console.log(notesObj);
    showNotes();
})


// function to show elements from local storage
function showNotes()
{
    let notes=localStorage.getItem("notes");  
    if (notes===null)
    {
    notesObj=[];
    }
    else
    {
    notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        if (element!="")
        {
    html += `<div class="notecard card mx-2 my-2" style="width: 21.5rem;">
           <div class="card-body">
            <h5 class="card-title">Note</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
            </div>`;
        }
 })
 let notesEle=document.getElementById("notes");
 if (notesObj.length!=0)
 {
 notesEle.innerHTML=html;
 }
 else{
    notesEle.innerHTML="<h4>Nothing to show, add a note</h4>";
    
 }
}

// function to delete a note

function deleteNote(index)
{
//console.log("deleting",index);
let notes=localStorage.getItem("notes");
if (notes===null)
{
notesObj=[];
}
else
{
notesObj=JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));
showNotes();
}

searchtxt=document.getElementById("searchtxt");
searchtxt.addEventListener("input",function(){
    let inputval=searchtxt.value;
  //  console.log("input",searchtxt.value);
    let notecards=document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
       // console.log(cardtxt);
        if (cardtxt.includes(inputval))
        {
        element.style.display="block";
        }
        else
        {
        element.style.display="none";
        }
    })
})