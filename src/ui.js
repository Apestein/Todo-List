import {projects, currentProject, setCurrentProject, createProject, addTodo, populateStorage} from './index'
import {isSameDay, isSameWeek} from 'date-fns'

export {displayTasks, displayProjects}

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
    currentProject.toDo = []
    for (let todo of projects[0].toDo) {
        if (isSameDay(new Date(`${todo.due}T12:00`), new Date())) {
            currentProject.toDo.push(todo)
        }
    }
    todoList.innerHTML = ''
    displayTasks()
}

thisWeekBtn.onclick = () => {
    addTask.disabled = true
    projectName.textContent = 'This Week'
    setCurrentProject(projects[2])
    currentProject.toDo = []
    for (let todo of projects[0].toDo) {
        if (isSameWeek(new Date(`${todo.due}T12:00`), new Date())) {
            currentProject.toDo.push(todo)
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
        const input = document.createElement('input')
        input.value = e.task
        input.onchange = () => {
            if (!input.value) input.value = e.task
            let temp = e.task
            for (let project of projects) {
                for (let todo of project.toDo) {
                    if (temp === todo.task) {
                        todo.task = input.value
                    }
                }
            }
            populateStorage()
        } 
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.onclick = () => {
            if (checkbox.checked) {
                input.classList.toggle('done')
                e.isDone = true
            } else {
                input.classList.toggle('done')
                e.isDone = false
            } 
        }
        const input2 = document.createElement('input')
        input2.type = 'date'
        input2.value = e.due
        input2.onchange = () => {
            for (let project of projects) {
                for (let todo of project.toDo) {
                    if (e.task === todo.task) {
                        todo.due = input2.value
                    }
                }
            }
            populateStorage()
        } 
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
        if (e.isDone) {
            input.classList.add('done')
            checkbox.checked = true
        } 
        div.appendChild(checkbox)
        div.appendChild(input) 
        div.appendChild(input2)
        div.appendChild(delBtn)
        todoList.appendChild(div)
    }
    populateStorage()
    console.log(projects)
}

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        if (i <= 2) continue;
        const div = document.createElement('div')
        const button = document.createElement('button')
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'
        delBtn.onclick = () => {
            let index = projects.findIndex(e => e.name === button.textContent)
            setCurrentProject(projects[index])
            for (let curTodo of currentProject.toDo) {
                let index = projects[0].toDo.findIndex(e => e.task === curTodo.task)
                if (index !== -1) projects[0].toDo.splice(index, 1)
            }
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].name === button.textContent) {
                    projects.splice(i, 1)
                } 
            }
            div.remove()
            setCurrentProject(projects[0])
            projectName.textContent = currentProject.name
            todoList.innerHTML = ''
            displayTasks()
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