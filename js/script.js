// função que add tarefa
function addTask() {
    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
    
    if(taskTitle) {
        //clonar template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true);

        // adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecessárias

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista

         const list = document.querySelector("#task-list");

         list.appendChild(newTask);

         //add evevento de remover 
         const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
         });

         // evento de completar tarefa
         const doneBnt = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
         })

         //limpar texto
         document.querySelector("#task-title").value = "";
    }
}

// função de remover tarefa

function removeTask(task){
    task.parentNode.remove(true);
}

// função de completar tarefa
 function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
 }


// evento de add tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();

})