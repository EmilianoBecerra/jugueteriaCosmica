document.body.addEventListener("click", ev => {
    const element = ev.target.closest("a[open]")
    if(element){
        ev.preventDefault()
        document.querySelector("#modal").classList.toggle("modalVisible")
    }
    
})

document.body.addEventListener("click", ev=>{
    const element = ev.target.closest(".closeBtn")

    if(element){
        document.querySelector("#modal").classList.remove("modalVisible")
    }
})

document.body.addEventListener("keydown", ev=>{
    if(ev.key === "Escape"){
        document.querySelector("#modal").classList.remove("modalVisible")
    }
})


document.body.addEventListener('click', ev=>{
    const element = ev.target.closest(".btnPagar")

    if(element){
        ev.preventDefault()
        document.querySelector("#modal").classList.remove("modalVisible")
    }

})


