/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




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
;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.displayTasks)()
;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");





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
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[0])
    todoList.innerHTML = ''
    displayTasks()
}

todayBtn.onclick = () => {
    addTask.disabled = true
    projectName.textContent = 'Today'
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[1])
    _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo = []
    for (let todo of _index__WEBPACK_IMPORTED_MODULE_0__.projects[0].toDo) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(`${todo.due}T12:00`), new Date())) {
            _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo.push(todo)
        }
    }
    todoList.innerHTML = ''
    displayTasks()
}

thisWeekBtn.onclick = () => {
    addTask.disabled = true
    projectName.textContent = 'This Week'
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[2])
    _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo = []
    for (let todo of _index__WEBPACK_IMPORTED_MODULE_0__.projects[0].toDo) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(`${todo.due}T12:00`), new Date())) {
            _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo.push(todo)
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
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.addTodo)(task, date)
    displayTasks()
    addTask.style.display = 'block'
    popupTask.style.display = 'none'
}

submitProjectBtn.onclick = () => {
    const newProject = document.querySelector('#project').value
    document.querySelector('#project').value = ''
    if(!newProject) return;
    projectList.innerHTML = ''
    if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProject)) alert('Project already exist')
    displayProjects()
    popupProject.style.display = 'none'
}


function displayTasks() {
    _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo.sort((a, b) => {
        if (a.due > b.due) return 1
        else if (a.due < b.due) return -1
        else return 0
    })
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo.length; i++) {
        let e = _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo[i]
        const div = document.createElement('div')
        div.classList.add('todo-item')
        const input = document.createElement('input')
        input.type = 'text'
        input.value = e.task
        input.onchange = () => {
            if (!input.value) input.value = e.task
            let temp = e.task
            for (let project of _index__WEBPACK_IMPORTED_MODULE_0__.projects) {
                for (let todo of project.toDo) {
                    if (temp === todo.task) {
                        todo.task = input.value
                    }
                }
            }
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        } 
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.onclick = () => {
            if (checkbox.checked) {
                input.classList.toggle('done')
                e.isDone = true
                ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
            } else {
                input.classList.toggle('done')
                e.isDone = false
                ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
            } 
        }
        const input2 = document.createElement('input')
        input2.type = 'date'
        input2.value = e.due
        input2.onchange = () => {
            for (let project of _index__WEBPACK_IMPORTED_MODULE_0__.projects) {
                for (let todo of project.toDo) {
                    if (e.task === todo.task) {
                        todo.due = input2.value
                    }
                }
            }
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        } 
        const delBtn = document.createElement('button')
        delBtn.setAttribute('data', i)
        delBtn.textContent = 'Delete'
        delBtn.onclick = () => {
            for (let project of _index__WEBPACK_IMPORTED_MODULE_0__.projects) {
                let index = project.toDo.findIndex(e => e.task === input.value)
                if (index !== -1) project.toDo.splice(index, 1)
            }
            div.remove()
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
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
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects)
}

function displayProjects() {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
        if (i <= 2) continue;
        const div = document.createElement('div')
        const button = document.createElement('button')
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'
        delBtn.onclick = () => {
            let index = _index__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(e => e.name === button.textContent)
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[index])
            for (let curTodo of _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.toDo) {
                let index = _index__WEBPACK_IMPORTED_MODULE_0__.projects[0].toDo.findIndex(e => e.task === curTodo.task)
                if (index !== -1) _index__WEBPACK_IMPORTED_MODULE_0__.projects[0].toDo.splice(index, 1)
            }
            for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
                if (_index__WEBPACK_IMPORTED_MODULE_0__.projects[i].name === button.textContent) {
                    _index__WEBPACK_IMPORTED_MODULE_0__.projects.splice(i, 1)
                } 
            }
            div.remove()
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[0])
            projectName.textContent = _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.name
            todoList.innerHTML = ''
            displayTasks()
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        }
        delBtn.setAttribute('id', 'delete-project')
        button.textContent = _index__WEBPACK_IMPORTED_MODULE_0__.projects[i].name
        button.onclick = () => {
            addTask.disabled = false
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[i])
            projectName.textContent = _index__WEBPACK_IMPORTED_MODULE_0__.currentProject.name
            todoList.innerHTML = ''
            displayTasks()
        }
        div.appendChild(button)
        div.appendChild(delBtn)
        projectList.appendChild(div)
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx1REFBbUI7QUFDbkQsNEJBQTRCLDhEQUEwQjtBQUN0RCxrQ0FBa0MsMkRBQXVCO0FBQ3pEO0FBQ0EsNEJBQTRCLElBQUksbURBQWUsRUFBRTtBQUNqRCxvQkFBb0IsNENBQVE7QUFDNUIsb0JBQW9CLG1EQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWlCLENBQUMsK0NBQVc7QUFDekMsc0NBQXNDLHVEQUFtQjtBQUN6RDtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQjtBQUNBO0FBQ0EsNkJBQTZCLDRDQUFRO0FBQ3JDO0FBQ0E7QUFDQSxZQUFZLDBEQUFpQixDQUFDLDRDQUFRO0FBQ3RDLHNDQUFzQyx1REFBbUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDck5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7ZGlzcGxheVRhc2tzLCBkaXNwbGF5UHJvamVjdHN9IGZyb20gJy4vdWknXG5cbmV4cG9ydCB7cHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgYWRkVG9kbywgcG9wdWxhdGVTdG9yYWdlfVxuXG5sZXQgcHJvamVjdHMgPSBbXG4gICAge25hbWU6ICdob21lJywgdG9EbzogW119LFxuICAgIHtuYW1lOiAndG9kYXknLCB0b0RvOiBbXX0sXG4gICAge25hbWU6ICd3ZWVrJywgdG9EbzogW119LFxuXVxucHJvamVjdHNbMF0udG9EbyA9IFtcbiAgICB7dGFzazogJ3dhbGsgdGhlIGRvZycsIGR1ZTogJzIwMjItMDktMTMnLCBpZERvbmU6IGZhbHNlfSxcbiAgICB7dGFzazogJ3dvcmsgb24gY29kaW5nIHByb2plY3QnLCBkdWU6ICcyMDIyLTA5LTE0JywgaXNEb25lOiB0cnVlfSxcbiAgICB7dGFzazogJ2dvIHdvcmsgb3V0JywgZHVlOiAnMjAyMi0wOS0xNScsIGlkRG9uZTogZmFsc2V9XG5dXG5sZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1swXVxuXG5mdW5jdGlvbiBpc1VuaXF1ZSh0YXNrKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9Ebykge1xuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRvZG8udGFzaykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdUYXNrIEFscmVhZHkgRXhpc3QnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSBcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBuYW1lKSByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwcm9qZWN0cy5wdXNoKHtuYW1lLCB0b0RvOiBbXX0pXG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8odGFzaywgZHVlKSB7XG4gICAgaWYgKGlzVW5pcXVlKHRhc2spKSByZXR1cm47XG4gICAgY3VycmVudFByb2plY3QudG9Eby5wdXNoKHt0YXNrLCBkdWUsIGlzRG9uZTogZmFsc2V9KVxuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPT0gcHJvamVjdHNbMF0pIHByb2plY3RzWzBdLnRvRG8ucHVzaCh7dGFzaywgZHVlLCBpc0RvbmU6IGZhbHNlfSlcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbn1cblxuZnVuY3Rpb24gcmVhZExvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzdG9yYWdlUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKVxuICAgIGlmIChKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0cylbMF0udG9Eby5sZW5ndGggIT0gMCkge1xuICAgICAgICBsZXQgcHJvamVjdHNMb2NhbCA9IEpTT04ucGFyc2Uoc3RvcmFnZVByb2plY3RzKVxuICAgICAgICBwcm9qZWN0c0xvY2FsWzFdLnRvRG8gPSBbXVxuICAgICAgICBwcm9qZWN0c0xvY2FsWzJdLnRvRG8gPSBbXVxuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzTG9jYWxcbiAgICB9IFxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFxufVxuXG5yZWFkTG9jYWxTdG9yYWdlKClcbmRpc3BsYXlUYXNrcygpXG5kaXNwbGF5UHJvamVjdHMoKVxuXG4iLCJpbXBvcnQge3Byb2plY3RzLCBjdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGFkZFRvZG8sIHBvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7aXNTYW1lRGF5LCBpc1NhbWVXZWVrfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IHtkaXNwbGF5VGFza3MsIGRpc3BsYXlQcm9qZWN0c31cblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJylcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JylcbmNvbnN0IHRoaXNXZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXMtd2VlaycpXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJylcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKVxuY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvamVjdCcpXG5jb25zdCBjYW5jZWxBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWFkZCcpXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWFkZCcpXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0JylcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKVxuY29uc3QgcG9wdXBUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXRhc2snKVxuY29uc3QgcG9wdXBQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXByb2plY3QnKVxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJylcblxuaG9tZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZVxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gJ0hvbWUnXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdHNbMF0pXG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICBkaXNwbGF5VGFza3MoKVxufVxuXG50b2RheUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFkZFRhc2suZGlzYWJsZWQgPSB0cnVlXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnVG9kYXknXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdHNbMV0pXG4gICAgY3VycmVudFByb2plY3QudG9EbyA9IFtdXG4gICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0c1swXS50b0RvKSB7XG4gICAgICAgIGlmIChpc1NhbWVEYXkobmV3IERhdGUoYCR7dG9kby5kdWV9VDEyOjAwYCksIG5ldyBEYXRlKCkpKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50b0RvLnB1c2godG9kbylcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgIGRpc3BsYXlUYXNrcygpXG59XG5cbnRoaXNXZWVrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWRkVGFzay5kaXNhYmxlZCA9IHRydWVcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdHNbMl0pXG4gICAgY3VycmVudFByb2plY3QudG9EbyA9IFtdXG4gICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0c1swXS50b0RvKSB7XG4gICAgICAgIGlmIChpc1NhbWVXZWVrKG5ldyBEYXRlKGAke3RvZG8uZHVlfVQxMjowMGApLCBuZXcgRGF0ZSgpKSkge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QudG9Eby5wdXNoKHRvZG8pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICBkaXNwbGF5VGFza3MoKVxufVxuXG5hZGRQcm9qZWN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcG9wdXBQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59XG5cbmFkZFRhc2sub25jbGljayA9ICgpID0+IHtcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBwb3B1cFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbn1cblxuY2FuY2VsUHJvamVjdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBvcHVwUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmNhbmNlbEFkZC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBwb3B1cFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5zdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWUgPSAnJ1xuICAgIGlmICghdGFzaykgcmV0dXJuO1xuICAgIHRvZG9MaXN0LmlubmVySFRNTCA9ICcnXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlID0gJydcbiAgICBhZGRUb2RvKHRhc2ssIGRhdGUpXG4gICAgZGlzcGxheVRhc2tzKClcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgcG9wdXBUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuc3VibWl0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZSA9ICcnXG4gICAgaWYoIW5ld1Byb2plY3QpIHJldHVybjtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xuICAgIGlmIChjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpKSBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0JylcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIHBvcHVwUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRvRG8uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5kdWUgPiBiLmR1ZSkgcmV0dXJuIDFcbiAgICAgICAgZWxzZSBpZiAoYS5kdWUgPCBiLmR1ZSkgcmV0dXJuIC0xXG4gICAgICAgIGVsc2UgcmV0dXJuIDBcbiAgICB9KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9Eby5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZSA9IGN1cnJlbnRQcm9qZWN0LnRvRG9baV1cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnXG4gICAgICAgIGlucHV0LnZhbHVlID0gZS50YXNrXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC52YWx1ZSkgaW5wdXQudmFsdWUgPSBlLnRhc2tcbiAgICAgICAgICAgIGxldCB0ZW1wID0gZS50YXNrXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0LnRvRG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAgPT09IHRvZG8udGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby50YXNrID0gaW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXG4gICAgICAgIH0gXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjaGVja2JveC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcbiAgICAgICAgICAgICAgICBlLmlzRG9uZSA9IHRydWVcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJylcbiAgICAgICAgICAgICAgICBlLmlzRG9uZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBpbnB1dDIudHlwZSA9ICdkYXRlJ1xuICAgICAgICBpbnB1dDIudmFsdWUgPSBlLmR1ZVxuICAgICAgICBpbnB1dDIub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0LnRvRG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFzayA9PT0gdG9kby50YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmR1ZSA9IGlucHV0Mi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcbiAgICAgICAgfSBcbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpXG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgICAgIGRlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHByb2plY3QudG9Eby5maW5kSW5kZXgoZSA9PiBlLnRhc2sgPT09IGlucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHByb2plY3QudG9Eby5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYucmVtb3ZlKClcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuaXNEb25lKSB7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdkb25lJylcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KSBcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MilcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbEJ0bilcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA8PSAyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICAgICAgZGVsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoZSA9PiBlLm5hbWUgPT09IGJ1dHRvbi50ZXh0Q29udGVudClcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RzW2luZGV4XSlcbiAgICAgICAgICAgIGZvciAobGV0IGN1clRvZG8gb2YgY3VycmVudFByb2plY3QudG9Ebykge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHByb2plY3RzWzBdLnRvRG8uZmluZEluZGV4KGUgPT4gZS50YXNrID09PSBjdXJUb2RvLnRhc2spXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgcHJvamVjdHNbMF0udG9Eby5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT09IGJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LnJlbW92ZSgpXG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0c1swXSlcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QubmFtZVxuICAgICAgICAgICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxuICAgICAgICB9XG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZS1wcm9qZWN0JylcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ubmFtZVxuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdHNbaV0pXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWVcbiAgICAgICAgICAgIHRvZG9MaXN0LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==