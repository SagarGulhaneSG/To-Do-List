const inputbox = document.getElementById("inputBox");
const listtask = document.getElementById("list-task");

function addTask(){
    if (inputbox.value === '') {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listtask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData()
}

listtask.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",listtask.innerHTML);
}

function showData(){
    listtask.innerHTML= localStorage.getItem("data");
}
showData();