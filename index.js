const button= document.querySelector("ul")
const days = document.querySelectorAll(".day")
const weeks = document.getElementsByClassName("week")
const months = document.querySelectorAll(".month")
const time  = document.querySelectorAll(".time ")
const show = document.querySelectorAll(".show")
const week = Array.from(weeks)

button.addEventListener("click", (e)=>{
  
  let show = document.querySelector('.show')
 if(e.target.id == "daily-btn"){
   document.getElementById("weekly-btn").classList.remove("active")
   document.getElementById("monthly-btn").classList.remove("active")
    e.target.classList.add("active")
    days.forEach(day =>{
      if(!day.className.includes("show")){
        for( var t of time){
          if(t.className.includes('show') && !t.className.includes('day')){
            t.classList.remove("show")
          }
        }
        day.classList.add("show")
      }
    })
  } 
  if(e.target.id == "weekly-btn"){
    document.getElementById("monthly-btn").classList.remove("active")
    document.getElementById("daily-btn").classList.remove("active")
    e.target.classList.add("active")
    week.forEach(item =>{
      if(!item.className.includes("show")){
        for( var t of time){
          if(t.className.includes('show') && !t.className.includes('week')){
            t.classList.remove("show")
          }
        }
        item.classList.add("show")
      }
    })
  }
  if(e.target.id == "monthly-btn"){
    document.getElementById("daily-btn").classList.remove("active")
    document.getElementById("weekly-btn").classList.remove("active")
    e.target.classList.add("active")
    months.forEach(month =>{
      if(!month.className.includes("show")){
        for( var t of time){
          if(t.className.includes('show') && !t.className.includes('month')){
            t.classList.remove("show")
          }
        }
        month.classList.add("show")
      }
    })
  }
})
