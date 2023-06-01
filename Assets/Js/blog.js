const container =document.querySelector(".container")
const section2=document.querySelector(".section-2")
const home=document.querySelector(".home")
const pages=document.querySelector(".pages")
const homeDropDown=document.querySelector(".home_dropdown")
const pageDropDown=document.querySelector(".page_dropdown")
const angle=document.querySelector(".angle")
const angle2=document.querySelector(".angle2")

state="flex"
state2="rotate(180deg)"
home.addEventListener("click",()=>{
    pageDropDown.style.display="none"
    homeDropDown.style.display=state
    state=state=="flex"? "none":"flex"

    angle.style.transform=state2
    state2=state2=="rotate(180deg)"? "rotate(0deg)":"rotate(180deg)"
})

pages.addEventListener("click",()=>{
    homeDropDown.style.display="none"
    pageDropDown.style.display=state
    state=state=="flex"? "none":"flex"

    angle2.style.transform=state2
    state2=state2=="rotate(180deg)"? "rotate(0deg)":"rotate(180deg)"
})
