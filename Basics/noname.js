// const records = [{
//     title: 'mangal yan',
//     released: true
// },
// {
//     title: '1917',
//     released: false
// },
// {
//     title: 'chhichhore',
//     released: false
// },
// {
//     title: 'super 30',
//     released: true
// },
// {
//     title: 'endgame',
//     released: true
// }]


// const released_movies = records.filter((records) => records.released === true).map((movie) => movie.title)
// console.log(released_movies);


var Guru = {
    name: 'i am Guru',
    age: 21,
    isActive: true
}
var Vinay = {
    name: 'i am vinay',
    age: 25,
    isActive: false
}
var gouri = {
    name: 'i am gouri',
    age: 20,
    isActivw: true
}
var punith = {
    name: 'i am punith',
    age: 35,
    isActive: false
}
// console.log(typeof Guru)

let users = new Map()

users.set('Guru', Guru)
users.set('Vinay', Vinay)
users.set('Gouri', gouri)

// console.log(users)
// console.log(users.size)
// console.log(users.get('Guru'))
// console.log(users.keys())
// console.log(users.values())

for (const key of users.values()) {
    // console.log(key.name)
    // console.log(key)
}

for (const [key, value] of users.entries()) {
    // console.log(key + '=' + value.name)
}

// users.forEach((value, key) => console.log(key + '=' + value.name))

var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]
var newMap = new Map(arrofArr)
console.log(newMap)
