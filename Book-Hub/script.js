// alert('file is attached')

// const myElement = document.querySelector('h1')
// myElement.textContent = "I am Being Changed by ECMA Script"


// const myElement = document.querySelectorAll('p')

// myElement.forEach(function (p) {
// p.textContent = 'i am being changed by for each loop'
// p.remove()
// });

// document.title = "That's my Project";
// console.log(document.title);

// console.log(document.getElementById('idone'))

// document.querySelector('button').addEventListener('click', (event) => {
// console.log(event)
// event.target.textContent = 'i was clicked by you';
// console.log(event)

// });


//track input form

// document.querySelector('#myform').addEventListener('input', (event) => {
//     console.log(event.target.value)
// })

// alert('everythin is connected')

// function validation() {
//     let myValue = document.getElementById('myForm').value;

//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//         console.log("not a valid input")
//     }
//     else {
//         console.log('this input is ok')
//     }
// }

// document.querySelector('.yourform').addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event.target.username.value)
//     console.log(event.target.sername.value)
//     event.target.username.value = ''
//     event.target.sername.value = ''
// })


// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(myValue)
// var val = 5;
// while (val > 1) {
//     console.log(val);
//     val--;
// }



// function addItem() {
//     var input = document.getElementById('input')
//     var item = input.value
//     ul = document.getElementById('list')
//     var textnode = document.createTextNode(item)

//     if (item === '') {
//         return false
//     }
//     else {
//         li = document.createElement('li')
//         var checkbox = document.createElement('input')
//         checkbox.type = 'checkbox';
//         checkbox.setAttribute('id', 'check');

//         //creat label

//         label = document.createElement
//     }
// }

// const addForm = document.forms['append-book'];
// // console.log(addForm);
// addForm.addEventListener('submit', function (a) {
//     a.preventDefault();
//     const value = addForm.querySelector('input[type="text"]'.value);
//     console.log(value)
// })


// functions
// calculate(1965);

// function calculate(year){
//     console.log(2016-year);
// }
//  calculate(1990);


// retirement(1990);

// var retirement = function(year){
//     console.log(65-(2018-year))
// }

// retirement(1990);


// variables

// console.log(age);
// var age = 23;
// console.log(age); 

// function foo(){
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

// var a = 12;
// first();

// function first() {
//     var b = 13;
//     second();

//     function second() {
//     var c = 56;
//     third();
//     console.log(c);
//     } 
// }

// function third() {
//     var d = "54";
//     console.log(a+d);
// }


// var john = {
//     name : "john",
//     yob : 1997,
//     calculateAge : function() {
//         console.log(this);
//         console.log(2016-this.yob);

        // function innerfunc() {
        //     console.log(this.yob);
        // }
        // innerfunc();

//     }
        
// }

// john.calculateAge();

// var Doe = {
//     name : "Doe",
//     yob : 1993,
// };

// Doe.calculateAge = john.calculateAge;
// Doe.calculateAge();

// var Drone = {
//     name : "Droe",
//     yob : 1965,
// };

// Drone.calculateAge = john.calculateAge;
// Drone.calculateAge();

// var dice = Math.floor(Math.random() * 10 + 1)
// console.log(dice);