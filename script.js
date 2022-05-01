// 1
console.log(hello);
var hello = 'world';
// prediction
// var hello;
// console.log(hello)       will log undefined
// var hello = 'world';
// prediction correct


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// prediction
// var needle = 'haystack';
// test();
//var needle = 'magnet';
// console.log(needle);     will log 'magnet'
// prediction correct


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// prediction
// var brendan = 'super cool';
// function print(){
    // brendan = 'only okay';
    // console.log(brendan);        will log 'only okay'
// }
// console.log(brendan);            will log 'only okay'
// prediction wrong
// answer: logs 'super cool' because function print() is never actually called


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// prediction
// var food = 'chicken';
// console.log(food);       will log 'chicken'
// eat();
// function eat(){
    // food = 'half-chicken';
    // console.log(food);      will log 'half-chicken'
    // var food = 'gone';
// }
// prediction correct


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// prediction
// var mean;
// mean();
// var mean = function(){
    // food = 'chicken';
    // console.log(food);       will log chicken
    // var food = 'fish';
    // console.log(food);       will log fish
// }
// console.log(food);           will log fish
// console.log(food);           will log fish
// prediction wrong
// answer: 'mean is not a function'. mean is declared but not assigned a value before it is called


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// prediction
// var genre;

// console.log(genre);      will log undefined
// var genre = 'disco';
// rewind();
// genre = 'rock';
// console.log(genre);      will log rock
// var genre = 'r&b';
// console.log(genre);      will log r&b
// console.log(genre);      will log disco
// prediction correct


// 7 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// prediction
// dojo = 'san jose';
// console.log(dojo);       will log san jose
// learn();
// var dojo;
// dojo = 'seattle';
// console.log(dojo);       will log seattle
// var dojo = 'burbank';
// console.log(dojo);       will log burbank
// console.log(dojo);       will log san jose
// prediction correct


// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// prediction
// console.log(makeDojo("Chicago, 65"));
// const dojo={};
// dojo.name = name;
// dojo.students = students;
// if(dojo.students > 50){
    // dojo.hiring = true;
// }
// console.log(dojo);       will log { name: 'Chicago', students : 65, hiring : true }
// console.log(makeDojo("Berkeley", 0));
// const dojo = {};
// dojo.name = name;
// dojo.students = students;
// else if(dojo.students <= 0) {
    // dojo = "closed for now";
// }
// console.log(dojo);       will log closed for now
// prediction wrong
// answer: { name: 'Chicago', students : 65, hiring : true }
// Type error: assignment to const variable. const dojo makes dojo immutable
