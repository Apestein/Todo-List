let projects = [
    {name: 'defaultProject', toDo: []}
]
let currentProject = projects[0]

const addTask = document.querySelector('#add-task')
const addProject = document.querySelector('#add-project')
const submitBtn = document.querySelector('#submit-add')
const submitProjectBtn = document.querySelector('#submit-project')
const projectList = document.querySelector('.project-list')
const todoList = document.querySelector('.todo-list')
const popupTask = document.querySelector('.popup-task')
const popupProject = document.querySelector('.popup-project')

addProject.onclick = () => {
    popupProject.style.display = 'block'
}

addTask.onclick = () => {
    addTask.style.display = 'none'
    popupTask.style.display = 'block'
}

submitBtn.onclick = () => {
    const task = document.querySelector('#task').value
    const date = document.querySelector('#date').value
    addTodo(task, date)
    addTask.style.display = 'block'
    popupTask.style.display = 'none'
}

submitProjectBtn.onclick = () => {
    const newProject = document.querySelector('#project')
    const projectName = newProject.value
    createProject(projectName)
    displayProjects()
    currentProject = projects[projects.length-1]
    popupProject.style.display = 'none'
}

function createProject(name) {
    projects.push({name, toDo: []})
}

function addTodo(task, due) {
    currentProject.toDo.push({task, due, isDone: false})
    displayTodos()
}

function displayTodos() {
    currentProject.toDo.forEach(e => {
        const div = document.createElement('div')
        div.classList.add('todo-item')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'is-done')
        const input = document.createElement('input')
        input.placeholder = e.task
        const input2 = document.createElement('input')
        input2.type = 'date'
        input2.value = e.due
        if (e.isDone) div.classList.add('done')
        div.appendChild(checkbox)
        div.appendChild(input) 
        div.appendChild(input2)
        todoList.appendChild(div)
    })
}

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        if (i == 0) continue;
        const button = document.createElement('button')
        button.setAttribute('data', i)
        button.textContent = projects[i].name
        projectList.appendChild(button)
        console.log(projects)
    }
}