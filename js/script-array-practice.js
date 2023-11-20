//STEP 1
let favMovies = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'Movie 4',
    'Movie 5'
];
console.log("Step 1 -",favMovies[1])

//STEP 2
console.log("******************")
let moviesStp2 = new Array(5);
moviesStp2[0] = "Lord of the Rings";
moviesStp2[1] = "Back to the Future";
moviesStp2[2] = "Gladiator";
moviesStp2[3] = "Movie 4";
moviesStp2[4] = "Movie 5";
console.log ("Step 2 -",moviesStp2[0])

//STEP 3
console.log("******************")
let moviesStp3 = new Array(5);
moviesStp3[0] = "Lord of the Rings";
moviesStp3[1] = "Back to the Future";
moviesStp3[2] = "Gladiator";
moviesStp3[3] = "Movie 4";
moviesStp3[4] = "Movie 5";
moviesStp3.splice(2,0,"Hunger Games")
console.log ("Step 3 Movies -", moviesStp3)
console.log ("Step 3 Lenght -", moviesStp3.length)

//STEP 4
console.log("******************")
let moviesStp4 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick'
];
delete moviesStp4[0]
console.log("Step 4 Movies -",moviesStp4)


//STEP 5
console.log("******************")
let moviesStp5 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
for (let movieStp5 in moviesStp5){
console.log("Step 5 -",moviesStp5[movieStp5])
}

//STEP 6
console.log("******************")
let moviesStp6 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
for (let i of moviesStp6){
console.log("Step 6 -",i)
}

//STEP 7
console.log("******************")
let moviesStp7 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
moviesStp7.sort()
for (let i of moviesStp7){
console.log("Step 7 -", i)
}

//STEP 8
console.log("******************")
let moviesStp8 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
let leastFavMovies = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    'Movie 4',
];

console.log("Step 8 - Movies I Like:")
console.log(" ")
for (let movieStp8 in moviesStp8){
console.log(moviesStp8[movieStp8])
}
console.log(" ")
console.log("Step 8 - Movies I regret watching:")
console.log(" ")
for (let leastFavMovie in leastFavMovies){
console.log(leastFavMovies[leastFavMovie])
}

//STEP 9
console.log("******************")
let moviesStp9 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
let leastFavMoviesStp9 = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    'Movie 4',
];

let newmovies = moviesStp9.concat(leastFavMoviesStp9)
newmovies.reverse()
console.log("Step 9 - New Movies Array", newmovies)

//STEP 10

console.log("******************")
let moviesStp10 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
let leastFavMoviesStp10 = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    'Movie 4',
];

let newMoviesStep10 = moviesStp10.concat(leastFavMoviesStp10)
newMoviesStep10.reverse()
let lastMovie = newMoviesStep10[newMoviesStep10.length -1]
console.log("Step 10 - Last Movie in the Array")
console.log(lastMovie)

//STEP 11
console.log("******************")
let moviesStp11 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
let leastFavMoviesStp11 = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    'Movie 4',
];

let newMoviesStep11 = moviesStp11.concat(leastFavMoviesStp11)
newMoviesStep11.reverse()
let firstMovie = newMoviesStep11[0]
console.log("Step 11 - First Movie in the Array")
console.log(firstMovie)

//STEP 12
console.log("******************")
let moviesStp12 = [
    'Lord of the Rings',
    'Back to the Future',
    'Gladiator',
    'The Wolf of Wallstreet',
    'John Wick',
    'Matrix',
    'Interstellar'
];
let leastFavMoviesStp12 = [
    'The Hobbit',
    'Antman',
    'Batman',
    'Spiderman 3',
];

let indicesMovies = []
console.log("Step 12 - Array Indices")
for (let i=0 ; i < leastFavMoviesStp12.length; i++){
    console.log( i,leastFavMoviesStp12[i])
}

//STEP 13
console.log("******************")
// let moviesStp13 = [
    // ['Lord of the Rings', 4],
    // ['Back to the Future', 5],
    // ["Gladiator", 2],
    // ["John Wick", 1],
    // ["Interstellar", 4]
//     [movie:'Lord of the Rings', rating: 4],
//     [movie:'Back to the Future', rating: 5],
//     [movie:"Gladiator", rating: 2],
//     [movie:"John Wick", rating: 1],
//     [movie:"Interstellar", rating: 4]
// ];
console.log("Step 13 - Filtering")

// function moviesFilter(movieStp13) {
//     return .filter( rating => rating === 4)
// }
// function moviesFilter(movie, rating) {
//     return moviesStp13.filter( rating => rating === 4)
// }
// let filteredMovies = moviesFilter(moviesStp13,1,4)
// console.log(filteredMovies)



//STEP 14
console.log("******************")
console.log("Step 14 - Employee Array")

let employeesStp13 = [
    'Zak',
    'Jessica', 
    'Mark',
    'Fred',
    'Sally'
]

let showEmployee = function(employeelistStp13){
    console.log("Employees:");
    employeelistStp13.forEach(employeeStp13 => {
        console.log(employeeStp13)
    })
}
showEmployee(employeesStp13)

//STEP 15

console.log("******************")
console.log("Step 15 - Filter Null")

let employeesStp15 = [
    58,
    ' ', 
    'abc',
    true,
    null,
    false,
    0
]

function filterStp15(){
    let filterResults = employeesStp15.filter(function(item){
        return item != null && item != false
    })
    console.log("Results:", filterResults)
}
filterStp15()

// function filterStp15(){
//     let filterResults = employeesStp15.filter(item => item !== 0 && item !== null && item !== false)
//     console.log("Results:", filterResults)
// }
// filterStp15()

//STEP 16
console.log("******************")
console.log("Step 16 - Random Numbers Array")
// Step 16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and 
// then pass that array into my function, the function should randomly return one of those numbers.

let numbersArray = [2,4,6,23,56,13,66,823,11,57]

function pullRandomNum(number){
    let numberIndex = Math.floor(Math.random() * number.length)
    return number[numberIndex]
}
let ranNum = pullRandomNum(numbersArray)
console.log("Random number:", ranNum)

//STEP 17
//Write a JavaScript function to get the largest number from a numeric array.
console.log("******************")
console.log("Step 17 - Largest Number in Array")

let largNumbersArray = [2,4,96,23,56,13,66,823,11,57]

function evaluateNumber(numberStp17){
   let largestNum = 66
    for ( i = 1 ; i < largNumbersArray.length; i++){
    if (largNumbersArray[i] > largestNum){
        largestNum = largNumbersArray[i]
        } 
    }
    return largestNum
}
let largestNumber = evaluateNumber(largNumbersArray)
console.log("Largest number:", largestNumber)

