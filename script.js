// your code here
let text= document.getElementById("url")
let name = document.getElementById("name")
let year= document.getElementById("year")

let button= document.getElementById("button")
button.addEventListener('click',()=>{
    console.log(name.value, year.value)
    if(name.value !== "" && year.value !==""){
     return   text.innerText=`${text.innerText}/?name=${name.value}/year=${year.value}`
    }else if(year.value ===""){
     return   text.innerText=`${text.innerText}/?name=${name.value}`
    }
    else {
     return   text.innerText=`${text.innerText}/?year=${year.value}`
    }
})

