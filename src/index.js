import {displayTasks, displayProjects} from './ui'

export {projects, currentProject, setCurrentProject, createProject, addTodo, populateStorage}

let projects = [
    {name: 'home', toDo: []},
    {name: 'today', toDo: []},
    {name: 'week', toDo: []},
]
projects[0].toDo = [
    {task: 'walk the dog', due: '2022-09-13', idDone: false},
    {task: 'work on coding project', due: '2022-09-14', isDone: true},
    {task: 'go work out', due: '2022-09-15', idDone: false}
]
let currentProject = projects[0]

function isUnique(task) {
    for (let project of projects) {
        for (let todo of project.toDo) {
            if (task === todo.task) {
                alert('Task Already Exist')
                return true;
            }
        }
    }
} 

function createProject(name) {
    for (let project of projects) {
        if (project.name === name) return true
    }
    projects.push({name, toDo: []})
}

function addTodo(task, due) {
    if (isUnique(task)) return;
    currentProject.toDo.push({task, due, isDone: false})
    if (currentProject !== projects[0]) projects[0].toDo.push({task, due, isDone: false})
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(projects))
}

function readLocalStorage() {
    const storageProjects = localStorage.getItem('projects')
    if (JSON.parse(storageProjects)[0].toDo.length != 0) {
        let projectsLocal = JSON.parse(storageProjects)
        projectsLocal[1].toDo = []
        projectsLocal[2].toDo = []
        projects = projectsLocal
    } 
    currentProject = projects[0]
}

function setCurrentProject(project) {
    currentProject = project
}

readLocalStorage()
displayTasks()
displayProjects()

