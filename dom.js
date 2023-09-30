const color = document.querySelectorAll(".color")
const body = document.querySelector("body")

color.forEach((elem)=>{
    // console.log(elem)
    elem.addEventListener("click", function (e) {
        // console.log(e);
        // console.log(e.target)

        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id

        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id

        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id

        // }
        // if(e.target.id === 'red'){
        //     body.style.backgroundColor = e.target.id

        // }

        switch(e.target){
            case grey: body.style.backgroundColor = "grey" ;
            break
            case blue: body.style.backgroundColor = e.target.id ;
            break
            case yellow: body.style.backgroundColor = e.target.id ;
            break
            case red: body.style.backgroundColor = e.target.id ;
            break
        }

    })
})