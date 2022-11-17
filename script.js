const newTaskInput = document.querySelector('.new-task-input')
const newTaskButton = document.querySelector('.new-task-button')
const taskContainer = document.querySelector('.task-container')
const amount = document.querySelector('.amount')
const amountCompleted = document.querySelector('.amount-completed')
const yearSpan = document.querySelector('#year-span')

const yearDate = new Date().getFullYear()
yearSpan.innerText = yearDate

function validateInputTask(){
    return newTaskInput.value.trim().length > 0
}

function verifyTaskInputChange(){
    const IsInputValid = validateInputTask()
    if (IsInputValid){
        const error = document.querySelector('.errorAlert')
        error.style.display = 'none'
        return newTaskInput.classList.remove('error')
    }
}

function tasksAmountCounting (){
    amount.innerText = taskContainer.getElementsByClassName('task-item').length
}

function tasksCompletedCounting(){
    amountCompleted.innerText = taskContainer.getElementsByClassName('completed').length
    console.log(amountCompleted)
}


function addTaskButtonClick(){
    if (!validateInputTask()){
        const error = document.querySelector('.errorAlert')
        error.style.display = 'block'
        return newTaskInput.classList.add('error')
    }

    const newTaskContainer = document.createElement('div')
    newTaskContainer.classList.add('task-item')
    const newTaskItem = document.createElement('h3')
    newTaskItem.addEventListener('click', function(ev){
        ev.target.classList.add('completed')

        const checkIcon = document.createElement('i')
        checkIcon.className = 'bi bi-check'

        const CheckIconCount = newTaskItem.getElementsByClassName('bi bi-check').length
        if (CheckIconCount < 1){
            newTaskItem.appendChild(checkIcon)
        }

        tasksCompletedCounting()
    })

    const deleteTaskIcon = document.createElement('i')
    deleteTaskIcon.className = 'bi bi-trash'
    deleteTaskIcon.addEventListener('click', function(){
        taskContainer.removeChild(newTaskContainer)
        tasksAmountCounting()
        tasksCompletedCounting()
        
    })

    newTaskItem.innerText = newTaskInput.value

    newTaskContainer.append(newTaskItem, deleteTaskIcon)
    taskContainer.appendChild(newTaskContainer)


    newTaskInput.value = ''
    newTaskInput.focus()
    tasksAmountCounting()
    tasksCompletedCounting()
}

newTaskButton.addEventListener('click', addTaskButtonClick)

newTaskInput.addEventListener('keypress', function(ev){
    if (ev.key === 'Enter'){
        addTaskButtonClick()
    }
})

newTaskInput.addEventListener('change', () => verifyTaskInputChange())