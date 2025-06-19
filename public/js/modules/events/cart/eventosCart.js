export const addCartBD = () => {

    const button = document.querySelector('.btnPayCartPay')

    button.addEventListener('click', async (ev) => {
        const localStorageCart = JSON.parse(localStorage.cart)

        const totalCart = localStorageCart.reduce((acc, producto) => {
            return acc + producto.subtotal
        }, 0)


        const body = {
            items: localStorageCart.map((product) => {
                return {
                    productId: product.id,
                    quantity: product.cantidad
                }
            }),
            state: 'active',
            total: totalCart
        }

        await fetch(`https://jugueteriacosmica-zcre.onrender.com/cart/pagar`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    })
}



export const deleteStorage = () => {
    const linkPay = document.querySelector('.linkBtnPay')
    linkPay.addEventListener('click', () => {
        localStorage.removeItem('cart')
    })
}
