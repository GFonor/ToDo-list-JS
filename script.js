let clearBtn = document.getElementById('heading__clear-btn');
let enterBtn = document.getElementById('enter-btn');
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('list');

function deleteChilds() {
    let child = taskList.lastElementChild;
    while (child) {
        taskList.removeChild(child);
        child = taskList.lastElementChild;
    }
}

function addTask() {
    if (taskInput.value != '') {
        let listItem = `
        <li class="task-list__item">
            <p>${taskInput.value}</p>
            <div class="list-item__buttons">
                <button class="task-btn" data-action="done"><img src="images/tick.png" alt="tick image"></button>
                <button class="task-btn" data-action="delete"><img src="images/cross.png" alt="cross image"></button>
            </div>
        </li>
        `
        taskList.insertAdjacentHTML("beforeend", listItem);
        taskInput.value = '' ;
        taskInput.placeholder = '';
    } else {
        taskInput.placeholder = 'Please, write your task';
    }
}

clearBtn.onclick = () => {
    clearBtn.blur();
    deleteChilds();
}

enterBtn.onclick = (e) => {
    e.preventDefault();
    enterBtn.blur();
    addTask();
}

taskList.addEventListener('click', (e) => {
    let target = e.target;
    let taskText = e.target.parentNode.parentNode.firstElementChild;
    console.log(taskText)
    if (target.dataset.action === 'done') {
        taskText.classList.contains('task-done-style') ? taskText.classList.remove('task-done-style') : taskText.classList.add('task-done-style');
    } else if (e.target.dataset.action === 'delete') {
        target.parentNode.parentNode.remove()
    }
})

