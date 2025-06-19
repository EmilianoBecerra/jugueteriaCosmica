export const required = () => {
    const input = document.querySelectorAll(".obligatorio")
    input.forEach(input => {
        input.setAttribute("required", true);
    })
}

export const añadirEventosForm = () => {
    const form = document.querySelector("form");

    const listenerReutilizable = (inputAChequear, validacionRegex) => {
        inputAChequear.addEventListener("blur", ev => {
            const input = ev.target;
            const value = input.value;
            const errMsgSpan = input.parentElement.querySelector(".errMsg");
            const resultadoValidacion = validacionRegex(value);

            inputAChequear.setCustomValidity(resultadoValidacion);
            errMsgSpan.innerText = resultadoValidacion;
        })
    }

    const regexNombre = (value) => {
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{1,30}$/;
        let errMsg = "";

        if (!regExp.test(value)) {
            errMsg = "No debe contener caracteres especiales";
        }
        return errMsg;
    }

    const regexPrecio = (value) => {
        const regExp = /^(?<!-)[\d\,]{1,}$/;
        let errMsg = "";

        if (!regExp.test(value)) {
            errMsg = "Debe ser un número positivo mayor a 0";
        }
        return errMsg;
    }

    const regexStock = (value) => {
        const regExp = /^(?<!-)[0-9]{1,}$/;
        let errMsg = "";

        if (!regExp.test(value)) {
            errMsg = "Debe ser un número positivo o cero";
        }
        return errMsg
    }

    const regexMarca = (value) => {
        let errMsg = ""
        if (value == "") {
            return errMsg = "";
        } else {
            const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{1,40}$/;

            if (!regExp.test(value)) {
                errMsg = "No debe contener caracteres especiales";
            }
            return errMsg
        }
    }

    const regexCategoria = (value) => {
        let errMsg = "";
        if (value == "") {
            errMsg = "";
        }
        else {
            const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{1,50}$/;

            if (!regExp.test(value)) {
                errMsg = "No debe contener caracteres especiales";
            }
        }
        return errMsg;
    }

    const regexDescripcionCorta = (value) => {
        const regExp = /^[\wñáéíóúü\.\,\'\"\s\/\-]{10,80}$/;
        let errMsg = "";

        if (!regExp.test(value)) {
            errMsg = "Debe tener entre 10 y 80 caracteres";
        }
        return errMsg;
    }

    listenerReutilizable(form.nombre, regexNombre)
    listenerReutilizable(form.precio, regexPrecio)
    listenerReutilizable(form.stock, regexStock)
    listenerReutilizable(form.marca, regexMarca)
    listenerReutilizable(form.categoria, regexCategoria)
    listenerReutilizable(form.descripcion, regexDescripcionCorta)

    form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const formData = new FormData(form);
        try {
            const res = await fetch("https://jugueteriacosmica-zcre.onrender.com/api/alta", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Error ${res.status}: ${errorText}`);
            }

            const result = await res.json();
            console.log("✅ Producto creado:", result);
            alert("Producto subido correctamente.");
        } catch (err) {
            console.error("❌ Error al subir el producto:", err);
            alert("Hubo un error al enviar el formulario. Revisá la consola.");
        }
    })
}
