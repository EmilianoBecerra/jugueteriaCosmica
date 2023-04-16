export const deleteStorage = ()=> {
    const linkPay = document.querySelector('.linkBtnPay')
    linkPay.addEventListener('click', ()=>{
        localStorage.removeItem('cart')
    })
}


export const addCartBD = () =>{
    const button = document.querySelector('.btnPayCartPay')
    button.addEventListener("submit", (ev)=>{
        ev.preventDefault()
        const cart = JSON.parse(localStorage.cart)

        const body = {

        }
    })
}