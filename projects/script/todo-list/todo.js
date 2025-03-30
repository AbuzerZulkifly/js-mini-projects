let taskInput = document.querySelector(".task-input");
let taskContainer = document.querySelector(".tasks");
let btnAdd = document.querySelector(".btnadd");
let btnClear = document.querySelector(".btnclear")
let errorMsg = document.querySelector('.error-msg');


function addtask() {
  if (taskInput.value === '') {
    errorMsg.innerHTML = "You must enter a task"
    setTimeout(function() {
      errorMsg.innerHTML = "";
  }, 2000);
  }
  else {
    btnClear.style.display = 'block'
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
    location.replace(location.href);
    if (taskContainer.innerHTML.length == 1) {
      localStorage.removeItem("listData")
      console.log(taskContainer.innerHTML.length)
    }
    e.target.parentElement.remove();
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
  localStorage.setItem("listData", taskContainer.innerHTML);
}

function showData() {
  taskContainer.innerHTML = localStorage.getItem("listData")


}

showData();

btnClear.addEventListener('click', ()=> {
  localStorage.removeItem("listData");
  document.querySelector(".tasks").innerHTML = ""
  btnClear.style.display = "none"
  location.reload();
})


if (localStorage.getItem("listData") == null || taskContainer.innerHTML.length == 0) {
  btnClear.style.display = "none"
}
else if (localStorage.getItem("listData") != null) {
  btnClear.style.display = "block"
}
console.log(localStorage.length);
