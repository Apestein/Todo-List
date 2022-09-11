/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);


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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNONkM7O0FBRTdDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7O0FBRUE7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5sZXQgcHJvamVjdHMgPSBbXG4gICAge25hbWU6ICdkZWZhdWx0UHJvamVjdCcsIHRvRG86IFtdfVxuXVxubGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF1cblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJylcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKVxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpXG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1wcm9qZWN0JylcbmNvbnN0IGNhbmNlbEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtYWRkJylcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYWRkJylcbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QnKVxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpXG5jb25zdCBwb3B1cFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtdGFzaycpXG5jb25zdCBwb3B1cFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtcHJvamVjdCcpXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKVxuXG5ob21lQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnSG9tZSdcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzWzBdXG4gICAgZGlzcGxheUFsbFRhc2tzKClcbn0gXG5cbmFkZFByb2plY3Qub25jbGljayA9ICgpID0+IHtcbiAgICBwb3B1cFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbn1cblxuYWRkVGFzay5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHBvcHVwVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG5jYW5jZWxQcm9qZWN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcG9wdXBQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuY2FuY2VsQWRkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHBvcHVwVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbnN1Ym1pdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZSA9ICcnXG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUgPSAnJ1xuICAgIGFkZFRvZG8odGFzaywgZGF0ZSlcbiAgICBkaXNwbGF5VGFza3MoKVxuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBwb3B1cFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5zdWJtaXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlID0gJydcbiAgICBpZighbmV3UHJvamVjdCkgcmV0dXJuO1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnXG4gICAgY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgcG9wdXBQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcHJvamVjdHMucHVzaCh7bmFtZSwgdG9EbzogW119KVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvKHRhc2ssIGR1ZSkge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRvRG8ucHVzaCh7dGFzaywgZHVlLCBpc0RvbmU6IGZhbHNlfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRvRG8uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5kdWUgPiBiLmR1ZSkgcmV0dXJuIDFcbiAgICAgICAgZWxzZSBpZiAoYS5kdWUgPCBiLmR1ZSkgcmV0dXJuIC0xXG4gICAgICAgIGVsc2UgcmV0dXJuIDAgXG4gICAgfSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRvRG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGUgPSBjdXJyZW50UHJvamVjdC50b0RvW2ldXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdpcy1kb25lJylcbiAgICAgICAgY2hlY2tib3gub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlID0gJ3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoJ1xuICAgICAgICAgICAgICAgIGUuaXNEb25lID0gdHJ1ZVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZSA9ICd0ZXh0LWRlY29yYXRpb246IG5vbmUnXG4gICAgICAgICAgICAgICAgZS5pc0RvbmUgPSBmYWxzZVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgaW5wdXQudmFsdWUgPSBlLnRhc2tcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSAoKSA9PiBlLnRhc2sgPSBpbnB1dC52YWx1ZVxuICAgICAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGlucHV0Mi50eXBlID0gJ2RhdGUnXG4gICAgICAgIGlucHV0Mi52YWx1ZSA9IGUuZHVlXG4gICAgICAgIGlucHV0Mi5vbmNoYW5nZSA9ICgpID0+IGUuZHVlID0gaW5wdXQyLnZhbHVlXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKVxuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICAgICAgICBkZWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG8uc3BsaWNlKGRlbEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSwgMSlcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmlzRG9uZSkgZGl2LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCkgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09IDApIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBkZWxCdG4uc2V0QXR0cmlidXRlKCdkYXRhJywgaSlcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICAgICAgZGVsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoZGVsQnRuLmdldEF0dHJpYnV0ZSgnZGF0YScpLCAxKVxuICAgICAgICAgICAgZGl2LnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlLXByb2plY3QnKVxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXVxuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5uYW1lXG4gICAgICAgICAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsQnRuKVxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChkaXYpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSBwcm9qZWN0c1swXS50b0RvLnB1c2goLi4ucHJvamVjdC50b0RvKTtcbiAgICBpZiAocHJvamVjdHNbMF0udG9Eby5sZW5ndGgpIGRpc3BsYXlUYXNrcygpXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbMF0udG9Ebylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==