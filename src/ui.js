import {projects, currentProject, setCurrentProject, createProject, addTodo, populateStorage} from './index'
import {isSameDay, isSameWeek} from 'date-fns'

const homeBtn = document.querySelector('#home')
const todayBtn = document.querySelector('#today')
const thisWeekBtn = document.querySelector('#this-week')
const addTask = document.querySelector('#add-task')
const addProject = document.querySelector('#add-project')
const cancelProject = document.querySelector('#cancel-project')
const cancelAdd = document.querySelector('#cancel-add')
const submitBtn = document.querySelector('#submit-add')
const submitProjectBtn = document.querySelector('#submit-project')
const projectList = document.querySelector('.project-list')
const todoList = document.querySelector('.todo-list')
const popupTask = document.querySelector('.popup-task')
const popupProject = document.querySelector('.popup-project')
const projectName = document.querySelector('#project-name')

homeBtn.onclick = () => {
    addTask.disabled = false
    projectName.textContent = 'Home'
    setCurrentProject(projects[0])
    todoList.innerHTML = ''
    displayTasks()
}

todayBtn.onclick = () => {
    addTask.disabled = true
    projectName.textContent = 'Today'
    setCurrentProject(projects[1])
    for (let project of projects) {
        if (project.name === currentProject.name) continue;
        for (let todo of project.toDo) {
            if (isSameDay(new Date(`${todo.due}T12:00`), new Date())) {
                if (currentProject.toDo.find(e => e.task === todo.task)) continue;
                currentProject.toDo.push(todo)
            }
        }
    }
    todoList.innerHTML = ''
    displayTasks()
}

thisWeekBtn.onclick = () => {
    addTask.disabled = true
    projectName.textContent = 'This Week'
    setCurrentProject(projects[2])
    for (let project of projects) {
        if (project.name === currentProject.name) continue;
        for (let todo of project.toDo) {
            if (isSameWeek(new Date(`${todo.due}T12:00`), new Date())) {
                if (currentProject.toDo.find(e => e.task === todo.task)) continue;
                currentProject.toDo.push(todo)
            }
        }
    }
    todoList.innerHTML = ''
    displayTasks()
}

addProject.onclick = () => {
    popupProject.style.display = 'block'
}

addTask.onclick = () => {
    addTask.style.display = 'none'
    popupTask.style.display = 'block'
}

cancelProject.onclick = () => {
    popupProject.style.display = 'none'
}

cancelAdd.onclick = () => {
    addTask.style.display = 'block'
    popupTask.style.display = 'none'
}

submitBtn.onclick = () => {
    const task = document.querySelector('#task').value
    document.querySelector('#task').value = ''
    if (!task) return;
    todoList.innerHTML = ''
    const date = document.querySelector('#date').value
    document.querySelector('#date').value = ''
    addTodo(task, date)
    displayTasks()
    addTask.style.display = 'block'
    popupTask.style.display = 'none'
}

submitProjectBtn.onclick = () => {
    const newProject = document.querySelector('#project').value
    document.querySelector('#project').value = ''
    if(!newProject) return;
    projectList.innerHTML = ''
    if (createProject(newProject)) alert('Project already exist')
    displayProjects()
    popupProject.style.display = 'none'
}


function displayTasks() {
    currentProject.toDo.sort((a, b) => {
        if (a.due > b.due) return 1
        else if (a.due < b.due) return -1
        else return 0
    })
    for (let i = 0; i < currentProject.toDo.length; i++) {
        let e = currentProject.toDo[i]
        const div = document.createElement('div')
        div.classList.add('todo-item')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'is-done')
        checkbox.onclick = () => {
            if (checkbox.checked) {
                div.style = 'text-decoration: line-through'
                e.isDone = true
            } else {
                div.style = 'text-decoration: none'
                e.isDone = false
            } 
        }
        const input = document.createElement('input')
        input.value = e.task
        input.onchange = () => e.task = input.value
        const input2 = document.createElement('input')
        input2.type = 'date'
        input2.value = e.due
        input2.onchange = () => e.due = input2.value
        const delBtn = document.createElement('button')
        delBtn.setAttribute('data', i)
        delBtn.textContent = 'Delete'
        delBtn.onclick = () => {
            for (let project of projects) {
                let index = project.toDo.findIndex(e => e.task === input.value)
                if (index !== -1) project.toDo.splice(index, 1)
            }
            div.remove()
            populateStorage()
        }
        if (e.isDone) div.classList.add('done')
        div.appendChild(checkbox)
        div.appendChild(input) 
        div.appendChild(input2)
        div.appendChild(delBtn)
        todoList.appendChild(div)
    }
}

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        if (i <= 2) continue;
        const div = document.createElement('div')
        const button = document.createElement('button')
        const delBtn = document.createElement('button')
        delBtn.setAttribute('data', i)
        delBtn.textContent = 'Delete'
        delBtn.onclick = () => {
            projects.splice(delBtn.getAttribute('data'), 1)
            div.remove()
            populateStorage()
        }
        delBtn.setAttribute('id', 'delete-project')
        button.textContent = projects[i].name
        button.onclick = () => {
            addTask.disabled = false
            setCurrentProject(projects[i])
            projectName.textContent = currentProject.name
            todoList.innerHTML = ''
            displayTasks()
        }
        div.appendChild(button)
        div.appendChild(delBtn)
        projectList.appendChild(div)
    }
}

export {displayTasks, displayProjects}