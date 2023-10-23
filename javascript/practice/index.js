//Q 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let date = new Date()

// let Day = date.getDay()
// let dayList = ["sun","mon","tue","wed", "fri","sat"]
// // console.log(`Today is ${dayList[Day]}`)

// let hour = date.getHours()
// let min = date.getMinutes()
// let sec = date.getSeconds()

// let pre = hour >= 12 ? "PM": "AM"

// hour = (hour >= 12) ? hour - 12: hour

// if(hour === 0 && pre === "PM"){
//   if(min === 0 && sec === 0 ){
//     hour = 12
//     pre = "Noon"
//   }else{
//     hour = 12
//     pre = "PM"
//   }
// }
// if(hour === 0 && pre === "AM"){
//   if(min === 0 && sec === 0 ){
//     hour = 12
//     pre = "Midnight"
//   }else{
//     hour = 12
//     pre = "AM"
//   }
// }

// console.log(`Current Time: ${hour} ${pre} : ${min} : ${sec}`)

// Q2 Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let day = date.getDate()
// let month = date.getMonth()
// let year = date.getFullYear()

// console.table([day, month, year])

// Q-3

// for(let year = 2023 ; year <= 2100; year++ ){
//   let d =  new Date(year, 0, 1)
//   if(d.getDay() === 0){
//     console.log(`1 jun is sunday = ${d}`)
//   }
// }

//Q4 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// const num = 2014;

// if((num/4) === 0){
//   console.log(`leap year`)
// }else if(num / 100) {
//   console.log(`not leap year`)

// }

// Q5 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// const num = Math.ceil(Math.random() * 10)

// const guess = window.prompt(`guess the number`)

// if(num === guess){
//   console.log("Good Work")
// }else{
//   console.log( "Not matched")
// }

// Q6 Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// c = (f-32) (5/9)

// function temp(cel){
//  let far =( cel * 9/5) +32

//  let result = `${cel}c is ${far}f)`
//  console.log(result)

// }

// function farnen(far){
//   let cel = (far -32) * (5/9)

//  let result  =    `${far}f is ${cel}`
//  console.log(result)

// }

// temp(60)
// farnen(45)

// Q7  Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// function diffrence(n) {
//   if(n <= 13){
//     return  13 - n
//   }else{
//     return (n-13)*2
//   }

// }
// console.log(diffrence(32))
// console.log(diffrence(11))

// Q8 Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// function sum( a, b){
//   if(a === b){
//     return (a+b)*3
//   }else{
//     return a+b
//   }
// }

// console.log(sum(10,20))
// console.log(sum(10,10))

// Q9  Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

// function checkPair(a,b){
//   if(a===50 || b===50 ||(a+b === 50) ){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(checkPair(50,10))
// console.log(checkPair(20,10))
// console.log(checkPair(40,10))
// console.log(checkPair(50,50))

// Q 10  Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// Q 11 Write a JavaScript program to check two given integers whether one is positive and another one is negative.

// function tets1(x,y){
//   if(x < 0 && y>0  || x>0 && y<0){
//     return true
//   }else{
//    return false
//   }

// }

// console.log(tets1( 20 , -20))
// console.log(tets1( 20 , -20))
// console.log(tets1( 20 , 20))
// console.log(tets1( -20 , -20))

// Q12 Write a JavaScript exercise to get the filename extension.

// const filename = "sbc.java"

// console.log(filename.split(".").pop())

// Q13. Write a JavaScript exercise to create a variable using a user-defined name.

// var name = "abc"

// var n = 100

// this[name] = n

// console.log(this[name])

// Q14 Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

// function test2(str){
//   if(str === null || str === undefined || str.substring(0,2)  === "py"){
//     return str
//   }else{
//     return "py" + str
//   }
// }

// console.log(test2("python"))
// console.log(test2("thon"))

// Q15 Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// function test3(str) {

//   if(str <= 1){
//     return str
//   }else{
//     const check = str.substring(1 , str.length-1)
//     // console.log(check)= a
//     console.log(  str.charAt(0) )
//     return (`${str.charAt( str.length-1)}${check}${str.charAt(0)}`)
//   }}

//   console.log(test3("day"))

// Q16 Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// const test4 = (str, pos) =>{
//   const part1 = str.substring(0, pos)
//   const part2 = str.substring(pos+1, str.length)

//   console.log(part1 + part2)

// }

// console.log(test4("hello", 1))

// Q 17 Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back

// function test5(str) {
//   const f = str.charAt(0)
//   console.log(str.length)

//   const result = ( f + str + f)
//   console.log(result)
// }

// console.log(test5("swift"))
// Q18 Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

// function test6(num) {
//   if(num % 3  === 0 || num % 7 === 0 ){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(test6(49))

// Q19 Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

// function tets7 (str) {
// if(str.length >= 3){
//   const first = str.substring( str.length - 3 )
//   const result =  first + str + first
//   console.log(result)
// }else{
// return false
// }

// }

// console.log(tets7("swift"))
// console.log(tets7("ab"))

// Q20  Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise

// function test8(str) {
//   if (str.length < 4)
//   {
//     return false;
//   }
//   const first = str.substring(0,4)

//   if(first === "java"){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(test8("javascript"))
// console.log(test8("java"))
// console.log(test8("python"))
// console.log(test8("py"))

// Q 21  Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

// function test9(x, y){
//   if((x >= 50 && x <= 99) || (y >= 50 && y<= 99)){
//     return true

//   }else{
//     return false
//   }

// }
// console.log(test9( 52, 180))
// console.log(test9( 52, 80))
// console.log(test9( 15, 10))

// Q 22  Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

// function test10(str) {
//   if(str.length < 5){
//     return false
//   }
//   let result_str = str
//    const forst = str.substring(4,10)
//   if(forst ==="script"){
//     return  str.substring(0, 4) + str.substring(10, str.length)
//   }else{
//     return result_str
//   }
// }

// console.log(test10("javascript"))
// console.log(test10("coffescript"))

// Q 23Write a JavaScript program to find the largest of three given integers.

// function test11(x, y, z) {
//   if (x > y && x > z) {
//     console.log(`${x} is the largest number`);
//   } else if (y > x && y > z) {
//     console.log(`${y} is the largest number`);
//   } else if (z > x && z > y) console.log(`${z} is the largest number`);
// }
// console.log(test11(1000, 200, 500));
// console.log(test11(1000, 2000, 500));
// console.log(test11(1000, 200, 5000));
// console.log(test11(0,-10,-20));

// anthor way
// function max_of_three(x, y, z)
//  {
//   max_val = 0;
//   if (x > y)
//   {
//     max_val = x;
//   } else
//   {
//     max_val = y;
//   }
//   if (z > max_val)
//   {
//     max_val = z;
//   }
//   return max_val;
// }

// console.log(max_of_three(1,0,1));
// console.log(max_of_three(1000,510,440));
// console.log(max_of_three(0,-10,-20));

// Q24 Write a JavaScript program to find the closest value to 100 from two numerical values.

// function test12(x, y) {
//   let a = 100-x
//   let b = 100-y
//   if(a<b){
//     console.log(`${a} is the nearest number 100`)
//   }else{
//     console.log(`${b} is the nearest number 100`)

//   }
// }

// console.log(test12(80, 90))
// console.log(test12(-80, -90))

// function near_100(x, y) {
//   if (x != y)
//   {
//   x1 = Math.abs(x - 100);
//   y1 = Math.abs(y - 100);

//   if (x1 < y1)
//   {
//     return x;
//   }
//   if (y1 < x1)
//   {
//     return y;
//   }
//   return 0;
//   }
//   else
//     return false;
// }

// console.log(near_100(90, 89));
// console.log(near_100(-90, -89))
