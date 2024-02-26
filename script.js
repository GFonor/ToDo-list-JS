let clearBtn = document.getElementById('heading__clear-btn');
let enterBtn = document.getElementById('enter-btn');
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('list');

function deleteChild() {
    let child = taskList.lastElementChild;
    while (child) {
        taskList.removeChild(child);
        child = taskList.lastElementChild;
    }
}

clearBtn.onclick = () => {
    clearBtn.blur();
    deleteChild()
}

enterBtn.onclick = (e) => {
    e.preventDefault();
    enterBtn.blur();
    if (taskInput.value != '') {
        let liLast = document.createElement('li');
        liLast.innerHTML = taskInput.value;
        taskList.append(liLast);
        taskInput.select()
    } else {
        taskInput.placeholder = 'Please, write your task';
        taskInput.placeholder.style.color = 'red'
    }
}

