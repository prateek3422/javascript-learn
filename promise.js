const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() =>{
        console.log("hello promise")
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("promise Consumerd")
})


const promisTwo = new Promise(function(resolve, reject) {
    setTimeout(() =>{
        resolve({user:"code", email:"code@gmail.com"})
    },1000)
})

promisTwo.then((user) =>{
    console.log(user)
})


const promiseThree = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        error = true

        if(!error){
            resolve({userName: "prateek", email: "test@gmail.com"}) 
        }else{
            console.log("someThing wents wrong")
        }
    },1000)
})


promiseThree
.then((user) =>{
    console.log(user)
    return user.userName
})
.then((userName) =>{
    console.log(userName)
})
.catch((error)  =>{
    console.log(error)
})