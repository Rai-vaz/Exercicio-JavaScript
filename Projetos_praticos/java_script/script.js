const ul = document.querySelector("#tasks-list");


function addTask() {
    const task = document.querySelector("#tasks-title").value;
    if (task) {
        const template = document.querySelector(".template");
        //clonando todo o códego html existente no template
        const newTask = template.cloneNode(true);
        //trocando o valor do task-tiltle
        newTask.querySelector(".task-title").textContent = task;
        //removendo classe desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        //adicionar tarefa à lista
        ul.appendChild(newTask);  
        //voltando o focus ao input
        document.querySelector("#tasks-title").value = '';
        document.querySelector("#tasks-title").focus();

        //adicionar evento remover
        const btnRemove = newTask.querySelector(".remove-btn");
        btnRemove.addEventListener('click', function () {
            removeTask(this);
        });
    }
}

const btn = document.querySelector("#add-btn-form");
btn.addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});

//função remover tarefa
function removeTask(task) {
    //chegando o botão como parametro
    task.parentNode.remove(true);
};

const done_btn = document.queryCommandValue(".done-btn");
done_btn.addEventListener('click', function () {
    doneTask(this);
});

function doneTask(task) {
    console.log(task)
}

