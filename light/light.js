const body = document.body
const bulb = document.getElementsByClassName("bulb")

const btn = document.getElementsByClassName("btn")
let isActive = false

btn[0].addEventListener("click", () => {
    if (isActive === false) {
        bulb[0].setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif")
        btn[0].textContent = "Turn off"
        isActive = true
    } else {
        bulb[0].setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif")
        btn[0].textContent = "Turn on"
        isActive = false
    }



})



const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
    console.log(event.target.value)
  result.textContent = `You like ${event.target.value}`;
});


const input=document.querySelector("#one")
input.addEventListener("input", (event) => {
    console.log(event.target.value)
 
});


document.addEventListener("keypress", (e) => {
    if(e.key==="o"){
 bulb[0].setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif")
        btn[0].textContent = "Turn off"
        isActive = true

    }else {
        if(e.key==="f"){
             bulb[0].setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif")
        btn[0].textContent = "Turn on"
        isActive = false
        }
    }
});
