export const homeTemplate = Handlebars.compile(`
    <section id="section-home">
        <div class="presentation">
            <div class="eslogan">
                <h2>Todo lo que buscas...</h2>
                <h2 class="segundoEslogan">Todo está acá.</h2>
            </div>
            <div class="btn-products">
                <a to="/productos"><button>Ver Productos</button></a>
            </div>
        </div>
        <img id="imgs" src="/img/logo/cartel.png" alt="">
        <article class="comentarios">
            <div class="comentario-card">
                <b>Comprador 1 </b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident unde libero aliquid neque culpa ullam impedit quasi eligendi, maxime vitae, quidem hic praesentium eveniet. Nostrum veritatis optio dicta ipsum.</p>
            </div>
            <div class="comentario-card">
                <b>Comprador 2 </b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident unde libero aliquid neque culpa ullam impedit quasi eligendi, maxime vitae, quidem hic praesentium eveniet. Nostrum veritatis optio dicta ipsum.</p>
            </div>
            <div class="comentario-card">
                <b>Comprador 3 </b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident unde libero aliquid neque culpa ullam impedit quasi eligendi, maxime vitae, quidem hic praesentium eveniet. Nostrum veritatis optio dicta ipsum.</p>
            </div>
        </article>
    </section>
`)


export const productosTemplate = Handlebars.compile(` 
<section id="section-cards">
    <div class="cards-container">
        {{#each productos}}
        <a class="card">
            <article class="detailProducto">
                <div class="card__image">
                    <img src='{{this.imagen}}' class="imagenProductos" alt="">
                </div>
                <div class="card__content">
                    <div class="card__description">
                        <p class="nombreProducto" >{{this.nombre}}</p>
                        <p class="productDescription">{{this.descripcion}}</p>
                        <span class="precio"> $ {{this.precio}}</span>
                    </div>
                    <button type="button" idProduct="{{this.id}}" class="añadirAlCarrito" > Añadir + </button>
                </div>
            </article>
        </a>
        {{/each}}
    </div>
</section>
`)
export const altaTemplate = Handlebars.compile(`
    <section id="section-alta">
        
        <h2>Crear Producto</h2>
        <form id="form" action= ""  class="formAlta" enctype="multipart/form-data"  >
            <div class="field" >
                <label for="id">ID</label>
                <input type="text" name="idNumber">
            </div>
            <div class="field">
                <label for="nombre" >Nombre*</label>
                <input type="text"  class="obligatorio" name="nombre">
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="">Marca</label>
                <input type="text"  name="marca">
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="">Precio *</label>
                <input type="text"  class="obligatorio" name="precio">
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="">Stock *</label>
                <input type="text"  class="obligatorio" name="stock">
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="">Categoria</label>
                <input type="text"  name="categoria">
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="">Descripcion Corta *</label>
                <textarea  condicion="obligatorio" name="descripcion"></textarea>
                <span class="errMsg"></span>
            </div>
            <div class="field">
                <label for="imagen">Imagen *</label>
                <input type="file" name="archivo"  class="obligatorio" >
            </div>

            <button type="submit" id="envioForm" clase="envio">Crear Producto</button>
        </form>
    </section>
`)

export const contactoTemplate = Handlebars.compile(`
    <section  id="section-contact">

        <h2> Contacto </h2>
        <form action="0" class="formContacto">
            <div class="field">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre">
            </div>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
            </div>
            <div class="field">
                <label for="comentario">Comentarios/Dudas</label>
                <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button type="submit"> Enviar consulta </button>

        </form>
    </section>
`)

export const pagarTemplate = Handlebars.compile(`

    <section id="sectionPayCart">
        <h1 class="tittlePayCart">
            PAGAR
        </h1>
        <div class="containerPayCart">
            {{#each cart}}
            <div class="productPayCart">
                <h2 class="productNamePayCart">
                    {{this.nombre}}
                </h2>
                <div class="descriptionProductPayCartContainer">
                    <div class="divImage">
                        <img src=" ./../../img/productos/{{this.imagen}}" alt="" class="imageProductPayCart">
                    </div>
                    <div class="descriptionProductPayCart"> 
                        <span class="quantityProductPayCart">
                            Cantidad : {{this.cantidad}}
                        </span>
                        <span class="productDescription">
                            Descripcion: {{this.descripcion}}
                        </span>
                        <span>
                            Precio: $ {{this.precio}}
                        </span>
                    </div>
                </div>
            </div>    
            {{/each}}
        </div>    
        <div class="payContainerCartPay">
            <span class='spanTotalCartPay'>
                Total a pagar: $ {{total}}
            </span> 
            
            <a href='/productos' class='linkBtnPay'>
                <button type='submit' class="btnPayCartPay"> 
                    Pagar 
                </button>

            </a> 
        </div>
    </section>
`)