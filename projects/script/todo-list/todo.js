let taskInput = document.querySelector(".task-input");
let taskContainer = document.querySelector(".tasks");
let btnAdd = document.querySelector(".btnadd");
let btnClear = document.querySelector(".btnclear")

if (taskContainer.innerHTML !== "" && window.localStorage.length != 1) {
  btnClear.style.display = "none"
}
else if(window.localStorage.length == 1) {
  btnClear.style.display = "block"
}
console.log(window.localStorage.length);


function addtask() {
  if (taskInput.value === '') {
    document.querySelector('.error-msg').style.display = "block"
  }
  else {
    btnClear.style.display = 'block'
    document.querySelector('.error-msg').style.display = "none"
    let newTask = document.createElement("div");
    newTask.className = "sub-task-container"
    let inputValue = taskInput.value
    newTask.innerHTML = ` <li class="">${inputValue}</li>
                          <span class="material-symbols-outlined btndelete">delete</span>
                          `
     taskContainer.appendChild(newTask)
     saveData()
  }
  taskInput.value = ""
  console.log(window.localStorage.length);
  
}

taskContainer.addEventListener('click', (e)=> {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
    
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    if (taskContainer.innerHTML == "") {
      btnClear.style.display = "none"
    }
    saveData()
   
    
  }
})


btnAdd.addEventListener('click', ()=> {
  addtask();
})

taskInput.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') {
    addtask();
  }
})

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
  taskContainer.innerHTML = localStorage.getItem("data")


}

showData();

btnClear.addEventListener('click', ()=> {
  localStorage.clear();
  document.querySelector(".tasks").innerHTML = ""
  btnClear.style.display = "none"
})
