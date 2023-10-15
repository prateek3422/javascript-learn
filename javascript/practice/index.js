//Q 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date()


let Day = date.getDay()
let dayList = ["sun","mon","tue","wed", "fri","sat"]
// console.log(`Today is ${dayList[Day]}`)

let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

let pre = hour >= 12 ? "PM": "AM"

hour = (hour >= 12) ? hour - 12: hour

if(hour === 0 && pre === "PM"){
  if(min === 0 && sec === 0 ){
    hour = 12
    pre = "Noon"
  }else{
    hour = 12
    pre = "PM"
  }
}
if(hour === 0 && pre === "AM"){
  if(min === 0 && sec === 0 ){
    hour = 12
    pre = "Midnight"
  }else{
    hour = 12
    pre = "AM"
  }
}

// console.log(`Current Time: ${hour} ${pre} : ${min} : ${sec}`)



// Q Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let day = date.getDate()
// let month = date.getMonth()
// let year = date.getFullYear()

// console.table([day, month, year])






// for(let year = 2023 ; year <= 2100; year++ ){
//   let d =  new Date(year, 0, 1)
//   if(d.getDay() === 0){
//     console.log(`1 jun is sunday = ${d}`)
//   }
// }




//Q Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// const num = 2014;

// if((num/4) === 0){
//   console.log(`leap year`)
// }else if(num / 100) {
//   console.log(`not leap year`)

// }


// Q Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  


  // const num = Math.ceil(Math.random() * 10)

  // const guess = window.prompt(`guess the number`)

  // if(num === guess){
  //   console.log("Good Work")
  // }else{
  //   console.log( "Not matched")
  // }


// Q Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
// Sample form :