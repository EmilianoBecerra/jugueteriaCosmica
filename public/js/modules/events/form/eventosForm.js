export const required = () => {
    const input = document.querySelectorAll(".obligatorio")
    input.forEach(input => {
        input.setAttribute("required", true)
    })
}

export const añadirEventosForm = () => {
    const form = document.querySelector("#section-alta form")

    const listenerReutilizable = (inputAChequear, validacionRegex) => {
        inputAChequear.addEventListener("blur", ev=>{
            const input = ev.target
            const value = input.value
            const errMsgSpan = input.parentElement.querySelector(".errMsg")

            
            const resultadoValidacion = validacionRegex(value)

            inputAChequear.setCustomValidity(resultadoValidacion)
            errMsgSpan.innerText = resultadoValidacion
        })
    }

    const regexNombre = (value) => {
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{1,30}$/

        let errMsg = ""


        if (!regExp.test(value)) {
            errMsg = "No debe contener caracteres especiales"
        }

        return errMsg
    }

    const regexPrecio = (value) => {

        const regExp = /^(?<!-)[\d\,]{1,}$/

        let errMsg = ""

        if(!regExp.test(value)){
            errMsg = "Debe ser un número positivo mayor a 0"
        }

        return errMsg
    }

    const regexStock = (value) => {

        const regExp = /^(?<!-)[0-9]{1,}$/

        let errMsg = ""

        if(!regExp.test(value)){
            errMsg = "Debe ser un número positivo o cero"
        }

        return errMsg
    }

    const regexMarca = (value) => {
        let errMsg = ""

        if(value == ""){
            return errMsg=""
        }else{
            
            const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{1,40}$/

            if(!regExp.test(value)){
                errMsg = "No debe contener caracteres especiales"
            }
    
            return errMsg
        }
    }

    const regexCategoria = (value) => {
        
        let errMsg = ""

        if(value == ""){
            errMsg=""
        }
        else{
            const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{1,50}$/

            if (!regExp.test(value)) {
                errMsg = "No debe contener caracteres especiales"
            }
        }
        return errMsg
    }

    const regexDescripcionCorta = (value) => {
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{10,80}$/

        let errMsg = ""


        if (!regExp.test(value)) {
            errMsg = "Debe tener entre 10 y 80 caracteres"
        }

        return errMsg
    }

    const regexDescripcionLarga = (value) => {
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{10,2000}$/

        let errMsg = ""


        if (!regExp.test(value)) {
            errMsg = "Debe tener entre 10 y 2000 caracteres"
        }

        return errMsg
    }


    const regexEdadDesde = (value) => {

        const regExp = /^^(?<!-)([1-9]0?){1,2}$/

        let errMsg = ""

        if(!regExp.test(value)){
            errMsg = "Debe ser un número positivo mayor a 0 y hasta 99"
        }

        return errMsg
    }

    const regexEdadHasta= (value) => {

        const regExp = /^^(?<!-)([1-9]0?){1,2}$/

        let errMsg = ""

        if(!regExp.test(value)){
            errMsg = "Debe ser un número positivo mayor a 0 y hasta 99"
        }

        return errMsg
    }

    listenerReutilizable(form.nombre, regexNombre)
    listenerReutilizable(form.precio, regexPrecio)
    listenerReutilizable(form.stock,regexStock)
    listenerReutilizable(form.marca, regexMarca)
    listenerReutilizable(form.categoria, regexCategoria)
    listenerReutilizable(form.descripcionCorta,regexDescripcionCorta)
    listenerReutilizable(form.descripcionLarga,regexDescripcionLarga)
    listenerReutilizable(form.edadDesde,regexEdadDesde)
    listenerReutilizable(form.edadHasta,regexEdadHasta)
    

    form.addEventListener("submit", async ev=>{
            
        const body = {
            id: form.idNumber.value,
            nombre: form.nombre.value,
            precio: parseInt(form.precio.value),
            stock: form.stock.value,
            marca: form.marca.value,
            categoria: form.categoria.value,
            descripcionCorta: form.descripcionCorta.value,
            descripcionLarga: form.descripcionLarga.value,
            edadDesde: form.edadDesde.value,
            edadHasta: form.edadHasta.value
        }
    
        const response = await fetch("http://localhost:8080/api/alta",{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
    
        })
    })
    
    
}

