let clearBtn = document.getElementById('heading__clear-btn');
let enterBtn = document.getElementById('enter-btn');
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('list');
let emptyTaskList = document.getElementById('empty-task-list');

function deleteChilds() {
    let child = taskList.lastElementChild;
    while (child) {
        taskList.removeChild(child);
        child = taskList.lastElementChild;
    }
    checkOnEmpty()
}

function addTask() {
    if (taskInput.value != '') {
        let listItem = `
        <li class="list__item">
            <p>${taskInput.value}</p>
            <div class="list__buttons">
                <button class="list__btn" data-action="done"><img src="images/tick.png" alt="tick image"></button>
                <button class="list__btn" data-action="delete"><img src="images/cross.png" alt="cross image"></button>
            </div>
        </li>
        `
        taskList.insertAdjacentHTML("beforeend", listItem);
        taskInput.value = '' ;
        taskInput.placeholder = '';
    } else {
        taskInput.placeholder = 'Please, write your task';
    }
    checkOnEmpty()
}

function checkOnEmpty() {
    if (taskList.childElementCount > 0) {
        emptyTaskList.classList.add('dp-none');
        console.log(taskList.childElementCount)
    } else {
        emptyTaskList.classList.remove('dp-none');
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
    if (target.dataset.action === 'done') {
        taskText.classList.contains('task-done-style') ? taskText.classList.remove('task-done-style') : taskText.classList.add('task-done-style');
    } else if (e.target.dataset.action === 'delete') {
        target.parentNode.parentNode.remove();
        checkOnEmpty();
    }
})

