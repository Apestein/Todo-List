import { compareAsc, format } from 'date-fns'

let projects = [
    {name: 'defaultProject', toDo: []}
]
let currentProject = projects[0]

const homeBtn = document.querySelector('#home')
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
    projectName.textContent = 'Home'
    currentProject = projects[0]
    displayAllTasks()
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
    createProject(newProject)
    displayProjects()
    popupProject.style.display = 'none'
}

function createProject(name) {
    projects.push({name, toDo: []})
}

function addTodo(task, due) {
    currentProject.toDo.push({task, due, isDone: false})
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
            } 
            else {
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
            currentProject.toDo.splice(delBtn.getAttribute('data'), 1)
            div.remove()
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
        if (i == 0) continue;
        const div = document.createElement('div')
        const button = document.createElement('button')
        const delBtn = document.createElement('button')
        delBtn.setAttribute('data', i)
        delBtn.textContent = 'Delete'
        delBtn.onclick = () => {
            projects.splice(delBtn.getAttribute('data'), 1)
            div.remove()
        }
        delBtn.setAttribute('id', 'delete-project')
        button.textContent = projects[i].name
        button.onclick = () => {
            currentProject = projects[i]
            projectName.textContent = currentProject.name
            todoList.innerHTML = ''
            displayTasks()
        }
        div.appendChild(button)
        div.appendChild(delBtn)
        projectList.appendChild(div)
    }
}

function displayAllTasks() {
    todoList.innerHTML = ''
    for (let project of projects) projects[0].toDo.push(...project.toDo);
    if (projects[0].toDo.length) displayTasks()
    console.log(projects[0].toDo)
}
