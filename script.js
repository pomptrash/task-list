const newTaskInput = document.querySelector('.new-task-input')
const newTaskButton = document.querySelector('.new-task-button')
const taskContainer = document.querySelector('.task-container')
const amount = document.querySelector('.amount')
const amountCompleted = document.querySelector('.amount-completed')
const yearSpan = document.querySelector('#year-span')

const yearDate = new Date().getFullYear()
yearSpan.innerText = yearDate

function tasksAmountCounting (){
    amount.innerText = taskContainer.getElementsByClassName('task-item').length
}

function inputTaskValidate(){
    return newTaskInput.value.trim().length > 0
}

function tasksCompletedCounting(){
    amountCompleted.innerText = taskContainer.getElementsByClassName('completed').length
}

function addTaskButtonClick(){

    if (!inputTaskValidate()){
        return newTaskInput.classList.add('error')
    }

    const newTaskContainer = document.createElement('div')
    newTaskContainer.classList.add('task-item')
    const newTaskItem = document.createElement('h3')
    newTaskContainer.addEventListener('click', function(){
        newTaskContainer.classList.toggle('completed')
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
    newTaskInput.classList.remove('error')

    
}

newTaskButton.addEventListener('click', addTaskButtonClick)

newTaskInput.addEventListener('keypress', function(ev){
    if (ev.key === 'Enter'){
        addTaskButtonClick()
    }
})
