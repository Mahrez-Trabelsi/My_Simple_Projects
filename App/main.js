let sub = document.getElementById("sub");
sub.addEventListener("click", function (e) {
if(document.querySelector("textarea").value === ""){ 
    confirm("Note Is Empty!");
    e.preventDefault();
}
else{
    // Date&Time Config
    let dateNow = new Date();
    let dateValue = `${dateNow.getMonth()+1}/${dateNow.getDate()}/${dateNow.getFullYear()}`;
    let timeValue = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
    let APM = dateNow.getHours() <= 12 ? "AM" : "PM";

    //remove Default Note 
    document.querySelector(".added-notes").style.display = "none";

    //Create The New Note
    let addNote = document.createElement("div");
    addNote.className = "added-notes-M";
    
    // Create HTML Elements
    let myH4 = document.createElement("h4");
    let myH4Text = document.createTextNode(`${dateValue}, ${timeValue} ${APM}`);
    let myP = document.createElement("div");
    myP.style.cssText = "width: 50%;margin-left: -11px;"
    myP.className = "edit";
    let myPText = document.createTextNode(document.querySelector("textarea").value);
    
    //Close Button
    let closebtn = document.createElement("button");
    closebtn.className = "closebtn";
    closebtn.style.cssText = "color:red ;border-radius: 15px;font-size:1em; box-shadow: 3px 3px 6px -3px black; font-weight:bold;";
    let closebtnText = document.createTextNode("X");

    //Edit Button
    let editbtn = document.createElement("button");
    editbtn.className = "editbtn";
    editbtn.style.cssText = "color:red ;border-radius: 15px;font-size:1em; box-shadow: 3px 3px 6px -3px black; font-weight:bold;";
    let editbtnText = document.createTextNode("edit");

    // Save Button
    let savebtn = document.createElement("button");
    savebtn.className = "savebtn";
    savebtn.style.cssText = "color:red ;border-radius: 15px;font-size:1em; box-shadow: 3px 3px 6px -3px black; font-weight:bold;";
    let savebtnText = document.createTextNode("save");

    // Append Child Elements 
    myH4.appendChild(myH4Text);
    myP.appendChild(myPText);
    closebtn.appendChild(closebtnText);
    editbtn.appendChild(editbtnText);
    savebtn.appendChild(savebtnText);

    //Append To Parent Element
    addNote.appendChild(closebtn);
    addNote.appendChild(myH4);
    addNote.appendChild(editbtn);
    addNote.appendChild(myP);
    addNote.appendChild(savebtn);
    
    //Add Note To Body
    document.body.append(addNote);

    // Restart Textarea Value To Null
    document.querySelector("textarea").value = "";
}});
// Delete Note Button Function
document.addEventListener("click", function (e)  {
    if (e.target.className === "closebtn") {
        e.target.parentElement.remove();
    }});

// Edit & Save Button Function
document.addEventListener("click",function(e){
    if (e.target.className  === "editbtn"){
        e.target.nextElementSibling.setAttribute("contenteditable","true");
        e.target.nextElementSibling.focus();
    }
    if (e.target.className  === "savebtn" && e.target.previousElementSibling.hasAttribute("contenteditable")){
        e.target.previousElementSibling.removeAttribute("contenteditable");
        // Date&Time Config
        let dateNows = new Date();
        let dateValues = `${dateNows.getMonth()+1}/${dateNows.getDate()}/${dateNows.getFullYear()}`;
        let timeValues = `${dateNows.getHours()}:${dateNows.getMinutes()}:${dateNows.getSeconds()}`;
        let APMs = dateNows.getHours() <= 12 ? "AM" : "PM";
        console.log("Save done !");
        e.target.parentElement.children[1].textContent = `${dateValues}, ${timeValues} ${APMs}`;
        }       
});