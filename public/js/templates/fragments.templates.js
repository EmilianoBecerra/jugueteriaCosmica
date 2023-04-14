export const cartTemplate = Handlebars.compile(`
<span class="closeBtn">X</span>
<div class="carritoProductos">
    {{#each cart}}
        <div class="products">
            <div class="imagen">
                <img src="public/img/productos/{{this.imagen}}" alt="">
            </div>
            <div class="product">
                <div class="infoProduct">
                    <div class="descriptionProduct">
                        <span class="nombre">
                            {{this.nombre}}
                        </span>
                        <span>
                            <span class="precioProductModal">
                                Unidades :  {{this.cantidad}}
                            </span>
                            <button class="restarBtn btnAñadir" idProduct = "{{this.id}}"> - </button>
                            <button class="añadirAlCarrito btnAñadir" idProduct = "{{this.id}}"> + </button>
                        </span>
                    </div>
                </div>
                <div class="cantProduct">
                    <span class="subtotalProductModal">
                        Sub-total : $  {{this.subtotal}} 
                    </span>
                    <span class="spanDelete">
                        <button class="deleteProduct" idProduct = "{{this.id}}"> Eliminar </button>
                    </span>
                </div>
            </div>
        </div>
    {{/each}}
</div>

<div class="divTotal">
    <span class="total">
        Total: $ {{total}}
    </span>
</div>
<div class="divPagar">
    <button  class="btnPagar"> Pagar </button>
</div>
`)


export const cuadroCantidades = Handlebars.compile(`
        <span class="cantidades">
            {{this.cantidades}}
        </span>
`)
