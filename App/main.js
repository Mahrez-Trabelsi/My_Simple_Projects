// DOM Elements
const textareaInput = document.querySelector("textarea");
let sub = document.getElementById("sub");
let cls = document.querySelector(".clear");
// array of notes
let notes = JSON.parse(localStorage.getItem("Notes")) || [];

// Add Note Function
const addNote = (content) => {
    notes.push({
        content:content
    });

    // add new added notes to localStorage
    localStorage.setItem("Notes",JSON.stringify(notes));
    return {content};
}

// Create note
const createNote = (note) => {

    //remove Default Note 
    document.querySelector(".added-notes").style.display = "none";

    //Create The New Note
    let addNote = document.createElement("div");
    addNote.className = "added-notes-M";
    
    // Create HTML Elements
    let myP = document.createElement("div");
    myP.innerText = note.content;
    myP.className = "edit";
    
    //Close Button
    let closebtn = document.createElement("button");
    closebtn.className = "closebtn";
    closebtn.innerText = "X";
    closebtn.style.cssText = "color:red ;border-radius: 15px;font-size:1em; box-shadow: 3px 3px 6px -3px black; font-weight:bold;";

    //Edit Button
    let editbtn = document.createElement("button");
    editbtn.className = "editbtn";
    editbtn.style.cssText = "color:red ;border-radius: 15px;font-size:1em; box-shadow: 3px 3px 6px -3px black; font-weight:bold;";
    editbtn.innerText = "edit";

    // Save Button
    let savebtn = document.createElement("button");
    savebtn.className = "savebtn";
    savebtn.style.cssText = "color:red ;border-radius: 15px;font-size:1em; box-shadow: 3px 3px 6px -3px black; font-weight:bold;";
    savebtn.innerText = "save";


    //Append To Parent Element
    addNote.append(closebtn,editbtn,myP,savebtn);
    
    //Add Note To Body
    document.body.append(addNote);
}

// Create DOM forEach Note
notes.forEach(createNote);



// Submit Funtion
sub.onclick = (e) => {
    e.preventDefault();
    if(textareaInput.value === "") 
        confirm("Note Is Empty!");
    else{
        createNote(addNote( textareaInput.value));
        textareaInput.value = "";
    }
}

var edit = "" ;
// Delete Function 
document.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.className === "closebtn"){
        notes = notes.filter(function(el){
            return el["content"] === e.target.parentElement.children[2].textContent ? "" : el ;
        })
        e.target.parentElement.remove();
    }
    else if (e.target.className === "editbtn"){
        e.target.nextElementSibling.setAttribute('contenteditable','true');
        e.target.nextElementSibling.focus();
        edit = e.target.parentElement.children[2].textContent;
    }
    
    else if (e.target.className === "savebtn" && e.target.previousElementSibling.hasAttribute("contenteditable")){
        
        notes = notes.filter(function(ele){
            return  ele["content"] === edit ? ele["content"] = e.target.previousElementSibling.textContent : ele ;  
        });
        e.target.previousElementSibling.removeAttribute('contenteditable');
    }
    // add new notes to localStorage
    localStorage.setItem("Notes",JSON.stringify(notes));
    
})

// Scroll Visiblity
let scrollbtn = document.querySelector(".Up");
window.onscroll = function () {
    if (window.scrollY >= 480){
        scrollbtn.style.display = "block";
    }
    else{
        scrollbtn.style.display = "none";
    }   
}
// Scroll Up
scrollbtn.onclick = function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",});
}

// Clear Function
cls.onclick = function (e) {
    e.preventDefault();
    notes = null;
    window.location.reload();
}
