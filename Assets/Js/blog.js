const container =document.querySelector(".container")
const section2=document.querySelector(".section-2")
const home=document.querySelector(".home")
const pages1=document.querySelector(".pages1")
const angle=document.querySelector(".angle")

state="flex"
state2="rotate(180deg)"
home.addEventListener("click",()=>{
    pages1.style.display=state
    state=state=="flex"? "none":"flex"

    angle.style.transform=state2
    state2=state2=="rotate(180deg)"? "rotate(0deg)":"rotate(180deg)"
})
