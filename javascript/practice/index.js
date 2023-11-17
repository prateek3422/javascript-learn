// Q 1. Write a JavaScript program to display the current day and time in the following format.
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

// // Q2 Write a JavaScript program to get the current date.
// // Expected Output :
// // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

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

// // Q4 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// const num = 2014;

// if((num/4) === 0){
//   console.log(`leap year`)
// }else if(num / 100) {
//   console.log(`not leap year`)

// }

// // Q5 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// const num = Math.ceil(Math.random() * 10)

// const guess = window.prompt(`guess the number`)

// if(num === guess){
//   console.log("Good Work")
// }else{
//   console.log( "Not matched")
// }

// // Q6 Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// // [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// // Expected Output :
// // 60°C is 140 °F
// // 45°F is 7.222222222222222°C

// // c = (f-32) (5/9)

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

// // Q7  Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// function diffrence(n) {
//   if(n <= 13){
//     return  13 - n
//   }else{
//     return (n-13)*2
//   }

// }
// console.log(diffrence(32))
// console.log(diffrence(11))

// // Q8 Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// function sum( a, b){
//   if(a === b){
//     return (a+b)*3
//   }else{
//     return a+b
//   }
// }

// console.log(sum(10,20))
// console.log(sum(10,10))

// // Q9  Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

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

// Q 25 Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive./

// function test13(x, y ) {
//   if ( x >= 40  && x <= 60 &&  y >=  40  && y <= 60|| x >= 70 && x<=100 &&  70 <= y && y <=  100 ){
//     return true
//   }else
//   {
//     return false
//   }

// }

// console.log(test13(50 , 90))
// console.log(test13(44 , 56))
// console.log(test13(74 , 90))

// Q26 Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

// function tets14(str, char) {
//     let ctr = 0

//     for (let i=0; i<= str.length; i++){
//         if( (str.charAt(i) == char) && (i >= 1 && i <= 3)) {
//             ctr =1
//             break;
//         }
//     }

//     if(ctr == 1){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(tets14("python", "z"))
// console.log(tets14("javascript", "a"))
// console.log(tets14("python", "h"))
// console.log(tets14("python", "n"))

// Q27 Write a JavaScript program that checks whether the last digit of three positive integers is the same.

// function test15(x,y,z) {
//     if(x>=0 && y>=0 && z>=0 ){
//         return (x%10 === 0 && y%10===0 && z%10===0)

//     }else {
//         return false
//     }
// }

// console.log(test15(30,40,50))

// Q28 Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

// function test16(str) {
//     if(str.length<3){
//         return str.toUpperCase()
//     }
//     let x = (str.substring(0,3)).toLowerCase()
//     let y = str.substring(3, str.length)

//     console.log(x + y)

// }

// console.log(test16("python"))
// console.log(test16("JAVAscript"))
// console.log(test16("py"))

// Q29 Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.

// function test17(marks, isexam) {
//     if(isexam){
//       return  marks >= 90
//     }
//     return(marks >= 89 && marks <=100)
// }

// console.log(test17(78, " "))
// console.log(test17(89, " true"))
// console.log(test17(98, "true "))

// Q30 Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
// function test18(x, y) {
//     let z = x+y

//     if(z >=  50 && z <= 80){
//         return 65

//     }else{
//         return 80
//     }
// }
// console.log(test18(30, 30))
// console.log(test18(80, 90))

// Q31  Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
// function test19(x, y) {

//     if( x == 8 || y==8){
//         return true
//     }
//     if(x+y == 8 || Math.abs(x-y ) == 8){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(test19(3,5))
// console.log(test19(32,24))
// console.log(test19(17,18))
// console.log(test19(16,8))

// Q32 Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// const test20 = (x, y, z) => {

//     return (x > 20 && (x < y || x < z)) ||
//     (y >= 20 && (y < x || y < z)) ||
//     (z >= 20 && (z < y || z < x))

// };

// console.log(test20(23, 23, 10));
// console.log(test20(23, 45, 10));

// Q33 Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.

// const test21 = (x,y,z) =>{
//     return ((x%10 == y%10) || (x%10 == z%10) || (y%10 == z%10))
// }

// console.log(test21(22,32,42))
// console.log(test21(122,32,2))
// console.log(test21(20,32,45))

// Q34 Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

// Q35 Write a JavaScript program to reverse a given string.

// const test24= (str) =>{

// let x = str.split("").reverse("").join("")
// console.log(x)
// }

// console.log(test23("hello"))

// Q 36 Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// function test24(str) {
//     let x = str.split("")

//     console.log(x)
//     for( let i = 0; i< x.length; i++){
//         console.log(x[i])
//         switch(x[i]){
//             case " " :
//                 break;
//             case "z" :
//             x[i] = "a"
//             break;

//             case "Z" :
//             x[i] = "Z"
//             break;

//             default :
//             x[i] =   String.fromCharCode(1 + x[i].charCodeAt(0))

//         }

//         switch(x[i]){
//             case "a" : case "e" : case "i" : case "o" : case  "u":
//                 x[i] = x[i].toUpperCase()
//         }
//     }
//     return x.join("")
// }

// console.log(test24("PYTHON"))

// Q37 Write a JavaScript program to capitalize the first letter of each word in a given string.

// function test25(str) {
//     let x = str.split(" ")

//     for ( let i=0; i < x.length; i++){
//         x[i]=  x[i][0].toUpperCase() +x[i].substring(1)
//     }

//     return x.join("")
// }

// console.log(test25("the brown fox"))

// Q38 Write a JavaScript program to convert a given number into hours and minutes.

// function test26(x) {
//     let h = Math.floor(x/60)
//     let m = Math.floor(x%60)

//     console.log(`${h} : ${m} `)
// }
// console.log(test26(450))
// console.log(test26(750))
// console.log(test26(120))

// Q39 Write a JavaScript program to convert letters of a given string alphabetically

// function test27(str) {
//     return str.split("").sort().join("")

// }

// console.log(test27("Python"))

// Q40 Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

//     function ab_Check(str)
//     {
//        return (/a...b/).test(str) || (/b...a/).test(str);
//     }

//    console.log(ab_Check("Chainsbreak"));
//    console.log(ab_Check("pane borrowed"));
//    console.log(ab_Check("abCheck"));

// Q41 Write a JavaScript program to count the number of vowels in a given string.

// function test28(str) {
//     return str.replace(`/[^aeiou]/g, " "`).length

// }
// console.log(test28("resource"))
// console.log(test28("python"))

// Q42 Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

// function test29(str) {

//     let p = str.replace(/[^p]/g, "")
//     let t = str.replace(/[^t]/g, " " )

//     const x = p.length
//     const y = t.length

//     console.log(x === y)
// }

// console.log(test29("paatpss"))

// Q 43 Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

// Q 44 Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

// function test31(str, n) {
//     if(n < 0){
//         return false
//     }else{

//     return x = str.repeat(n)
//     }
// }
// console.log(test31("abc", 5))

// Q45 Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.

// function test32() {
//     let str = "python"

//     const s = str.substring(str.length-3, str.length)
//     const r = s.repeat(5)

//     console.log( (`${str}${r}`))
// }
// test32()

// Q46 Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

// function test33() {
//     let str = "python"

//     const x = str.slice(3) + str.slice(0, -3)
//     console.log(x)
// }

// test33()

// Q47 Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

// function test34(str) {
//     if(str.length % 2 != 0){
//          mid = (str.length + 1)/2;
//         return  str.slice( mid-2 , mid+1)
//     }else{
//         return str
//     }

// }

// console.log(test34("abcdefg"))

// Q48 Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

// function test35(x,y ){
//     const m = Math.min(x.length,y.length)

//     return x.substring(x.length -m) + y.substring(y.length -m )
// }

// console.log(test35("python", "js"))

// Q49 Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

// Q50 Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// function test37(){
//     const num = [10,32,20]
//     const x = num[0]  + num[1 ]+num[2]
// console.log(x)
// }

// test37()

// Q51 Write a JavaScript program to reverse the elements of a given array of integers of length 3.\

// function test38(){
//     const arr = [1,2,3,4]

//     arr.map()
//     const x = arr.reverse()
//     console.log(x)
// }

// test38()

// =======or=========

// function reverse3(array) {
//     return array.map((element, idx, arr) =>   arr[(arr.length - 1) - idx])

//     }

// console.log(reverse3([5, 4, 3]));
// console.log(reverse3([1, 0, -1]));
// console.log(reverse3([2, 3, 1]));

// Q52 Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

// function test39() {
//     let arr = [20, 30, 12]

//     const big = arr[0] > arr[2] ? arr[0]:arr[2]

//     arr[0] = big
//     arr[1] = big
//     arr[2] = big

//     console.log(arr)

// }

// test39()

// Q53 Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

// function test40() {
//     const x = [2,4,5]
//     const y = [5,8,9]

//         const z = [x[1], y[1]]
//         console.log(z)

// }

// test40()

// function test40(a,b) {
//     const arr = []
//    arr.push(a[1], b[1])
//    return arr

// }
// console.log(test40([1, 2, 3], [1, 5, 6]));
// console.log(test40([3, 3, 3], [2, 8, 0]));
// console.log(test40([4, 2, 7], [2, 4, 5]));

// Q54 Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

// function test41(n){
//     let x = []
//     x.push(n[0], n[n.length -1])
//     return x
// }

// console.log(test41([20,30,10]))

// Q55 Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

// function test42(x) {
//     if(x.indexOf(1) != -1 || x.indexOf(3) != -1){
//         return true
//     }else{
//         return false
//     }

// }

// console.log(test42([1,2]))
// console.log(test42([3,2]))
// console.log(test42([6,2]))

// Q 56 Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

// function test43(x) {
//     if(x.indexOf(1) == -1 && x.indexOf(3) == -1){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(test43([1,2]))
// console.log(test43([3,2]))
// console.log(test43([6,2]))

// Q57 Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.

// function test44() {
// let x = [30, 30]

// if(x[0] == 30 || x[0] == 40){
//     const r = x[0] == x[1]
//     console.log(r)
// }else{
//     console.log(false)
// }
// }

// test44()

// =========OR=========

// function twice3040(arra1) {
//     let a = arra1[0],
//         b = arra1[1];
//     return (a === 30 && b === 30) || (a === 40 && b === 40);
// }

// console.log(twice3040([30, 30]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));

// Q58 Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// function test44(){
//     let arr  = [1,4,6,7,8]

//     const a = arr[0]
//     arr[0]  = arr[arr.length -1]
//     arr[arr.length-1] = a

//     console.log(arr)
// }

// test44()

// Q 59 Write a JavaScript program to add two digits to a given positive integer of length two.

// function test45(){
//     let x = 45
//     let r = Array.from(String(x), x)

//     console.log(r)
// }

// test45()

// function addTwoIntegersWithoutCarrying(n1, n2) {
//     var result = 0, x = 1;
//     while (n1 > 0 && n2 > 0) {
//       result += x * ((n1 + n2) % 10);
//       n1 = Math.floor(n1 / 10);
//       n2 = Math.floor(n2 / 10);
//       x *= 10;
//     }
//     return result;
//   }

//   console.log(addTwoIntegersWithoutCarrying(222, 911)); // 1133
// console.log(addTwoIntegersWithoutCarrying(200, 900)); // 1100

// Q60 Write a JavaScript program to find the longest string from a given array of strings.

// function test46(params) {
//   let x  = ["aa" , "aaa", "aaaaa", "aaaaaaa"]
//   let max = x[0].length

//   x.map((v) =>{

//     max = Math.max(max, v.length)
//   })

//   let result = x.filter(v => v.length == max)
//   console.log( result)
// }

// test46()

// Q61 Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

// function test47() {
//   let arr = [1,3,5,6,10]
//   let result = [0,0]

//   for(let i = 0; i<arr.length; i++){

//     if(i %2 != 0){
//       result[1] += arr[i]

//     }else{
//       result[0] += arr[i]

//     }
//   }
//   console.log( result)
// }

// test47()

// Q62 Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.\

// function test48(x,y) {
//   for(let i =0; i<x.length; i++){
//     // console.log(i)
//     for(let j=i; j<x.length; j++){
//       console.log(j)
//       let result = true
//       let temp = x[i]
//       x[i] = x[j]
//       x[j] = temp

//       console.log(x[i])

//       for(let k=0; k<x.length; k++){

//         if(x[k] !== y[k]){
//           result = false
//           break;
//         }

//       }
//       if(result){
//         return true
//       }
//       x[j] = x[i]
//       x[i] = temp
//     }

//   }
//   return false

// }

// console.log(test48([20,30,40], [20,30,40]))

// Q 63 Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

// function test49(x){

//   if(x[0] % x[x.length-1] == 0 && x[1] % x[x.length-1]){
//     return true

//   }else{
//     return false
//   }

// }

// test49()

// Q 64 Write a JavaScript program to find the kth greatest element in a given array of integers.

// function test50(arr, k){

//   for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//       if(arr[i]<arr[j]){
//         let tem = arr[i]
//         arr[i] =arr[j]
//         arr[j] = tem

//         if(k>0 && k<arr.length){
//           return arr[k-1]
//         }
//       }
//     }
//   }
// }

// console.log(test50([6,4,5,3,2,1], 3))
// console.log(test50([-10,-25,-47,-36,0], 1 ))

// ===========oR==============

// function findKthGreatest(arr, k) {
//   // Sort the array in descending order
//   arr.sort((a, b) => b - a);
//   // console.log(arr)

//   // Check if k is within the array bounds
//   if (k > 0 && k <= arr.length) {
//       return arr[k - 1]; // Return the kth greatest element
//   } else {
//       return "K is out of range";
//   }
// }

// // Example usage:
// const array = [6, 4, 5, 3, 2, 1];
// const k = 3;
// const result = findKthGreatest(array, k);

// console.log(`The ${k}th greatest element in the array is: ${result}`);

// ===========oR=========

// function Kth_greatest_in_array(arr, k) {
//   // console.log(k)

//   for (let i = 0; i < k; i++) {
//     let max_index = i;
//     const tmp = arr[i];
//     // console.log(tmp)

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[max_index]) {
//         max_index = j;

//       }
//     }

//     arr[i] = arr[max_index];
//     arr[max_index] = tmp;
//   }

//   return arr[k - 1];
// }

// console.log(Kth_greatest_in_array([1,2,6,4,5], 4))
// console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

// Q65 Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

// function test51(arr, k) {
//   let result = 0;
//   let sum = 0;

//   for (let i = 0; i < k - 1; i++) {
//     sum += arr[i];
//   }
//   // i= 1
//   // i=2
//   // i=3
//   // i=4

//   for (let i = k-1 ; i < arr.length; i++) {
//     // sum=2
//     // sum=3
//     // sum=14
//     // sum=5

//     sum += arr[i];
//     // console.log(sum)

//     // sum=3
//     // sum=5
//     // sum=17
//     // sum=19
//     if(sum>result){

//       result = sum
//       // result =3
//       // result =5
//       // result =17
//       // result =19
//     }

//     sum -= arr[i - k + 1];

//     // 3 -= arr[0]
//     // 5 -= arr[1]
//     // 17 -= arr[2]
//     // 19 -= arr[4-2+1]

//     // console.log(sum)
//     // console.log(result)
//   }
//   return result;
// }

// console.log(test51([1, 2, 3, 14, 5], 2));

// Q66 Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

// function test52(){
//   let arr = [1,2,3,4,10]
//   let max = -1

//   for(let i=0; i<arr.length-1; i++){
//     let x = Math.abs( arr[i] - arr[i+1])

//     max = Math.max(max,x)

//   }

//   console.log(max)
// }
// test52()

// Q67 Write a JavaScript program to find the number appearing most frequently in a given array of integers.

// function test53(){
// let arr = [1,2,3,2,2,8,9]
// const ctr = []
// let result = 0
// for(let i=0; i<10; i++){
//   ctr.push(0)
// }

// for(let i=0; i<arr.length; i++){
// }

// }
// test53()

// Q68 JavaScript program to find the most frequent element in an array
// "use strict"

// function test54(arr) {

// let max_count = 0;
// let max_freq;

// for(let i=0; i<arr.length; i++){
//   let count = 0

//   for(let j=0; j<arr.length; j++){
//     if(arr[i] == arr[j]){
//       count++
//     }

//   }

//   if(count> max_count){
//     max_count = count
//     max_freq = arr[i]
//   }
// }
// return max_freq

// }

// console.log(test54([1,2,3,4,3,3,5,6]))
// console.log(test54([1,2,3,4,2,5,6]))
// console.log(test54([1,2,3,4,5,5,5,6]))

// Q69 Write a JavaScript program to replace all numbers with a specified number in an array of integers.

// function test55(arr, old, new_val){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]== old){
//             arr[i] = new_val
//         }
//     }
//    return arr

// }

// console.log(test55([1,2,3,2,2,2,8,9],2,5))

// Q70 Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

// function test56(arr) {
//     let sum = 0

//     for(let i=0; i<arr.length-1; i++){
//      sum += Math.abs(arr[i] - arr[i+1])
//     }
//     console.log(sum)

// }

// console.log(test56([1,2,3,2,-5]))

// Q71  Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.

// function test57(a) {
//     let x= 0
//     let y=0

//     for(let i=0; i<a.length; i++){
//         if(/[A-Z]/.test(a[i])){
//             // console.log(a[i])
//             x++
//         }else y++

//     }
//     if(y>x){
//         return a.toLowerCase()
//     }
//         return a.toUpperCase()

// }

// console.log(test57("WRITe"))

// Q72 Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.
// function test58(arr1, arr2){

//     for(let i=0; i<arr1.length; i++){
//         if(arr2.indexOf(arr1[i]) != -1){
//             return true

//         }

//     }
//     return false
// }

// console.log(test58( [1,2,3],[5,4,5]))

// Q73 Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

// function test59(a) {
//     console.log(a.substring(0,1))
// }
// console.log(test59('aBc'))

// Q74  reverse number

// function test60(num) {

//     let x = num.toString().split("")
//     console.log(x)
//     let start= 0
//     let end = x.length

//     while(start<end){
//         let z  =x[start]
//         x[start] = x[end]
//         x[end]= z

//         start++
//         end--

//     }
//     for(let i=0; i<x.length; i++){
//         console.log(x[i])
//     }
//     console.log(x)
// }
// console.log(test60(12345))

// --------or----------

// function test60(x){
//     let rev =0
//     while(x>0){
//         let rem =  x%10
//         rev = rev*10+rem
//         x = Math.floor(x/10)
//     }
//     return rev
// }
// console.log(test60(12345))

// Q 75 check palindrome

// function test61(s){
//     let rev = s.split("").reverse().join("")
//     return (rev === s) ? "this string is palindrome" : "this string is not palindrome"
// }
// console.log(test61("lool"))
// console.log(test61("loop"))

// Q76 AlphaBetical order

// function test62(s) {
//     return s.split("").sort()
// }
// console.log(test62("apple"))

// Q 77 first letter upperCAse

// function test63(str) {
//     let s = str.split(" ")
//     let words = s.map(ele =>{
//         return ele.substring(0,1).toUpperCase()+ele.substring(1)
//     })
//     return words.join(" ")
// }
// console.log(test63("hello my name is"))

// Q78 repeted char
// function test64(str){
//     let occ = {}
//     str.split("").map(ele =>{
//        if( occ.hasOwnProperty(ele) === false){
//         occ[ele] = +1
//        }else{
//         occ[ele]++
//        }
//     })
//     return occ
// }
// console.log(test64("apple"))

// Q79 add num in loops

// function test65() {
// // let arr = [1,2,3,4,5,6,7]
// let arr = [1,2,3,4,5,11.2, true, "hello"]
// let sum = 0
// arr.forEach(ele =>{
//     if(typeof ele === "number"){
//         sum = sum + ele
//     }
// })

// console.log(sum)
// }

// test65()

// Q80  Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

// function test66(str) {
//   const lowercase = Symbol =>{
//     if("a" <= Symbol && Symbol <= "z" ){
//       return true
//     }
//     return false
//   }

//   const upperCAse = Symbol =>{
//     if("A" <= Symbol && Symbol <= "Z"){
//       return true
//     }
//     return false
//   }

//   const first_lower = lowercase(str[0])
//   const first_upper = upperCAse(str[0])

//   if(!(first_lower || first_upper)){
//     return false
//   }

//   for(let i =1; i<str.length;i++){
//     if(i%2){
//       if(first_lower === lowercase(str[i]) || first_upper === upperCAse(str[i])){
//         return false
//       }

//     }else{
//       if(first_lower !== lowercase(str[i] || first_upper !== upperCAse(str[i]))){
//         return false
//       }

//     }
//   }
//   return true

// }

// console.log(test66("xYz"))

// Q 81 Write a JavaScript program to find the number of inversions of a given array of integers.

// function test67 (){
//   const arr = [0,3,2,5,4,8,9]

//   let ctr = 0

//   for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[i] > arr[j]){
//         ctr++
//       }

//     }

//   }
//   console.log(ctr)
// }

// test67()

// Q 82 Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.

// function test68(){
//   let num = 100

// }

// test68()

// Q83 Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer

// function test69(arr, n){
//   let max_val = -1

//   for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//       const x = Math.abs(arr[i] - arr[j])

//       if(x<=n){
//         max_val = Math.max(max_val, x)

//       }
//        }
//   }
//   return max_val
// }
// console.log(test69([12, 10, 33, 34], 10));
// console.log(test69([12, 10, 33, 34], 24));
// console.log(test69([12, 10, 33, 44], 40));

// Q84 Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number

// function test70(num) {
//   const digitsum = () => {
//     let sum = 0;

//     while (num > 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   };

//   let count = 0;
//   while (num >= 10) {
//     count += 1;
//     num = digitsum(num);
//   }

//   return count;
// }

// console.log(test70(123));
// console.log(test70(255));

// Q 85 Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

// function test71(x,y){
//     if(y==1){
//         return x
//     }else{
//         while(x%y === 0){
//             x /= y
//         }
//         return x
//     }
//     }

// console.log(test71(-12, 2))

// Q86 Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.

// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

// function tets72(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if(arr[i]%arr[j] == 0 || arr[j] % arr[i] == 0){
//         count++
//       }
//     }
//   }
//   return count
// }
// console.log(tets72( [2, 4, 6]))

// Q87 Write a JavaScript program to create the dot products of two given 3D vectors.

// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

// function test73(arr1,arr2) {
//   let  sum =0
//   for(let i=0; i<3; i++){
//     let dot = arr1[i]* arr2[i]
//     sum = sum+dot
//   }
//   return sum
// }

// console.log(test73([1,2,3], [1,2,3]))

// Q88 Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
// function test74(num) {
//   let isPrime;
//   let arr = [];
//   for (let i = 2; i <= num; i++) {
//     isPrime = true;
//     for (let j = 2; j <= i / 2; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime === true) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }

// console.log(test74(5))

// Q89  Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

// function test75(arr,num){
//   let count =0

//   for(let i=1; i<arr.length; i++){
//     if(i%2===0 ){
//       count++
//     }

//     if(arr[i] === num){
//       return count
//     }
//   }
//   return -1

// }

// console.log(test75([1,2,3,4,5,6,7,8],5))

// IMP => Q90 Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

// function test76(x) {
//   let mul = 1;
//   for (let i = 1; i <= x; i++) {
//     mul = mul * i;
//   }
//   let count = 0;
//   while (mul > 0) {
//     if (mul % 10 === 0) {
//       count++;
//       mul = mul / 10;
//     } else break;
//   }
//   console.log(count);
// }
// console.log(test76(10));

// ==========OR=============

// function trailing_zeros_factorial(n) {
//     var result = 0;
//     for (var i = 5; i <= n; i = i+) {
//         console.log(i)
//         var num = i;
//         while (num % 5 === 0) {
//             num /= 5;
//             result++;
//         }
//     }
//     return result;
// }

// // console.log(trailing_zeros_factorial(8))
// // console.log(trailing_zeros_factorial(9))
// console.log(trailing_zeros_factorial(10))


// Q91 Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
// function test77(x){
//     let sum = 0
//     while(x>0){
//         sum += x
//         x = Math.floor(x/2)
//     }
//     console.log(sum)
// }
// console.log(test77(8))

// Q92 