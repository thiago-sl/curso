const body = document.getElementsByTagName("body")[0]
const counter = document.getElementById("counter")
var number = 0

body.addEventListener("click",clicar)
body.addEventListener("keyup",clicar)

counter.innerHTML = `Total de vezes clicado : ${number}`
function clicar(){
    number = number + 1
    counter.innerHTML = `Total de vezes clicado : ${number}`
}