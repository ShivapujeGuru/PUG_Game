// let firstName = 'ECMA Script'
// newFunction();
// function newFunction() {
//     console.log(firstName);
// }

// let marvel = ['thor', 'captain-america', 'iron-man', 'spider-man']
// marvel.splice(3, 1, 'endgameThor')
// console.log(marvel)

// let marvelfunct = function(name='Doe', learnLevel=0){
//     return 'Hello ' + name + ' ur course learning level is : ' + learnLevel 
// }
// console.log(marvelfunct('John', '90%'))


// const days =['Mon', 'Tue', 'Thu', 'Fri', 'Sat', 'Sun']

// for (let i=days.length-1; i>=0; i--) {
// console.log(days[i])
// }

// const todoList = []

// todoList.push('woke up in the early morning')
// todoList.push('excersise')
// todoList.push('have a bath')
// todoList.push('ready for office')
// todoList.push('book auto')

// for (let i = 0; i <= todoList.length; i++) {
//     console.log(`Your task no.  ${i + 1} is : ${todoList[i]}`)
// }


// let getMyGrade = function (obtaibMarks, totalMarks) {
//     let myPercentage = (obtaibMarks / totalMarks) * 100;

//     let myGrade = '';
//     if (myPercentage >= 90) {
//         myGrade = 'A';
//     }
//     else if (myPercentage >= 80) {
//         myGrade = 'B'
//     }

//     else if (myPercentage >= 70) {
//         myGrade = 'c'
//     }

//     else if (myPercentage >= 60) {
//         myGrade = 'c'
//     }
//     else {
//         myGrade = 'F'
//     }

//     return `Your Percentage is: ${myPercentage} and Grade is : ${myGrade}`
// }
// console.log(getMyGrade(92, 150))


// let myTodosTwo = {
//     day: 'Monday',
//     meetings: 12,
//     meetDonr: 3,

//     addMeeting: function (num) {
//         this.meetings = this.meetings + num
//     },
//     summary: function () {
//         return `i have ${this.meetings} meetins today `
//     }

// }
// myTodosTwo.addMeeting(5)
// console.log(myTodosTwo.summary())
// username = "Gurupad@gmail.com      "
// password = "Guru@123"

// let userCheck = function (value) {
//     if ((value.includes('@gmail.com')) && (value.length > 6)) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(userCheck(password))
// console.log(userCheck(username))
// console.log(username.length)
// console.log(username)

// base = 256;
// float = 23;

// result = base / float;
// console.log(result)
// console.log(result.toFixed(3))
// console.log(Math.ceil(result))
// console.log(Math.floor(Math.random() * 5))


// const ITodos = ['buy bread', 'gym practice', 'record mytube audios']

// console.log(ITodos[ITodos.indexOf('buy bread')]);

// const oldTodos = [{
//     title: 'buy bread',
//     isDone: false,
// }, {
//     title: 'Go To gym',
//     isDone: false,
// }, {
//     title: 'record itube videos',
//     isDone: true,
// }]

// const index = oldTodos.findIndex(function (todo, index) {
//     console.log(todo);
//     return todo.title === 'goto gym'
// })

// console.log(index);


//method one

// const findTodo = function (Todos, title) {
//     const index = oldTodos.findIndex(function (todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return oldTodos[index]
// }
// console.log(findTodo)

// let printMe = findTodo(oldTodos, 'Go To gym')
// console.log(printMe);


// Method Two

// const findTodo = function (myTodos, title) {
//     const titleReturned = oldTodos.find(function (todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return titleReturned
// }

// let printMe = findTodo(oldTodos, 'Go To gym')
// console.log(printMe); 
// console.log("hello");