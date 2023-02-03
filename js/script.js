
// addTask Function
function addTask() {
    const taskTitle = document.querySelector(".newtask" ).value;
    if (taskTitle) {
        // clonar template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        // mudar title
        newTask.querySelector(".item-title").textContent = taskTitle;

        // removendo classes que não vão ser mais utilizadas
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionando tarefa na lista
        const tasklist = document.querySelector(".tasklist");
        tasklist.appendChild(newTask);

        // adicionando evento de remover
        const removeButton = newTask.querySelector('#remove-btn').addEventListener("click", function() {
            removeTask(this);
        })

        // evento concluir
        const completeTask = newTask.querySelector("#check-btn").addEventListener("click", function() {
            checkTask(this);
        })

        // limpando input 
        document.querySelector(".newtask").value = "";

        
    }
};

// removeTask function
function removeTask(task) {
    task.parentNode.remove(true);
};

// checkTask function
function checkTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("checked")
};

// Evento add
const addBtn = document.querySelector("#add-btn").addEventListener("click", function(e) {
    e.preventDefault();
    addTask();
});