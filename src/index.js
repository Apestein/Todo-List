let defaultProject = []

const submitBtn = document.querySelector('#submit-add')

submitBtn.onclick = () => {
    const todo = document.querySelector('#task').value
    const date = document.querySelector('#date').value
    addTodo(todo, date)
    console.log(defaultProject)
}

function createProject(name) {
    return {name, toDo: []}
}

function addTodo(todo, due) {
    defaultProject.push({todo, due, isDone: false})
}
